import React, { Component } from "react";
import ReactPaginate from "react-paginate";
import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding-right: 32px;
  font-family: Arial;
  color: #0087e5;
  & ul {
    display: inline-block;
    padding-left: 15px;
    padding-right: 15px;
  }

  & li {
    display: inline-block;
    padding: 0 30px;
  }
  & .break a {
    cursor: default;
  }
`;

class VehiclePaginate extends Component {
  render() {
    return (
      <Container>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={Math.ceil(this.props.count / this.props.limit)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          //onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </Container>
    );
  }
}

export default VehiclePaginate;
