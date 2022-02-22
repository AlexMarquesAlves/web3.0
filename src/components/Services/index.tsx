import { ReactNode } from "react";

interface ServicesProps {
  children?: ReactNode;
}

function Services({ children }: ServicesProps) {
  return (
    <>
      <h1>Services</h1>
      {children}
    </>
  );
}

export default Services;
