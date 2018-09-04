import React, { Component } from "react";
import styled from "styled-components";

const DivFlex = styled.div`
  display: flex;
`;

const VehicleWrapper = styled(DivFlex)`
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

const RentalWrapper = styled(DivFlex)`
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
  font-family: Oswald;
  font-size: 21px;
  line-height: 0.67;
  color: #263c70;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.67;
  letter-spacing: normal;
  text-align: left;
  text-transform: uppercase;
`;

const TitleRental = styled(Title)`
  font-size: 14px;
  line-height: 1;
  color: #635109;
  margin: 15px 30px 5px 30px;
  white-space: nowrap;
`;

const TitlePrice = styled.span`
  font-family: Arial;
  font-size: 14px;
  line-height: 1;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: center;
  color: #263c70;
`;

const TitleRentalSmall = styled.span`
  font-family: Arial;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
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

const VehicleDetailWrapper = styled(DivFlex)`
  border-top: solid 1px #e0e0e0;
  padding: 15px;
  font-family: Arial;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: left;
  color: #3658a4;
`;

const VehicleImageAndCompanyWrapper = styled(DivFlex)`
  flex-flow: column wrap;
`

const ParagraphPrice = styled.p`
  margin: 10px 0 0 0;
`;

const CompanyWrapper = styled.span`
  text-align:right;
  padding-right: 18px;
  padding-top: 15px
  font-size: 14px;
`

class Vehicle extends Component {
  render() {
    return (
      <VehicleWrapper>
        <VehicleInfoWrapper>
          <DivFlex>
            <VehicleImageAndCompanyWrapper>
              <CompanyWrapper>{this.props.company}</CompanyWrapper>
              <VehicleImageWrapper src={this.props.photo} />
            </VehicleImageAndCompanyWrapper>
            <div>
              <Title>{this.props.name}</Title>
              <p>- Mais infos</p>
            </div>
          </DivFlex>
          <VehicleDetailWrapper>
            <p>{this.props.fuel}</p>
            <p>{this.props.transmission}</p>
            <p>{this.props.type}</p>
            <p>{this.props.air_conditioning}</p>
          </VehicleDetailWrapper>
        </VehicleInfoWrapper>
        <RentalWrapper>
          <TitleRental>Rental Amount</TitleRental>
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
