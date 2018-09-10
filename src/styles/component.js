import React, { Component } from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as theme from "./theme";

export const ButtonPrimary = styled.button`
  border-radius: 6px;
  background-color: #3658a4;
  margin: 10px 0 10px 0;
  padding: 12px 32px 16px 32px;
  border: 1px solid #3658a4;
  cursor: pointer;
  box-shadow: 0 4px 2px -2px black;
  background-position: center;
  transition: background 0.8s;

  &:hover {
    background: #3e65bd radial-gradient(circle, transparent 1%, #3e65bd 1%)
      center/15000%;
  }

  &:active {
    background-color: #6eb9f7;
    background-size: 100%;
    transition: background 0s;
  }

  & span {
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.color || "gray"};
`;

export const Title = styled.span`
  font-family: Oswald;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  font-size: 14px;
  line-height: 1;
  color: ${props => props.color || theme.primary};
  ${props =>
    props.upper &&
    css`
      text-transform: uppercase;
    `};
  ${props =>
    props.secondary &&
    css`
      font-family: Arial;
    `};
  ${props =>
    props.large &&
    css`
      font-size: 21px;
      line-height: 0.67;
    `};
  ${props =>
    props.medium &&
    css`
      font-size: 14px;
      line-height: 1;
    `};
  ${props =>
    props.small &&
    css`
      font-size: 12px;
      line-height: 1.17;
    `};
  ${props =>
    props.extrasmall &&
    css`
      font-size: 10px;
      line-height: 1.17;
    `};
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `};

  ${props =>
    props.hide &&
    css`
      display: none;
    `};
`;

