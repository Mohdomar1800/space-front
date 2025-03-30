import React from "react";
import { useTable } from "react-table";

const CargoTable = ({ containers }) => {
  const columns = React.useMemo(
    () => [
      { Header: "Container", accessor: "id" },
      { Header: "Used Space", accessor: "usedSpace" },
      { Header: "Capacity", accessor: "capacity" },
      { Header: "Items", accessor: "itemsList" },
    ],
    []
  );

  const data = React.useMemo(
    () =>
      containers.map((container) => ({
        id: `Container ${container.id}`,
        usedSpace: `${container.usedSpace}/${container.capacity}`,
        capacity: container.capacity,
        itemsList: container.items
          .map((item) => `${item.name} (${item.size} units)`)
          .join(", "),
      })),
    [containers]
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className="table-auto w-full border-collapse">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} className="border p-2">
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="border">
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()} className="border p-2">
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CargoTable;
