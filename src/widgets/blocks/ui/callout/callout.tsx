import Image from "next/image"
import { Info } from "lucide-react"
import { twMerge } from "tailwind-merge";

export const Callout = ({ children, icon, color = "default", className }: { children: React.ReactNode, icon?: any, color?: string, className?: string }) => {
  const colorClasses = {
    default: "bg-gray-100 border-gray-200 text-gray-800",
    blue: "bg-blue-100 border-blue-200 text-blue-800",
    red: "bg-red-100 border-red-200 text-red-800",
    green: "bg-green-100 border-green-200 text-green-800",
    yellow: "bg-yellow-100 border-yellow-200 text-yellow-800",
  }[color] || "bg-gray-100 border-gray-200 text-gray-800"

  return (
    <div className={twMerge(`flex items-start p-4 mb-4 border rounded-md ${colorClasses}`, className)}>
      <div className="flex-shrink-0 mr-3">
        {icon && icon.type === 'emoji' && <span className="text-xl">{icon.emoji}</span>}
        {icon && icon.type === 'file' && <Image src={icon.url} alt="" width={20} height={20} />}
        {!icon && <Info className="w-5 h-5" />}
      </div>
      <div>{children}</div>
    </div>
  )
}