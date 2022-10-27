import { HTMLAttributes } from 'react';

export const Header: React.FC<HTMLAttributes<HTMLHeadElement>> = ({
  ...props
}) => {
  return <header {...props} />;
};
