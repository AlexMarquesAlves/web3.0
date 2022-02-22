import { ReactNode } from "react";

interface WelcomeProps {
  children?: ReactNode;
}

function Welcome({ children }: WelcomeProps) {
  return (
    <>
      <h1>Welcome</h1>
      {children}
    </>
  );
}

export default Welcome;
