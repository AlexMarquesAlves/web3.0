import { ReactNode } from 'react';

interface LoaderProps {
  children: ReactNode;
}

function Loader({ children }: LoaderProps) {
  return (
    <>
      <h1>Loader</h1>
      {children}
    </>
  );
}

export default Loader;
