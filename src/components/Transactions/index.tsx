import { ReactNode } from 'react';

interface TransactionsProps {
  children: ReactNode;
}

function Transactions({ children }: TransactionsProps) {
  return (
    <>
      <h1>Transactions</h1>
      {children}
    </>
  );
}

export default Transactions;
