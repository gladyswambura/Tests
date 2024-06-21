import React, { useState, useEffect } from "react";
import AxiosInstance from "../../../axiosConfig";
import ReportTable from "./components/ReportTable";
import { columnsDataReport } from "./variables/columnsData";
import axios from "axios";

const Tables = () => {
  const [tableDataReport, setTableData] = useState([]);
  const [reportName, setReportName] = useState("");
  const [switchForms, setSwitchForms] = useState({});
  const [error, setError] = useState(null);

  const fetchData = async (reportNumber = "2") => {
    try {
      const requestBody = {
        report_number: reportNumber,
        limit_records_count: 1000,
        order_by: "desc"
      };
  
      const response = await AxiosInstance.get('/retrieve-report', {
        params: requestBody,
        maxRedirects: 0, 
        validateStatus: status => status === 308
      });
  
      // If the response status is 308, follow the redirect
      if (response.status === 308) {
        const newUrl = response.headers.location;
        const redirectResponse = await axios.post(newUrl, requestBody);
        handleResponse(redirectResponse);
      } else {
        handleResponse(response);
      }
    } catch (error) {
      console.error("Error fetching report data:", error);
      setError("Failed to fetch report. Please try again.");
    }
  };
  

  const handleResponse = (response) => {
    console.log("Response from API:", response.data); // Log the response data for debugging
    const tableDataReport = response.data.current_report.report_data || [];
    const reportName = response.data.current_report?.report_name || "";
    const switchForms = response.data.switch_forms || {};

    setTableData(tableDataReport);
    setReportName(reportName);
    setSwitchForms(switchForms);
    setError(null);
  };

  const handleFormSwitch = (reportNumber) => {
    if (reportNumber) {
      fetchData(reportNumber);
    }
  };

  useEffect(() => {
    fetchData(); // Fetch initial data with default report number
  }, []);

  console.log("State after update:", { reportName, switchForms, tableDataReport,  error }); 

  return (
    <div>
      {error && <div>Error: {error}</div>}
      <ReportTable
        reportName={reportName}
        switchForms={switchForms}
        handleFormSwitch={handleFormSwitch}
        columnsData={columnsDataReport}
        tableData={tableDataReport}   
      />
    </div>
  );
};

export default Tables;
