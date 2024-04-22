import * as Icons from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

export interface DynamicIconProps extends IconProps {
  iconName: keyof typeof Icons;
  className: string;
}

export const DynamicIcon = ({ iconName, className }: DynamicIconProps) => {
  const Icon = Icons[iconName];

  return <Icon className={className} />;
};
