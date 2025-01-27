import * as React from "react"
import { cn } from "@/lib/utils"

export interface ChoiceChipProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const ChoiceChip = React.forwardRef<HTMLInputElement, ChoiceChipProps>(({ className, label, ...props }, ref) => {
  return (
    <label
      className={cn(
        "inline-flex items-center justify-center rounded-full px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        props.checked
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        className,
      )}
    >
      <input type="checkbox" className="sr-only" ref={ref} {...props} />
      {label}
    </label>
  )
})
ChoiceChip.displayName = "ChoiceChip"

export interface ChoiceChipsProps extends React.HTMLAttributes<HTMLDivElement> {
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
}

export function ChoiceChips({ options, value, onChange, className, ...props }: ChoiceChipsProps) {
  const handleChange = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option))
    } else {
      onChange([...value, option])
    }
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {options.map((option) => (
        <ChoiceChip
          key={option}
          label={option}
          checked={value.includes(option)}
          onChange={() => handleChange(option)}
        />
      ))}
    </div>
  )
}

