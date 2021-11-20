import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal}: HeaderProps) {
  return (
    <Container>
      <Content>
        <span>Meus Potes</span>
        <button 
          type="button"
          onClick={onOpenNewTransactionModal}
          >
            Nova Transação
        </button>
      </Content>
    </Container>
  );
}