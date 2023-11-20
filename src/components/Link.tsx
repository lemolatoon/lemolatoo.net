import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  noColor?: boolean;
} & React.ComponentProps<typeof Link>;
const StyledLink: React.FC<Props> = ({ children, noColor, ...props }) => {
  const noColorClassName = noColor ? "" : "text-blue-600 dark:text-blue-500";
  return (
    <Link
      {...props}
      className={`font-medium hover:underline ${noColorClassName}`}
    >
      {children}
    </Link>
  );
};

export default StyledLink;
