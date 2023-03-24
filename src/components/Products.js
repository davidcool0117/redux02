import React from 'react'
import { connect } from "react-redux";

const Products = (props) => {
  return (
    <div className="Items">
      <p>상품갯수:{props.count}</p>
      <button>등록하기</button>
      <hr/>
    </div>
  )
}

const mapStateToProps = (state) => (
   { count: state.count }
);
export default connect(mapStateToProps)(Products);