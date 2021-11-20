import { Container } from "./styles";
import trashImg from '../../assets/images/trash.svg';
import { useTransactions } from "../../hooks/useTransactions";

export function TemplateTable() {
  const { transactions } = useTransactions();
  
  return (
    <Container>    
      <table>   
        <thead>
          <tr>
            <th>Título</th>
            <th>Percentual</th>
            <th>Valor</th>
            <th>Ação</th>
          </tr>
        </thead>       
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td>{transaction.percent}</td>
              <td>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td>
                <button>
                  <img src={trashImg} alt="Excluir registro" />
                </button>
              </td>
            </tr> 
          ))}   
        </tbody>
      </table>
    </Container>
  );
}