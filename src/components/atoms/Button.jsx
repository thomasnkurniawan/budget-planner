import { cn } from "../../utils/cn";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-full text-sm font-medium transition active:scale-[0.98]";

  const padding = {
    iconOnly: "p-3",
  };

  const variants = {
    primary:
      "bg-neutral-900 text-white hover:bg-neutral-800 shadow-sm",
    ghost:
      "border border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50",
    outline:
      "border border-neutral-200 bg-transparent text-neutral-900 hover:bg-neutral-50",
    iconOnly:
      "border border-neutral-200 bg-transparent text-neutral-900 hover:bg-neutral-50",
    'danger-outline':
      "border border-red-700 bg-transparent text-red-700 hover:bg-red-50",
    danger: 
      "bg-red-700 text-white hover:bg-red-800",
  };

  return (
    <button
      className={cn(base, padding[variant] || "px-4 py-2", variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
