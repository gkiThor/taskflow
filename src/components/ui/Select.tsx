import type { SelectHTMLAttributes } from "react";  
import {cn} from "../../lib/cn";

type Props = SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ className, ...props }: Props) {
    return (
        <select
            className={cn(
                "w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm",
                "focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900",
                className
            )}
            {...props}
        />
    );
}