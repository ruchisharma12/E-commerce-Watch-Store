
import React, { useState, useEffect, Component } from 'react';
import Gallery from "../portfolio_gallery/Gallery";
import data from '../portfolio_gallery/Data';



class BrandS extends Component {
    constructor() {
        super();


    }
    render() {

        //     const { datas, searchField} = this.state.Data;

        // const filteredDatas= data.filter(value => 
        //     value.name.toLowerCase().includes(searchField.toLowerCase()));
        return (
            <div style={{ background: '#D6DBDF  ' }}>
                <img src=" https://cdn.shopify.com/s/files/1/0125/7792/files/fenix_7_mob_767x.jpg?v=1642506379" style={{ width: '100%', height: 'auto' }} />



                <Gallery />
                {/* <cards /> */}
            </div>
        );
    }
}
export default BrandS;







