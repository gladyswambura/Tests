import React, { useMemo } from "react";
import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { columnsDataColumns } from "../variables/columnsData";

const ColumnsTable = ({ tableDataColumns }) => {
  const columns = useMemo(() => columnsDataColumns, []);
  const data = useMemo(() => tableDataColumns, [tableDataColumns]);

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
    page,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
  } = tableInstance;

  return (
    <Card extra={"w-full pb-10 p-4 h-full"}>
      <header className="relative flex items-center justify-between">
        <div className="text-xl font-bold text-navy-700 dark:text-white">
          Bot Visitors List
        </div>
        <CardMenu />
      </header>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table {...getTableProps()} className="w-full">
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={index}
                    className="border-b border-gray-200 pr-14 pb-[10px] text-start dark:!border-navy-700"
                  >
                    <div className="flex w-full justify-between pr-10 text-xs tracking-wide text-gray-600">
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
                  {row.cells.map((cell, index) => (
                    <td
                      className="pt-[14px] pb-[20px] sm:text-[14px]"
                      {...cell.getCellProps()}
                      key={index}
                    >
                      {/* Check if the cell value is a URL */}
                      {cell.column.Header === "Picture" &&
                      cell.value !== null &&
                      cell.value !== "" ? (
                        <img src={cell.value} alt="Profile" />
                      ) : (
                        // Render the cell value as text if it's not a URL
                        cell.render("Cell")
                      )}
                    </td>
                  ))}
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

export default ColumnsTable;
