import React, { Component } from "react";
import * as theme from "../styles/theme";
import styled, { css } from "styled-components";
import { ButtonPrimary, Title } from "../styles/component";
import Select from "react-select";

const Container = styled.div`
  margin-left: 70px;
  margin-right: 30px;
  background-color: #ffdc2c;
  padding: 5px 10px;
  min-width: 260px;

  & div:first-child {
    flex-flow: column;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

const ContainerDiscount = styled.div`
  margin-top: 10px;
  
  & div:first-child {
    background-color: #69b42e;
  }

  & div:not(:first-child) {
    background-color: #FFF1AC;
  }
`

class VehicleFilter extends Component {
  render() {
    return (
      <Container>
        <div>
          <InputField>
            <label>
              <Title secondary color={theme.secondary} extrasmall>
                Local de retirada
              </Title>
            </label>
            <Select
              placeholder="..."
              components={{ DropdownIndicator: null }}
            />
          </InputField>
          <div>
            <label>
              <input type="checkbox" />{" "}
              <Title secondary color={theme.primary} extrasmall>
                Devolver o carro em outro local
              </Title>
            </label>
          </div>
          <InputField>
            <label>
              <Title secondary color={theme.secondary} extrasmall>
                Local de devolução
              </Title>
            </label>
            <Select
              placeholder="..."
              components={{ DropdownIndicator: null }}
            />
          </InputField>
          <InputField>
            <label>
              <Title secondary color={theme.secondary} extrasmall>
                Retirada
              </Title>
            </label>
            <input type="text" />
          </InputField>
          <InputField>
            <label>
              <Title secondary color={theme.secondary} extrasmall>
                Devolução
              </Title>
            </label>
            <input type="text" />
          </InputField>
        </div>
        <ContainerDiscount>
          <div>
            <Title secondary color={"white"} small>
              Economize até 35%
            </Title>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              <Title secondary extrasmall>
                Incluir voo
              </Title>
            </label>
            <label>
              <input type="checkbox" />
              <Title secondary extrasmall>
                Incluir hotel
              </Title>
            </label>
          </div>
        </ContainerDiscount>
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
