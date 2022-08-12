
import React, { useState, useEffect, Component } from 'react';
import "./userList.css"

function UserList(){
    return (
        <div className='about'> 
        <div className='fleft'>
            <h2>ABOUT SAMAY - THE WATCH STORE</h2>
<p>SAMAY, A CHAIN OF WATCH STORES BY TITAN COMPANY LIMITED, BRINGS TO YOU OVER 25 INTERNATIONAL WATCH BRANDS IN ONE DESTINATION.
At the Helios Watch Store there's nothing more we'd like to do, than bring watches and watch-lovers together. Our stellar collection, is a fine showcase of masterpieces that exhibit craftsmanship, designs that represent timeless tradition, and embrace innovation. A parade featuring over 30 top international labels that inspires people to add to their existing collection. As India's leading retailer of international watch brands, Helios Watch Store takes a personal interest in those who wear and cherish quality timepieces, those who know it's the only way to tell time. And, if you're wondering what else sets us apart, it's our signature trio of perks one enjoys every time he/she walks in, and chooses a watch from our vast collection.

Helios has over 57 stores in India across 27 cities offering more than 40 international watch brands in swiss, premium, high fashion and fashion segment.</p>
</div>
<img src="https://cdn2.hubspot.net/hubfs/145335/best-about-us-pages.jpg"/>
<div className='fright'>
<h2>About SAMAY Company Limited</h2>
<p>SAMAY Company Limited (earlier known as TiMES Industries Limited) – a joint venture between the Tamil Nadu Industrial Development Corporation (TIDCO) and Tata Group – commenced operations in 1987 under the name Titan Watches Limited. In 1994, Titan diversified into jewellery, and subsequently, into eyewear with Titan Eye Plus. In 2013, Titan entered the fragrances segment with SKINN.

Today, SAMAY Company – India’s unchallenged leader in watches AND ACCESSORIES – is credited with changing the face of all these industries.</p>

To know more, click here.</div>
        </div>
    )
}





export default UserList;
// import { useDispatch, connect } from 'react-redux';
// import userActions from '../redux/action';
// import { getAllUsersList } from '../services/GetUserList';

// class UserList extends Component{
// constructor(props)
// {
//     super(props)
//         this.state={
//             id:"",
//             name :"",
//             email:"",
//             Age: "",
//             PhoneNo:"",
//         }
    
// }
// componentDidMount(props){
//      this.props.dispatch(getAllUsersList());
// }
// componentWillReceiveProps(nextprops){


// }

// render (){

//     return (
//         <div id="userList">
//             <div className = "datalist">
//                 <table>
//                     <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>PhoneNo</th>
//                     <th>Age</th>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                         <td></td>
//                     </tr>
//                 </table>
//             </div>
            
//         </div>
//     )
// }
// }
// const mapStateToProps= (state)=>{
//  return({
//      UserListResponse : state.rootReducer.UserListResponse,
//  })
// }

// export default connect(mapStateToProps)(UserList);



   

       
      

      