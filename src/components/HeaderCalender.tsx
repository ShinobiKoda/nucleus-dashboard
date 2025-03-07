"use client"
 
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { ChevronDown as ArrowDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 
 

export default function HeaderCalender() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
 
  return (
    <Popover>
      <PopoverTrigger asChild className="bg-[#F4F5F7] border-none rounded-md">
        <Button
          variant={"outline"}
          className={cn(
            "w-[226px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <ArrowDown />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-[#F4F5F7] rounded-xl">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
