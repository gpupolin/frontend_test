import React, { Component } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    & img {
        width: 200px;
        height: 150px;
    }
`

class Loading extends Component {
  render() {
    return (
      <Container>
        <img src={"./assets/loading.gif"} />
        <h3>Loading...</h3>
      </Container>
    );
  }
}

export default Loading;
