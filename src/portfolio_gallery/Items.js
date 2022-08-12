
import { Route } from "react-router-dom";
import { useHistory, useNavigate } from "react-router-dom";
// import { Link } from "@material-ui/core";
import { Link } from 'react-router-dom'

function Items({ data }) {
  // const navigate = useNavigate();

  const history = useHistory();
  // const [buttonPopup , setButtonPopup] = useState(false);
  const coursesPage = (id, title, image, description) => {
    history.push("/product/" + id + title + image + description)

    console.log(id, title, image, description)
  };
  // addToCart(){
  //   e.preventDefault();
  //   let data = {};
  //   data.id = id;
  //   data.name = name;
  //   this.props.dispatch(addtoCartTheProduct(data));

  // }

  return (
    <div className="row " >
      {
        data.map((value) => {
          const { id, image, title, description, btn } = value;
          return (
            <div className="col-sm-3 my-3" key={id}>
              <div className="card bg-light text-center"
                style={{
                  borderRadius: '70%'
                }}>
                <img src={image} className="img-fluid" style={{ height: "200px" }} />
                <div style={{
                  background: '#261C29', height: "150px", color: "white"
                }} >
                  <h4 style={{ marginTop: 5, }}>{title}</h4>
                  <p>{description}</p>
                  {/* <button id={id}
                    onClick={() => coursesPage(value.id, value.title, value.image, value.description)}>{btn}
                  </button> */}
                  {/* <button type="button" className="btn btn-outline-primary mx-2 text-capitalize" onClick={()=> filterCategory(category)} key={index}>{category}</button> */}
                  {/* <a href="/ProductD" style={{marginBottom:"2px"}} >  */}
                  {/* <Link to="/product"> <button onClick = {this.coursePage(id) }>{btn}</button></Link> */}

                  <Link to={{
                    pathname: '/product',
                    state: {
                      productId: value.id,
                      productTitle: value.title,
                      productImage: value.image,
                      productDes: value.description

                    }
                  }}><button>{btn}</button></Link>

                  {/* <button onClick={() => coursesPage} >{btn}</button> */}
                  {/* <button onClick={() => coursesPage} >{btn}</button> */}

                  {/* <button onClick={() => setButtonPopup(true)}>{btn}</button> */}
                  {/* <PopUp trigger ={buttonPopup} setTrigger={setButtonPopup}> */}

                  {/* </PopUp> */}
                </div>
                {/* <Route path='/ProductD' component={ProductD} ><button>{button}</button></Route> */}

              </div>
            </div>
          )
        })
      }

    </div >
  )
}

export default Items;