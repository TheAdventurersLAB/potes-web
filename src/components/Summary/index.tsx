import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransactions();
  
  const summary = transactions.reduce((acc, transaction) => { 
    acc.percent += transaction.percent;
    acc.total += transaction.amount;
    return acc;
  }, {
    percent: 0,
    total: 0,
  });

  return (
    <Container>
      <div>
        <header>
          <p>Saldo</p>
          <p>{summary.percent}</p>
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
}