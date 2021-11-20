import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/images/close.svg';

import { Container } from "./styles";


interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [percent, setPercent] = useState(0);
  const [amount, setAmount] = useState(0);
  
  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      percent,
      amount,
    })

    setTitle('');
    setPercent(0);
    setAmount(0);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

    <button 
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close"
    >
      <img src={closeImg}  alt="Fechar modal" />
    </button>

  <Container onSubmit={handleCreateNewTransaction}>
    <h2>Cadastrar transação</h2>
    <input 
      placeholder="Título"
      value={title}
    />
    
    <input 
      type="number" 
      placeholder="Percentual" 
      value={percent}
    />

    <input 
      type="number" 
      placeholder="Valor" 
      value={amount}
    />

    <button type="submit">
      Cadastrar
    </button>

  </Container>
  </Modal>
  );
}