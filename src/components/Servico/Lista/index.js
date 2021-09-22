import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  AddCarrinho,
  CardList,
  ContainerGeneral,
  ContainerButton,
  ContainerFiltros,
  ContainerBusca,
  Form,
  Lupa,
  Price,
} from "./estilo";

const url = "https://labeninjas.herokuapp.com/jobs";
const headers = {
  headers: {
    Authorization: "e2190c39-7930-4db4-870b-bed0e5e4b88e",
  },
};

export default class ListaServico extends Component {
  state = {
    listService: [],
    estaCarregando: true,
  };

  componentDidMount() {
    this.getJobs();
  }

  getJobs = async () => {
    try {
      const res = await axios.get(url, headers);
      this.setState({ listService: res.data.jobs, estaCarregando: false });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { listService } = this.state;
    const listServices = listService.map((servico, index) => {
      const { id, title, dueDate, price } = servico;
      const estaNoCarrinho = this.props.carrinho.some((item) => item.id === id);

      return (
        <div key={index}>
          <CardList>
            <h4>{title}</h4>
            <p>
              Até {dueDate} por <Price>R$ {price}</Price>
            </p>
            <ContainerButton>
              <Button onClick={() => this.props.trocarTela("detalhes")}>
                Ver mais
              </Button>
              <Button
                onClick={() => this.props.adicionarAoCarrinho(servico)}
                disabled={estaNoCarrinho}
              >
                <AddCarrinho />
              </Button>
            </ContainerButton>
          </CardList>
        </div>
      );
    });

    return (
      <>
        <ContainerFiltros>
          <ContainerBusca>
            <Lupa />
            <input placeholder="Busca" type="text"></input>
          </ContainerBusca>

          <Form>
            <label>Ordenar:</label>
            <select>
              <option>Título</option>
              <option>Prazo</option>
              <option>Preço Crescente</option>
              <option>Preço Decrescente</option>
            </select>
          </Form>
          <Form>
            <label> Valor mínimo: </label>
            <input
              name={"valorMinimo"}
              type="number"
              // onChange={}
              // value={}
            />
          </Form>
          <Form>
            <label>Valor máximo:</label>
            <input
              name={"valorMaximo"}
              type="number"
              // onChange={}
              // value={}
            />
          </Form>
        </ContainerFiltros>

        <ContainerGeneral>
          {this.state.estaCarregando ? (
            <p>Carregando serviços...</p>
          ) : (
            listServices
          )}
        </ContainerGeneral>
      </>
    );
  }
}
