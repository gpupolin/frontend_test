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

  & span {
    color: #ffffff;
    text-transform: uppercase;
    ${theme.fontArialMedium} font-weight: bold;
    text-align: center;
  }
`;

// export const Title = styled.p`
//   ${theme.fontOswald}
//   color: ${props => props.color || theme.primary};
//   text-transform: uppercase;
//   white-space: nowrap;
//   ${props =>
//     props.large &&
//     css`
//       ${theme.fontOswaldLarge};
//     `}
//   ${props =>
//     props.medium &&
//     css`
//       ${theme.fontOswaldMedium};
//     `}
//   ${props =>
//     props.margin &&
//     css`
//       margin: ${props => props.margin};
//     `}
// `;

// export const TitleIcon = styled(Title)`
//   display: flex;
//   justify-content: space-between;
//   padding-right: 15px;
//   align-items: center;
//   margin-top: 15px;
// `;

// export const TitlePriceStyled = styled.span`
//   ${theme.fontArialMedium} font-weight: bold;
//   text-align: center;
//   color: #263c70;
// `;

// export const TitleRentalSmallStyled = styled.span`
//   ${theme.fontArialSmall} text-align: center;
//   color: #635109;
// `;

// export const TitlePriceBigStyled = styled(TitlePriceStyled)`
//   font-size: 21px;
//   line-height: 0.67;
// `;


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
  text-transform: uppercase;
  color: ${props => props.color || theme.primary};
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
`;
