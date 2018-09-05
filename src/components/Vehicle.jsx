import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import * as theme from "../styles/theme";

//TODO: Organizar os estilos
//TODO: Adicionar os icones dos item de detalhes
//TODO: Adicionar ver detalhes
//TODO: Toggle no botão like
//TODO: Deixar responsivo
//TODO: Documentar o componente

const VehicleStyled = styled(theme.ContainerFlex)`
  justify-content: space-between;
  align-items: stretch;
  margin: 32px auto;
`;

const VehicleInfoStyled = styled.div`
  border: solid 1px #cccccc;
  border-right: none;
  width: 100%;
`;

const VehicleImageStyled = styled.img`
  width: 222px;
  height: 129px;
  padding: 10px 18px 30px 18px;
`;

const RentalStyled = styled(theme.ContainerFlex)`
  background-color: #ffdc2c;
  flex-flow: column wrap;
  align-items: center;
`;

const ButtonRentalStyled = styled.button`
  border-radius: 6px;
  background-color: #3658a4;
  margin: 10px 0 10px 0;
  padding: 12px 32px 16px 32px;
  border: 1px solid #3658a4;
  cursor: pointer;
`;

const Title = styled.p`
  ${theme.fontOswald}
  color: ${props => props.color || theme.primary};
  text-transform: uppercase;
  white-space: nowrap;
  ${props =>
    props.large &&
    css`
      ${theme.fontOswaldLarge};
    `}
  ${props =>
    props.medium &&
    css`
      ${theme.fontOswaldMedium};
    `}
  ${props =>
    props.margin &&
    css`
      margin: ${props => props.margin};
    `}
`;

const TitleIcon = styled(Title)`
    display:flex;
    justify-content: space-between;
    padding-right: 15px;
    align-items: center;
    margin-top:15px;
`

const TitlePriceStyled = styled.span`
  ${theme.fontArialMedium} font-weight: bold;
  text-align: center;
  color: #263c70;
`;

const TitleRentalSmallStyled = styled.span`
  ${theme.fontArialSmall} text-align: center;
  color: #635109;
`;

const TitleRentalButtonStyled = styled(TitlePriceStyled)`
  color: #ffffff;
  text-transform: uppercase;
`;

const TitlePriceBigStyled = styled(TitlePriceStyled)`
  font-size: 21px;
  line-height: 0.67;
`;

const VehicleDetailStyled = styled(theme.ContainerFlex)`
  ${theme.fontArialSmall} border-top: solid 1px #e0e0e0;
  padding: 0 15px 15px 15px;
  text-align: left;
  color: #3658a4;
  display: flex;
  flex-flow: row wrap;
`;

const VehicleDetailItensStyled = styled.span`
  width: 33.33%;
  margin-top: 15px;
`;

const VehicleImageAndCompanyStyled = styled(theme.ContainerFlex)`
  flex-flow: column wrap;
`;

const ParagraphPriceStyled = styled.p`
  margin: 10px 0 0 0;
`;

const CompanyStyled = styled.span`
  text-align: right;
  padding-right: 18px;
  padding-top: 15px;
  font-size: 14px;
`;

const ArrowRightStyled = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid white;
  align-self: center;
`;

const ContainerButtonRentStyled = styled(theme.ContainerFlex)`
  justify-content: space-between;
  width: 100%;
`;

const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
    color: ${props => props.color || "gray"}
`

class Vehicle extends Component {
  render() {
    return (
      <VehicleStyled>
        <VehicleInfoStyled>
          <theme.ContainerFlex>
            <VehicleImageAndCompanyStyled>
              <CompanyStyled>{this.props.company}</CompanyStyled>
              <VehicleImageStyled src={this.props.photo} />
            </VehicleImageAndCompanyStyled>
            <div style={{flexGrow:1}}>
              <TitleIcon large>{this.props.name} <FontAwesomeIconStyled icon={faHeart}  /></TitleIcon>
              
              {/* <p>- Mais infos</p> */}
            </div>
          </theme.ContainerFlex>
          <VehicleDetailStyled>
            <VehicleDetailItensStyled>
              {this.props.fuel}
            </VehicleDetailItensStyled>
            <VehicleDetailItensStyled>
              {this.props.transmission}
            </VehicleDetailItensStyled>
            <VehicleDetailItensStyled>
              {this.props.type}
            </VehicleDetailItensStyled>
            <VehicleDetailItensStyled>
              {this.props.air_conditioning}
            </VehicleDetailItensStyled>
          </VehicleDetailStyled>
        </VehicleInfoStyled>
        <RentalStyled>
          <Title color={theme.secondary} margin={"15px 30px 5px 30px"} medium>
            Rental Amount
          </Title>
          <ParagraphPriceStyled>
            <TitlePriceStyled>{this.props.currency} </TitlePriceStyled>
            <TitlePriceBigStyled>{this.props.amount}</TitlePriceBigStyled>
          </ParagraphPriceStyled>
          <TitlePriceStyled>up to 10x</TitlePriceStyled>
          <ContainerButtonRentStyled>
            <ArrowRightStyled />
            <ButtonRentalStyled>
              <TitleRentalButtonStyled>Rent</TitleRentalButtonStyled>
            </ButtonRentalStyled>
            <div />
          </ContainerButtonRentStyled>
          <TitleRentalSmallStyled>Taxes included</TitleRentalSmallStyled>
        </RentalStyled>
      </VehicleStyled>
    );
  }
}

export default Vehicle;