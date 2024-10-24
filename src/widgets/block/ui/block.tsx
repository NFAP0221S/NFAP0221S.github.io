import { twMerge } from "tailwind-merge"
import Image from "next/image"

export const Paragraph = ({ content, className }: { content: string, className?: string }) => (
  <p className={twMerge("mb-4 text-gray-700 dark:text-gray-300", className)}>{content}</p>
)

export const Heading1 = ({ content, className }: { content: string, className?: string }) => (
  <h1 className={twMerge("text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100", className)}>{content}</h1>
)

export const Heading2 = ({ content, className }: { content: string, className?: string }) => (
  <h2 className={twMerge("text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200", className)}>{content}</h2>
)

export const Heading3 = ({ content, className }: { content: string, className?: string }) => (
  <h3 className={twMerge("text-xl font-bold mb-2 text-gray-800 dark:text-gray-200", className)}>{content}</h3>
)

export const BulletedListItem = ({ content, className }: { content: string, className?: string }) => (
  <li className={twMerge("ml-6 mb-2 list-disc text-gray-700 dark:text-gray-300", className)}>{content}</li>
)

export const NumberedListItem = ({ content, className }: { content: string, className?: string }) => (
  <li className={twMerge("ml-6 mb-2 list-decimal text-gray-700 dark:text-gray-300", className)}>{content}</li>
)

export const ToDo = ({ content, checked, className }: { content: string, checked?: boolean, className?: string }) => (
  <div className={twMerge("flex items-center mb-2", className)}>
    <input type="checkbox" checked={checked} readOnly className="mr-2" />
    <span className="text-gray-700 dark:text-gray-300">{content}</span>
  </div>
)

export const Toggle = ({ content, className }: { content: string, className?: string }) => (
  <details className={twMerge("mb-4", className)}>
    <summary className="cursor-pointer text-gray-800 dark:text-gray-200">{content}</summary>
    {/* Nested content would go here */}
  </details>
)

export const ImageBlock = ({ url, className }: { url: string, className?: string }) => (
  <div className={twMerge("mb-4", className)}>
    <Image src={url} alt="Post image" width={600} height={400} className="rounded-lg" />
  </div>
)

export const CodeBlock = ({ content, language, className }: { content: string, language?: string, className?: string }) => (
  <pre className={twMerge("bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4 overflow-x-auto", className)}>
    <code className={`language-${language}`}>{content}</code>
  </pre>
)

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
