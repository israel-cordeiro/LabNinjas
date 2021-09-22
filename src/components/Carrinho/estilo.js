import styled from "styled-components";

import { BsFillTrashFill, BsFillReplyFill } from "react-icons/bs";

// Estilo do carrinho

export const BoxCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Container = styled.div`
  font-family: "Revalia", cursive;
  display: flex;
  border-radius: 10px;
  background-color: #3f3b3b;
  color: #fff;
  margin-bottom: 20px;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  width: 600px;
`;

export const Titulo = styled.h3`
  text-align: center;
  padding: 30px;
  font-size: 32px;
  margin: 20px 0;
`;

export const ItemTitulo = styled.p`
  margin-left: 20px;
`;

export const Preco = styled.p``;

export const Lixeira = styled(BsFillTrashFill)`
  color: #fff;
  font-size: 28px;
`;

export const Button = styled.button`
  background-color: #3f3b3b;
  border: none;
  cursor: pointer;

  &:hover ${Lixeira} {
    transform: scale(1.2);
  }
`;

export const BtnContratar = styled.button`
  padding: 20px 40px;
  background: #d73743;
  border-radius: 10px;
  font-family: "Revalia", cursive;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 300ms ease;

  &:hover {
    background-color: #d73743a6;
  }

  &:disabled {
    background-color: #8f8d8d;
    cursor: default;
  }
  @media screen and (max-width: 576px) {
    margin: 0;
    margin-top: 30px;
  }
`;

export const TotaleBtn = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
`;

export const Total = styled.p`
  font-size: 20px;
`;

export const BtnVoltar = styled.button`
  padding: 20px 80px;
  background-color: #d73743;
  border-radius: 10px;
  font-family: "Revalia", cursive;
  color: #fff;
  border: none;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 300ms ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #d73743a6;
  }
`;

export const IconeVoltar = styled(BsFillReplyFill)`
  color: #fff;
  font-size: 28px;
  margin: 0 10px;
`;
