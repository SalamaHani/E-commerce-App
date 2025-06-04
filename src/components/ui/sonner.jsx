import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import { cn } from "@/lib/utils";
const Toaster = ({ className, ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      position="top-center"
      className={cn("toaster group dark:bg-gray-800", className)}
      // style={{
      //   "--normal-bg": "var(--popover)",
      //   "--normal-text": "var(--popover-foreground)",
      //   "--normal-border": "var(--border)",
      // }}
      {...props}
    />
  );
};

export { Toaster };
