import React from "react";
import { twMerge } from "tailwind-merge";

export const TableBlock = ({ table, className }: { table: { headers: string[], rows: { id: string, cells: string[] }[] }, className?: string }) => (
  <div className={twMerge("mb-4 overflow-x-auto", className)}>
    <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700">
      <thead>
        <tr>
          {table.headers.map((header, index) => (
            <th key={index} className="border border-gray-300 dark:border-gray-700 p-2 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row.id}>
            {row.cells.map((cell, index) => (
              <td key={index} className="border border-gray-300 dark:border-gray-700 p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

