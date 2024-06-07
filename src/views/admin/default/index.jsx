import React, { useState, useEffect } from "react";
import MiniCalendar from "components/calendar/MiniCalendar";
import MonthlyActivity from "views/admin/default/components/MonthlyActivity";
import PieChartCard from "views/admin/default/components/PieChartCard";
import { IoMdHome } from "react-icons/io";
import { IoRefresh } from "react-icons/io5";
import { MdAddCircle, MdBarChart, MdDashboard } from "react-icons/md";
import { columnsDataCheck } from "./variables/columnsData";
import Widget from "components/widget/Widget";
import CheckTable from "views/admin/default/components/CheckTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import TaskCard from "views/admin/default/components/TaskCard";
import tableDataCheck from "./variables/tableDataCheck.json";
import AddNodeForm from '../../../components/nodes/add-node'; 
import AxiosInstance from "../../../axiosConfig";
// import AddBulkNodeForm from '../../../components/add-bulk-node';
// import ReviewNodesForm from '../../../components/review-nodes';

const Dashboard = () => {
  const [botData, setBotData] = useState(null);
  const [error, setError] = useState(null);
  const [isAddNodeModalOpen, setIsAddNodeModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/dashboard-stats"); 
        console.log("Response:", response.data);
        setBotData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  const openAddNodeModal = () => {
    setIsAddNodeModalOpen(true);
  };

  const closeAddNodeModal = () => {
    setIsAddNodeModalOpen(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!botData) {
    return <div>Loading...</div>;
  }

  const botList = botData.switch_bots ? Object.values(botData.switch_bots) : [];
  return (
    <div>
      {/* widgets */}
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          subtitle={botData ? `${botData.bot_name} ` : ""}
          botList={botList}
        />
        <Widget
          icon={
            <MdAddCircle
              className="h-7 w-7 cursor-pointer"
              onClick={openAddNodeModal}
            />
          }
          title={"Bot Knowledge Entries"}
          subtitle={botData ? `${botData.tot_nodes} Nodes` : ""}
        />
        <Widget
          icon={<IoRefresh className="h-6 w-6" />}
          title={"Messages Received"}
          subtitle={botData ? botData.tot_msgs : ""}
          link="/" 
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Response Accuracy"}
          subtitle={botData ? `${botData.bot_accuracy}/10` : ""}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-5" />}
          title={"Customers Engaged"} 
          subtitle={botData ? botData.tot_visitors : ""}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-8" />}
          title={"user_timezone"}
          subtitle={botData ? botData.user_timezone : ""}
        />
        
      </div>

      {/* Add Node Modal */}
      {isAddNodeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
            <button onClick={closeAddNodeModal} className="float-right text-gray-500">
              &#x2715; {/* Close button */}
            </button>
            <AddNodeForm />
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <MonthlyActivity />
        <DailyTraffic />
        <PieChartCard />
      </div>

      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          <CheckTable
            columnsData={columnsDataCheck}
            tableData={tableDataCheck}
          />
        </div>

        {/* Task chart & Calendar */}
        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          <TaskCard />
          <div className="grid grid-cols-1 rounded-[20px]">
            <MiniCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
