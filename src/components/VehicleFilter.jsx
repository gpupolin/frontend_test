import React, { Component } from "react";
import * as theme from "../styles/theme";
import styled, { css } from "styled-components";
import { ButtonPrimary, Title, Icon } from "../styles/component";

import DateTimePicker from "./DateTimePicker";

import moment from "moment";

import Select from "react-select";
import { media } from "../styles/utils";

const SelectStyled = {
  option: (styles, state) => ({
    ...styles,
    fontFamily: "Arial"
  }),
  control: styles => ({
    ...styles,
    backgroundColor: "#ffffff",
    border: "solid 1px #e4e4e4",
    fontFamily: "Arial",
    borderRadius: "2px"
  }),
  valueContainer: styles => ({
    ...styles,
    width: "100%",
    color: theme.primary,
    fontSize: "12px",
    alignItems: "flex-start"
  }),
  singleValue: styles => ({
    ...styles,
    width: "100%",
    color: theme.primary,
    fontSize: "12px"
  }),
  // indicatorSeparator: styles => ({
  //   display: "none"
  // }),
  dropdownIndicator: styles => ({
    ...styles,
    color: theme.primary
  })
};

const Container = styled.div`
  margin-left: 70px;
  margin-right: 30px;
  background-color: #ffdc2c;
  padding: 5px 10px;
  min-width: 260px;

  ${media.tablet`
    min-width: 0;
    margin-left: 0;
    margin-right: 0;
  `} & div:first-child {
    flex-flow: column;
  }
`;

const InputField = styled.div`
  display: flex;
  flex-flow: column wrap;
  & label {
    text-transform: uppercase;
  }

  ${props =>
    props.hide &&
    css`
      display: none;
    `};
`;

const ContainerDiscount = styled.div`
  margin-top: 10px;

  & div:first-child {
    background-color: #69b42e;
    text-transform: uppercase;
    padding: 5px;
    line-height: 0.5;
  }

  & div:not(:first-child) {
    background-color: #fff1ac;
    border: 1px solid #69b42e;
    border-top: none;
    padding: 5px;
  }
`;

const InputCheckbox = styled.label`

  & span {
    vertical-align: middle;
  }
`

class VehicleFilter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      anotherLocation: false,
      optionToPickup: null,
      optionToPickupError: false,
      optionToReturn: null,
      pickupDate: moment().add(1, "days"),
      pickupTime: moment().add(1, "days"),
      returnDate: moment().add(7, "days"),
      returnTime: moment().add(7, "days")
    };

    this.onChangePickup = this.onChangePickup.bind(this);
    this.onChangeReturn = this.onChangeReturn.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChangePickupDate = this.handleChangePickupDate.bind(this);
    this.handleChangePickupTime = this.handleChangePickupTime.bind(this);
    this.handleChangeReturnDate = this.handleChangeReturnDate.bind(this);
    this.handleChangeReturnTime = this.handleChangeReturnTime.bind(this);
  }

  handleChangePickupDate(date) {
    this.setState({
      pickupDate: date
    });
  }

  handleChangePickupTime(time) {
    this.setState({
      pickupTime: time
    });
  }

  handleChangeReturnDate(date) {
    this.setState({
      returnDate: date
    });
  }

  handleChangeReturnTime(time) {
    this.setState({
      returnTime: time
    });
  }

  onChangePickup(option) {
    this.setState({
      optionToPickup: option
    });
  }

  onChangeReturn(option) {
    this.setState({
      optionToReturn: option
    });
  }

  handleClick(evt) {
    if (!this.state.optionToPickup) {
      this.setState({
        optionToPickupError: true
      });
      return;
    }

    this.setState({
      optionToPickupError: false
    });

    if (typeof this.props.onSearch === "function") {
      this.props.onSearch({
        pickup: this.state.optionToPickup
          ? this.state.optionToPickup.value
          : null,
        return: this.state.optionToReturn
          ? this.state.optionToReturn.value
          : null,
        pickupDate: `${this.state.pickupDate.format(
          "YYYY-MM-DD"
        )}T${this.state.pickupTime.format("HH:MM")}:00Z`,
        returnDate: `${this.state.returnDate.format(
          "YYYY-MM-DD"
        )}T${this.state.returnTime.format("HH:MM")}:00Z`
      });
    }
  }

  render() {
    return (
      <Container>
        <div>
          <InputField>
            <label>
              <Title secondary color={theme.secondary} extrasmall>
                Pickup Location
              </Title>
            </label>
            <Select
              value={this.state.optionToPickup}
              onChange={this.onChangePickup}
              components={{ DropdownIndicator: null }}
              placeholder={"Enter Pickup Location..."}
              styles={SelectStyled}
              options={this.props.airportsToPickup}
              onInputChange={this.props.onInputChangePickup}
              noOptionsMessage={() => null}
            />
            <Title hide={!this.state.optionToPickupError} secondary color={"red"} extrasmall>
              Field required
            </Title>
          </InputField>
          <div>
            <InputCheckbox>
              <input
                type="checkbox"
                value={this.state.anotherLocation}
                onChange={() =>
                  this.setState({
                    anotherLocation: !this.state.anotherLocation
                  })
                }
              />{" "}
              <Title secondary color={"#3658a4"} bold small>
                Return the car to another location
              </Title>
            </InputCheckbox>
          </div>
          <InputField hide={!this.state.anotherLocation}>
            <label>
              <Title secondary color={theme.secondary} extrasmall>
                Return location
              </Title>
            </label>
            <Select
              value={this.state.optionToReturn}
              onChange={this.onChangeReturn}
              components={{ DropdownIndicator: null }}
              placeholder={"Enter Return Location..."}
              styles={SelectStyled}
              options={this.props.airportsToReturn}
              onInputChange={this.props.onInputChangeReturn}
              noOptionsMessage={() => null}
            />
          </InputField>
          <InputField>
            <label>
              <Title secondary color={theme.secondary} extrasmall>
                Pickup date
              </Title>
            </label>
            <DateTimePicker
              date={this.state.pickupDate}
              time={this.state.pickupTime}
              onChangeDate={this.handleChangePickupDate}
              onChangeTime={this.handleChangePickupTime}
            />
          </InputField>
          <InputField>
            <label>
              <Title secondary color={theme.secondary} extrasmall>
                Return date
              </Title>
            </label>
            <DateTimePicker
              date={this.state.returnDate}
              time={this.state.returnTime}
              onChangeDate={this.handleChangeReturnDate}
              onChangeTime={this.handleChangeReturnTime}
            />
          </InputField>
        </div>
        <ContainerDiscount>
          <div>
            <Title secondary color={"white"} small>
              Save up to 35%
            </Title>
          </div>
          <div >
            <InputCheckbox>
              <input type="checkbox" />
              <Title secondary small>
                Include flight
              </Title>
            </InputCheckbox>
            <InputCheckbox>
              <input type="checkbox" />
              <Title secondary small>
                Include hotel
              </Title>
            </InputCheckbox>
          </div>
        </ContainerDiscount>
        <div>
          <ButtonPrimary onClick={this.handleClick} style={{ width: "100%" }}>
            <span>Search</span>
          </ButtonPrimary>
        </div>
      </Container>
    );
  }
}

export default VehicleFilter;
