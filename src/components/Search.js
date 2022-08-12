import React, {Component} from 'react';
import data from '../portfolio_gallery/Data';

class Searchs extends Component{
    constructor(){
        super();
        
    this.state={
        products:[], 
        searchField: ''
      };
    }
    render(){

        const { products, searchField} = this.state;

        const filteredMonsters= data.filter(product=> 
            product.title.toLowerCase().includes(searchField.toLowerCase()));
        return(
            <div>
                    <input 
        type='search' 
        placeholder='search products'
         onChange={e=>
         this.setState({searchField:e.target.value} )
         } />
            </div>
        );
    }
}
export default Searchs;
