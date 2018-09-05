import React, { Component } from "react";
import styled, { css } from "styled-components";
import * as theme from "../styles/theme";

const VehicleWrapper = styled(theme.ContainerFlex)`
  justify-content: space-between;
  align-items: stretch;
  margin: 32px auto;
`;

const VehicleInfoWrapper = styled.div`
  border: solid 1px #cccccc;
  width: 100%;
`;

const VehicleImageWrapper = styled.img`
  width: 222px;
  height: 129px;
  padding: 10px 18px 30px 18px;
`;

const RentalWrapper = styled(theme.ContainerFlex)`
  background-color: #ffdc2c;
  flex-flow: column wrap;
  align-items: center;
`;

const ButtonRentalWrapper = styled.button`
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

const TitlePrice = styled.span`
  ${theme.fontArialMedium} 
  font-weight: bold;
  text-align: center;
  color: #263c70;
`;

const TitleRentalSmall = styled.span`
  ${theme.fontArialSmall} text-align: center;
  color: #635109;
`;

const TitleRentalButton = styled(TitlePrice)`
  color: #ffffff;
  text-transform: uppercase;
`;

const TitlePriceBig = styled(TitlePrice)`
  font-size: 21px;
  line-height: 0.67;
`;

const VehicleDetailWrapper = styled(theme.ContainerFlex)`
  ${theme.fontArialSmall} border-top: solid 1px #e0e0e0;
  padding: 15px;
  text-align: left;
  color: #3658a4;
`;

const VehicleImageAndCompanyWrapper = styled(theme.ContainerFlex)`
  flex-flow: column wrap;
`;

const ParagraphPrice = styled.p`
  margin: 10px 0 0 0;
`;

const CompanyStyled = styled.span`
  text-align: right;
  padding-right: 18px;
  padding-top: 15px;
  font-size: 14px;
`;

class Vehicle extends Component {
  render() {
    return (
      <VehicleWrapper>
        <VehicleInfoWrapper>
          <theme.ContainerFlex>
            <VehicleImageAndCompanyWrapper>
              <CompanyStyled>{this.props.company}</CompanyStyled>
              <VehicleImageWrapper src={this.props.photo} />
            </VehicleImageAndCompanyWrapper>
            <div>
              <Title large>{this.props.name}</Title>
              <p>- Mais infos</p>
            </div>
          </theme.ContainerFlex>
          <VehicleDetailWrapper>
            <p>{this.props.fuel}</p>
            <p>{this.props.transmission}</p>
            <p>{this.props.type}</p>
            <p>{this.props.air_conditioning}</p>
          </VehicleDetailWrapper>
        </VehicleInfoWrapper>
        <RentalWrapper>
          <Title color={theme.secondary} margin={"15px 30px 5px 30px"} medium >Rental Amount</Title>
          <ParagraphPrice>
            <TitlePrice>{this.props.currency} </TitlePrice>
            <TitlePriceBig>{this.props.amount}</TitlePriceBig>
          </ParagraphPrice>
          <TitlePrice>up to 10x</TitlePrice>
          <ButtonRentalWrapper>
            <TitleRentalButton>Rent</TitleRentalButton>
          </ButtonRentalWrapper>
          <TitleRentalSmall>Taxes included</TitleRentalSmall>
        </RentalWrapper>
      </VehicleWrapper>
    );
  }
}

export default Vehicle;
