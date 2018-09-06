import React, { Component } from "react";
import * as theme from "../styles/theme";
import styled, { css } from "styled-components";
import {
  ButtonPrimary,
  TitleRentalButtonStyled,
  Title
} from "../styles/component";

const Container = styled.div`
  margin-left: 70px;
  margin-right: 30px;
  background-color: #ffdc2c;
  padding: 5px 10px;
`;

class VehicleFilter extends Component {
  render() {
    return (
      <Container>
        <theme.ContainerFlex style={{ flexFlow: "column" }}>
          <Title color={theme.secondary} medium>
            Local de retirada
          </Title>
          <input type="text" />
          <span>
            <label>
              <input type="checkbox" />{" "}
              <Title color={theme.secondary} medium>
                Devolver o carro em outro local Local de devolução
              </Title>
            </label>
          </span>
          <input type="text" />
          <Title color={theme.secondary} medium>
            Retirada
          </Title>
          <input type="text" />
          <Title color={theme.secondary} medium>
            Devolução
          </Title>
          <input type="text" />
        </theme.ContainerFlex>
        <div>
          <div>Economize até 35%</div>
          <div>
            <label>
              <input type="checkbox" /> Incluir voo{" "}
            </label>
            <label>
              <input type="checkbox" />
              Incluir hotel
            </label>
          </div>
        </div>
        <div>
          <ButtonPrimary style={{ width: "100%" }}>
            <span>Search</span>
          </ButtonPrimary>
        </div>
      </Container>
    );
  }
}

export default VehicleFilter;
