import React from "react";
import {
  useTable,
  useSortBy,
  useRowSelect,
  useMountedLayoutEffect,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import GlobalFilter from "./GlobalFilter";
import { GlobalFilterBox, TablePagination, TableTasks } from "./Table.style";

export default function Table({
  columns,
  data,
  selectedRows,
  onSelectedRowsChange,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
        selectedRowIds: selectedRows,
      },
      autoResetPage: false,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );

  const { selectedRowIds, pageIndex } = state;

  useMountedLayoutEffect(() => {
    onSelectedRowsChange && onSelectedRowsChange(selectedRowIds);
  }, [onSelectedRowsChange, selectedRowIds]);

  return (
    <>
      <GlobalFilterBox>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </GlobalFilterBox>
      <TableTasks
        {...getTableProps()}
        border={1}
        style={{ borderCollapse: "collapse", width: "90%" }}
      >
        <thead>
          {headerGroups.map((group) => (
            <tr {...group.getHeaderGroupProps()}>
              {group.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}{" "}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <AiOutlineArrowDown />
                      ) : (
                        <AiOutlineArrowUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </TableTasks>
      <TablePagination className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageCount}
          </strong>{" "}
        </span>
      </TablePagination>
    </>
  );
}
