import React, { useState, useEffect } from "react";
import { MdArrowDropUp, MdOutlineCalendarToday } from "react-icons/md";
import Card from "components/card";
import LineChart from "components/charts/LineChart";
import Axios from "axios";

const MonthlyActivity = () => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    xaxis: {
      categories: [],
    },
  });
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [percentageIncrease, setPercentageIncrease] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch messaging activity trends data
        const response = await Axios.get('https://www.vassbot.com/apis/messaging-activity-trends', {
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTcxNzY3NzI3OCwianRpIjoiMzU1NjdjMGQtOWUzMy00YmI4LWIyNzktM2U0Zjk5NzY3NDQxIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImdsYWR5c3dhaGl0bzdAZ21haWwuY29tIiwibmJmIjoxNzE3Njc3Mjc4LCJjc3JmIjoiZTRmZTQwNjItZTU1MC00ZTRkLWJkNDEtZGJkYTFjYTFjMzlkIiwiZXhwIjoxNzE3NjgwODc4fQ.VuOGz1c2CP445NCOlXrvHHvcMas6fRAEBK5uLcRuheM',
            'Content-Type': 'application/json',
          },
          data: {
            "duration_in": "months",
            "stats_date_from": `2022-${selectedMonth.toString().padStart(2, '0')}-11`
          }
        });
        const data = response.data;
        const categories = data.map(item => item.month);
        const seriesData = data.map(item => item.texts_sent);
        setChartOptions(prevOptions => ({ ...prevOptions, xaxis: { categories } }));
        setChartData([{ name: "Texts Sent", data: seriesData }]);

        // Fetch percentage increase data
        const increaseResponse = await Axios.get('URL_TO_YOUR_API_ENDPOINT', {
          headers: {
            Authorization: 'Bearer YOUR_AUTH_TOKEN',
            'Content-Type': 'application/json',
          },
        });
        const increaseData = increaseResponse.data;
        setPercentageIncrease(increaseData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [selectedMonth]);

  const handleMonthChange = (e) => {
    setSelectedMonth(parseInt(e.target.value));
  };

  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80"
          >
            {[...Array(12).keys()].map((month) => (
              <option key={month + 1} value={month + 1}>
                {new Date(null, month, 1).toLocaleDateString('en', { month: 'long' })}
              </option>
            ))}
          </select>
          <MdOutlineCalendarToday className="absolute right-0 top-0 bottom-0 mt-auto mb-auto mr-2 text-gray-600 pointer-events-none" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            Monthly Activity
          </h4>
          <p className="text-sm font-medium leading-4 text-gray-600">
            Number of texts sent per month
          </p>
        </div>
        <div className="flex flex-row items-center justify-center">
          <MdArrowDropUp className="font-medium text-green-500" />
          <p className="text-sm font-bold text-green-500">
            {percentageIncrease !== null ? `${percentageIncrease}% increase` : "Loading..."}
          </p>
        </div>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="flex flex-col">
          <div className="flex flex-col items-start">
          </div>
        </div>
        <div className="h-full w-full">
          <LineChart
            options={chartOptions}
            series={chartData}
          />
        </div>
      </div>
    </Card>
  );
};

export default MonthlyActivity;
