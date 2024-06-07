import React, { useState, useEffect } from "react";
import AxiosInstance from "../../../axiosConfig";
import ReportTable from "./components/ReportTable";
import { columnsDataReport } from "./variables/columnsData";

const Tables = () => {
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/apis/retrieve-report", {
          data: {
            report_index_no: "2"
          },
        });
        setTableData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        {error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <ReportTable columnsData={columnsDataReport} tableData={tableData} />
        )}
      </div>
    </div>
  );
};

export default Tables;
