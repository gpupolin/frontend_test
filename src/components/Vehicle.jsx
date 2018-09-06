import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import * as theme from "../styles/theme";
import {
  ButtonPrimary,
  Title,
  TitleIcon,
  TitlePriceBigStyled,
  TitlePriceStyled,
  TitleRentalButtonStyled,
  TitleRentalSmallStyled
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
`;

const RentalInfo = styled.div`
  display: flex;
  background-color: #ffdc2c;
  flex-flow: column wrap;
  align-items: center;
`;

const VehicleDetailStyled = styled(theme.ContainerFlex)`
  ${theme.fontArialSmall} border-top: solid 1px #e0e0e0;
  padding: 0 15px 15px 15px;
  text-align: left;
  color: #3658a4;
  display: flex;
  flex-flow: row wrap;

  & span {
    width: 33.33%;
    margin-top: 15px;
  }
`;

const VehicleImageAndCompanyStyled = styled(theme.ContainerFlex)`
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

const ArrowRightStyled = styled.div`
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

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
  color: ${props => props.color || "gray"};
`;

class Vehicle extends Component {
  render() {
    return (
      <Container>
        <VehicleInfo>
          <theme.ContainerFlex>
            <VehicleImageAndCompanyStyled>
              <span>{this.props.company}</span>
              <img src={this.props.photo} />
            </VehicleImageAndCompanyStyled>
            <div style={{ flexGrow: 1 }}>
              <TitleIcon large>
                {this.props.name} <FontAwesomeIconStyled icon={faHeart} />
              </TitleIcon>

              {/* <p>- Mais infos</p> */}
            </div>
          </theme.ContainerFlex>
          <VehicleDetailStyled>
            <span>{this.props.fuel}</span>
            <span>{this.props.transmission}</span>
            <span>{this.props.type}</span>
            <span>{this.props.air_conditioning}</span>
          </VehicleDetailStyled>
        </VehicleInfo>
        <RentalInfo>
          <Title color={theme.secondary} margin={"15px 30px 5px 30px"} medium>
            Rental Amount
          </Title>
          <ParagraphPriceStyled>
            <TitlePriceStyled>{this.props.currency} </TitlePriceStyled>
            <TitlePriceBigStyled>{this.props.amount}</TitlePriceBigStyled>
          </ParagraphPriceStyled>
          <TitlePriceStyled>up to 10x</TitlePriceStyled>
          <ContainerButtonRent>
            <ArrowRightStyled />
            <div style={{ justifyContent: "center", flexGrow: "1" }}>
              <ButtonPrimary>
                <span>Rent</span>
              </ButtonPrimary>
            </div>
          </ContainerButtonRent>
          <TitleRentalSmallStyled>Taxes included</TitleRentalSmallStyled>
        </RentalInfo>
      </Container>
    );
  }
}

export default Vehicle;
