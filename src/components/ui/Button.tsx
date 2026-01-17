import type { ButtonHTMLAttributes } from "react";
import { cn } from "../../lib/cn";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" | "danger" };

export function Button({ className, variant = "primary", ...props }: Props) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium transition",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                variant === "primary" && "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
                variant === "secondary" && "bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-slate-400",
                variant === "danger" && "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
                className
    )}
    {...props}
        />
    );
}