import * as React from "react";

import { Label as ShadcnLabel } from "@/components/ui/label";

const TealoLabel = React.forwardRef<
  React.ElementRef<typeof ShadcnLabel>,
  React.ComponentPropsWithoutRef<typeof ShadcnLabel>
>((props, ref) => <ShadcnLabel ref={ref} {...props} />);
TealoLabel.displayName = "TealoLabel";

export { TealoLabel };
