import React, { Component } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import DatePicker from "react-datepicker";
import { Icon } from "../styles/component";
import { faCalendar, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

const Container = styled.div`
  display: flex;
  border: solid 1px #e4e4e4;
  padding: 5px 10px;
  background-color: white;
  justify-content: space-between;

  & > div {
    flex-grow: 1;
  }

  & > span {
    flex-grow: 1;
    font-family: Arial;
    font-size: 20px;
    color: #545454;
  }

  & .react-datepicker-wrapper,
  & .react-datepicker__input-container {
    width: 100%;
  }

  & .react-datepicker__time-list {
    padding: 0 !important;
  }
`;

class DateTimePicker extends Component {
  render() {
    return (
      <Container>
        <DatePicker
          customInput={<DateInput />}
          selected={this.props.date}
          onChange={this.props.onChangeDate}
          filterDate={(date) => date >= moment()}
        />
        <span>|</span>
        <DatePicker
          customInput={<TimeInput />}
          selected={this.props.time}
          onChange={this.props.onChangeTime}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={10}
          dateFormat="LT"
          timeCaption="Time"
        />
      </Container>
    );
  }
}

const ContainerInput = styled.div`
  display: flex;
  flex-flow: row wrap !important;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 0;
  font-size: 14px;
  font-family: Arial;
  color: #263c70;
`;

class DateInput extends React.Component {
  render() {
    return (
      <ContainerInput onClick={this.props.onClick}>
        {this.props.value} <Icon icon={faCalendar} color={"#263c70"} />
      </ContainerInput>
    );
  }
}

class TimeInput extends React.Component {
  render() {
    return (
      <ContainerInput onClick={this.props.onClick}>
        {this.props.value} <Icon icon={faAngleDown} color={"#263c70"} />
      </ContainerInput>
    );
  }
}

export default DateTimePicker;
