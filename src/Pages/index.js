import { connect } from 'react-redux'
import { addToCart } from '../redux/action'
import login from './login';
import signup from './signup';
import home from './home';
import VerifyOtp from './verifyotp';
import userList from './userList';
import brands from './brands';
import Product from '../portfolio_gallery/ProductD';
import cart from './cart';
import Nav from '../components/Nav';
import App from '../App';


// const mapStateToProps = state => ({

// })

// const mapDispatchToProps = dispatch => ({
//     addToCartHandler: data => dispatch(addToCart(data))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Product)

export default {
    login,
    brands,
    VerifyOtp,
    signup,
    userList,
    home,
    Product,
    cart



}