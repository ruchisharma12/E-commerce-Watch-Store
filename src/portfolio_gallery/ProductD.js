import React from 'react'
import './productD.css'
import Data from "./Data";
import { useState } from "react";
import Popup from '../components/Popup'
import userActions from '../redux/action';
// import '../components/Popup.css'
import { withRouter } from 'react-router-dom'
import addToCart from '../redux/action'
import { connect } from 'react-redux'



class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pId: 0,
      pTitle: "",
      pImage: "",
      pDes: ""
    }
    this.onAddItemIntoCart = this.onAddItemIntoCart.bind(this);
  }
  componentDidMount() {
    const pId = this.props.location.state.productId;
    const pTitle = this.props.location.state.productTitle;
    const pImage = this.props.location.state.productImage;
    const pDes = this.props.location.state.productDes;
    this.setState({
      pId: pId,
      pTitle: pTitle,
      pImage: pImage,
      pDes: pDes
    })



  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.setCartData) {
      if (nextProps.setCartData.success) {
        alert("Item successfully added to cart");
      }
      else {
        alert(nextProps.setCartData.message);
      }

    }
  }

  onAddItemIntoCart() {
    let data = {};
    data.id = this.state.pId;
    data.title = this.state.pTitle;
    data.image = this.state.pImage;
    data.des = this.state.pDes;
    this.props.dispatch(userActions.addToCart(data))
    console.log("data:" + data)
  }
  render() {
    //console.warn("props: " + prop)

    // console.warn(this.props.match.params.id);
    // const [buttonPopup, setButtonPopup] = useState(false);
    // const [data, setData] = useState(Data);
    // const categoryData = Data.map((value) => {
    //   return value.id
    // });
    // const tabsData = ["all", ...new Set(categoryData)];

    // // const filterCategory=(category) =>{
    // //     //if(category=="all"){
    // //         setData(Data);
    // //         return;
    // //     //}
    // const filteredData = Data.filter((value) => {
    //   // return value.id == id;
    // })
    // setData(filteredData);
    // console.log(data);

    return (
      <>
        <div className='row' style={{ height: "500px", width: "70%", backgroundColor: "", margin: "20px 20px 20px 20px", justifyContent: "center", marginLeft: "auto", marginRight: "auto" }}>
          <div className='col'>
            <img src={this.state.pImage} style={{ height: "100%", width: "100%", }} /></div>

          <div className='col' style={{ marginTop: "30px" }}>
            <h2> {this.state.pTitle}</h2> <br />
            <h4 style={{ color: "green" }}>{this.state.pDes}</h4>
            <br />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p><br />
            <button onClick={this.onAddItemIntoCart}>Add to cart</button><br /></div>
        </div>
      </>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    setCartData: state.cartReducer.setCartData,
  }
}


export default connect(mapStateToProps)(Product);
