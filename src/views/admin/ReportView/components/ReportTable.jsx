import React from "react";
import CardMenu from "../../../../components/card/CardMenu";
import Card from "../../../../components/card";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

const ReportTable = ({ columnsData, tableData, reportName, switchForms, handleFormSwitch }) => {
  const columns = React.useMemo(() => columnsData, [columnsData]);
  const data = React.useMemo(() => tableData, [tableData]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  initialState.pageSize = 5;

  return (
    <Card extra={"w-full h-full p-4 sm:overflow-x-auto"}>
      {/* Header Row 1 */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col">
          <div className="text-xl font-bold text-navy-700 dark:text-white">
            {reportName}
          </div>
          <div className="flex items-center">
            <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
              Export to Excel
            </button>
            <select
              className="bg-gray-200 px-3 py-1 rounded"
              onChange={e => handleFormSwitch(e.target.value)}
            >
              <option value="">Select Form</option>
              {Object.entries(switchForms).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
        <CardMenu />
      </div>
      {/* Header Row 2 */}
      <div className="flex justify-between">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                key={column.id}
                className="border-b border-gray-200 pr-28 pb-[10px] text-start dark:!border-navy-700"
              >
                <p className="text-xs tracking-wide text-gray-600">
                  {column.render("Header")}
                </p>
              </th>
            ))}
          </tr>
        ))}
      </div>
      {/* Table Body */}
      <div className="mt-8 h-full overflow-x-scroll xl:overflow-hidden">
        <table {...getTableProps()} className="w-full">
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} key={row.id}>
                  {row.cells.map((cell) => {
                    let data = cell.value;
                    return (
                      <td
                        className="pt-[14px] pb-[18px] sm:text-[14px]"
                        {...cell.getCellProps()}
                        key={cell.column.id}
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
    </Card>
  );
};

export default ReportTable;
