import React, { Component } from "react";
import styled, { css } from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as theme from "../styles/theme";
import {
  ButtonPrimary,
  Title,
  Icon
} from "../styles/component";

//TODO: Organizar os estilos
//TODO: Adicionar os icones dos item de detalhes
//TODO: Adicionar ver detalhes
//TODO: Toggle no botão like
//TODO: Deixar responsivo
//TODO: Documentar o componente

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin: 32px 32px 32px 0;
`;

const VehicleInfo = styled.div`
  border: solid 1px #cccccc;
  border-right: none;
  width: 100%;

  & div {
    display: flex;
  }
`;

const RentalInfo = styled.div`
  display: flex;
  background-color: #ffdc2c;
  flex-flow: column wrap;
  align-items: center;
  min-width: 160px;
`;

const VehicleDetail = styled.div`
  display: flex;
  border-top: solid 1px #e0e0e0;
  padding: 0 15px 15px 15px;
  text-align: left;
  display: flex;
  flex-flow: row wrap;

  & span {
    width: 33.33%;
    margin-top: 15px;
  }
`;

const VehicleImage = styled.div`
  display: flex;
  flex-flow: column wrap;
  & span {
    text-align: right;
    padding-right: 18px;
    padding-top: 15px;
    font-size: 14px;
  }

  & img {
    width: 222px;
    height: 129px;
    padding: 10px 18px 30px 18px;
  }
`;

const ParagraphPriceStyled = styled.p`
  margin: 10px 0 0 0;
`;

const ArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid white;
  align-self: center;
`;

const ContainerButtonRent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  & div:not(:first-child) {
    display: flex;
    justify-content: center;
    flex-grow: 1;
  }
`;

const ContainerTitleIcon = styled.p`
  display: flex;
  justify-content: space-between;
  padding-right: 15px;
  align-items: flex-start;
  margin-top: 15px;
  flex-grow:1;
  text-transform: uppercase;
`;

class Vehicle extends Component {
  render() {
    return (
      <Container>
        <VehicleInfo>
          <div>
            <VehicleImage>
              <span>{this.props.company}</span>
              <img src={this.props.photo} />
            </VehicleImage>
            <div style={{ flexGrow: 1 }}>
              <ContainerTitleIcon>
                <Title large>{this.props.name}</Title> <Icon icon={faHeart} />
              </ContainerTitleIcon>
              {/* <p>- Mais infos</p> */}
            </div>
          </div>
          <VehicleDetail>
            <Title secondary small color={"#3658a4"}>{this.props.fuel}</Title>
            <Title secondary small color={"#3658a4"}>{this.props.transmission}</Title>
            <Title secondary small color={"#3658a4"}>{this.props.type}</Title>
            <Title secondary small color={"#3658a4"}>{this.props.air_conditioning}</Title>
          </VehicleDetail>
        </VehicleInfo>
        <RentalInfo>
          <p styled={{ margin: "15px 30px 5px 30px" }}>
            <Title upper color={theme.secondary} medium>
              Rental Amount
            </Title>
          </p>
          <ParagraphPriceStyled>
            <Title bold secondary>{this.props.currency} </Title>
            <Title bold large secondary>{this.props.amount}</Title>
          </ParagraphPriceStyled>
          <Title bold secondary>up to 10x</Title>
          <ContainerButtonRent>
            <ArrowRight />
            <div style={{ justifyContent: "center", flexGrow: "1" }}>
              <ButtonPrimary>
                <span>Rent</span>
              </ButtonPrimary>
            </div>
          </ContainerButtonRent>
          <Title secondary color={theme.secondary} small>Taxes included</Title>
        </RentalInfo>
      </Container>
    );
  }
}

export default Vehicle;
