import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import { DiApple, DiAndroid, DiWindows } from "react-icons/di";

import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
// import Progress from "components/progress";

const DevelopmentTable = (props) => {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 12 }, // Set initial page size
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page, // Instead of 'rows', we'll use 'page'
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = tableInstance;

  return (
    <Card extra={"w-full h-full p-4"}>
      <div className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Messages Received
        </div>
        <CardMenu />
      </div>

      <div className="h-full overflow-x-scroll xl:overflow-x-hidden">
        <table
          {...getTableProps()}
          className="mt-8 w-full border-collapse"
          variant="simple"
          color="gray-500"
          mb="24px"
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className="border-b border-gray-200 pr-32 pb-[10px] text-center dark:!border-navy-700"
                    key={index}
                  >
                    <div className="text-xs font-bold tracking-wide text-gray-600">
                      {column.render("Header")}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={index}>
                  {row.cells.map((cell, index) => {
                    let data = cell.value;
                    if (cell.column.Header === "VIA") {
                      data = (
                        <div className="flex items-center justify-center gap-2">
                          {cell.value === "channel" && (
                            <div className="text-[22px] text-gray-600 dark:text-white">
                              <DiApple />
                            </div>
                          )}
                          {cell.value === "android" && (
                            <div className="text-[21px] text-gray-600 dark:text-white">
                              <DiAndroid />
                            </div>
                          )}
                          {cell.value === "windows" && (
                            <div className="text-xl text-gray-600 dark:text-white">
                              <DiWindows />
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <td
                        {...cell.getCellProps()}
                        key={index}
                        className="pt-[14px] pb-3 text-[14px] text-center"
                      >
                        {data}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className={`${
            !canPreviousPage && "cursor-not-allowed opacity-50"
          } border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none`}
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className={`${
            !canNextPage && "cursor-not-allowed opacity-50"
          } border border-gray-300 rounded-md px-4 py-2 text-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none`}
        >
          Next
        </button>
      </div>
    </Card>
  );
};

export default DevelopmentTable;
