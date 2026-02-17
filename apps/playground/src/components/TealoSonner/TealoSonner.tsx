"use client";

import { Toaster } from "@/components/ui/sonner";

export type TealoToasterProps = React.ComponentProps<typeof Toaster>;

function TealoToaster(props: TealoToasterProps) {
  return <Toaster {...props} />;
}

export { TealoToaster };
export { toast } from "sonner";
