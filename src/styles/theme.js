import styled, { css } from "styled-components";

export const fontOswald = css`
  font-family: Oswald;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
`
export const fontArial = css`
  font-family: Arial;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
`
export const fontOswaldLarge = css`
  ${fontOswald}
  font-size: 21px;
  line-height: 0.67;
`

export const fontOswaldMedium = css`
  ${fontOswald}
  font-size: 14px;
  line-height: 1;
`

export const fontArialMedium = css`
  ${fontArial}
  font-size: 14px;
  line-height: 1;
`

export const fontArialSmall = css`
  ${fontArial}
  font-size: 12px;
  line-height: 1.17;
`

export const ContainerFlex = styled.div`
  display: flex;
`
export const primary = "#263c70";
export const secondary = "#635109";


// font-size: 14px;
//   line-height: 1;
//   text-align: center;