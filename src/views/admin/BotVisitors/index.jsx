import React, { useState, useEffect } from "react";
import ColumnsTable from "./components/ColumnsTable";
import AxiosInstance from "../../../axiosConfig";

const Tables = () => {
  const [visitorsData, setVisitorsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AxiosInstance.get("/fetch-visitors/100"); 
        setVisitorsData(response.data);
      } catch (error) {
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
        <ColumnsTable tableDataColumns={visitorsData} />
      </div>
    </div>
  );
};

export default Tables;