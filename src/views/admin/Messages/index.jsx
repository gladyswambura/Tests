import {
  columnsDataDevelopment,
} from "./variables/columnsData";
import DevelopmentTable from "./components/DevelopmentTable";
import AxiosInstance from "../../../axiosConfig";
import React, { useState, useEffect } from "react";
import { getItem } from "utils/localStorage";


const Tables = () => {
  const [error, setError] = useState(null);
  const [tableDataDevelopment, setTableData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getItem("access_token")
        const response = token && await AxiosInstance(token).get("/fetch-messages/1000"); 
        setTableData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError(error.message);
      }
    };

    fetchData();
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5 md:grid-cols-1">
        <DevelopmentTable
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
      </div>
    </div>
  );
};


export default Tables;