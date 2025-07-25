import React from 'react'
import { Badge } from '../ui/badge'

const StatusBadge = ({status}:{status:string}) => {
  return (
    <div>
      <Badge variant="secondary" className="flex  items-center gap-2 w-fit mt-1">
            <span
              className={`relative flex h-2 w-2 rounded-full ${status === "Completed"
                  ? "bg-green-500"
                  : status === "Prototype"
                    ? "bg-yellow-400"
                    : status === "UI Redesign"
                      ? "bg-blue-500"
                      : "bg-red-500"
                }`}
            >
              <span
                className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${status === "Completed"
                    ? "bg-green-400"
                    : status === "Prototype"
                      ? "bg-yellow-300"
                      : status === "UI Redesign"
                        ? "bg-blue-400"
                        : "bg-red-400"
                  }`}
              />
            </span>
            {status}
          </Badge>
    </div>
  )
}

export default StatusBadge
