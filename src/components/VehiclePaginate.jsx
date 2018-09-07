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
    padding: 0 20px;
  }
  & .break a {
    cursor: default;
  }
`;

class VehiclePaginate extends Component {
  constructor(props) {
    super(props);

//    this.handlePageClick = this.handlePageClick.bind(this);
  }

  render() {
    return (
      <Container>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          // breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(this.props.count / this.props.limit)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.props.onPageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </Container>
    );
  }
}

export default VehiclePaginate;
