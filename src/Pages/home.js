import React from 'react';
import { useSelector } from 'react-redux';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import img from './imgg.jpg';
import data from './Data';
import BrandS from './brands';



// const fadeImages = [
//   "https://i.pinimg.com/originals/db/12/fe/db12fea16a6836ac1a7580921983fa06.jpg",
//   "https://5.imimg.com/data5/AK/BS/MI/ANDROID-64079611/product-jpeg-500x500.jpg",
//   "https://media.istockphoto.com/photos/woman-checking-time-her-watch-picture-id951927816?b=1&k=20&m=951927816&s=170667a&w=0&h=rxnBQkiJMRFqnSF7OexET_dfE6nx4HM1JGQHlDioW38="
// ];

const Home = () => {
	// const username = useSelector(state => state.username);
	// const text = username ? (
	//   <h1>{username} is currently logged in</h1>
	// ) : (
	//   <h1>Nobody is logged in</h1>
	// );
	return (
		<div className="slide-container" style={{ background: '#D6DBDF' }}>
			<Carousel >
				<Carousel.Item interval={1500}>
					<img
						className="d-block w-100"
						src={img} style={{ height: 550, }}
						alt="Image One"
					/>
					<div className='container col-3'>

						<Carousel.Caption style={{ marginRight: 700, }} >
							<h3 style={{ fontWeight: 400, fontSize: 50 }}>ELEGANCE IS<br /> AN ATTITUDE<br /></h3>
							<p>Sample Text for Image Two</p>
							<button style={{ marginTop: 10, marginBottom: 50, marginLeft: 10, fontWeight: 200, background: '#5D6D7E', padding: '7px', borderRadius: '7px' }}> <a href='./brands' style={{ textDecoration: 'none', color: 'white' }}>Buy Now</a></button>
						</Carousel.Caption></div>
				</Carousel.Item>
				<Carousel.Item interval={500}>

					<img
						className="d-block w-100"
						src="https://images.pexels.com/photos/1546333/pexels-photo-1546333.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" style={{ height: 550, }}
						alt="Image Two"
					/>
					<div className='container col-3'>
						<Carousel.Caption style={{ marginRight: 700, }} >
							<h3 style={{ fontWeight: 400, fontSize: 50 }}>We Value<br /> Your Time</h3>
							<p>Sample Text for Image Two</p>
							<button style={{ marginTop: 10, marginBottom: 100, marginLeft: 10, fontWeight: 200, background: '#534E50', padding: '7px', borderRadius: '7px' }}><a href='./brands' style={{ textDecoration: 'none', color: 'white' }} > Buy Now</a></button>
						</Carousel.Caption></div>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className="d-block w-100"
						src="https://images.unsplash.com/photo-1512850183-6d7990f42385?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" style={{ height: 550, }}
						alt="Image Two"
					/>
					<div className='container col-3'>
						<Carousel.Caption style={{ marginRight: 700, }} >
							<h3 style={{ fontWeight: 400, fontSize: 50 }}>We Value<br /> Your Time</h3>
							<p>Sample Text for Image Two</p>
							<button style={{ marginTop: 10, marginBottom: 100, marginLeft: 10, fontWeight: 200, background: '#154360', padding: '7px', borderRadius: '7px' }}> <a href='./brands' style={{ textDecoration: 'none', color: 'white' }}>Buy Now</a></button>
						</Carousel.Caption></div>
				</Carousel.Item>
			</Carousel>

			<h3 className="text-secondary text-center" style={{ marginTop: 50, }}> New Arrivals</h3>
			<center>
				<div className=" container row  mx-6 my-5 md-5 justify-content-center" style={{ marginTop: 50, marginBottom: "50px" }} >
					{

						data.map((value) => {
							const { id, image, title, description, button } = value;
							return (
								<div className=" col-md-4 " key={id} style={{ width: 320, }}>
									<div className="card bg-light text-center">
										<img src={image} className="img-fluid" style={{ height: "200px" }} />
										<h3 className="m-3">{title}</h3>
										<p className="m-2">{description}</p>
										<a href='./brands' > <button className="m-1 mb-5">{button}</button></a>
									</div>
								</div>
							)
						})
					}

				</div>

			</center>


			<div className=" container row mx-6 my-6 md-6   " style={{ marginLeft: '100px', marginRight: '100px', marginTop: '0px', padding: '50px' }} >
				<div className='col-md-6 justify-content-center' >
					<div style={{
						backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4i918HUSmCYkcoVyYQwaBE6Vqg7LWo_HvzoP0IXJXGdVC4j6Ua6gh_8-DKAVww0cWBU8&usqp=CAU)'
						, height: 400, width: 500,
						backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: 'white',
					}}>
						{/* <h1 style={{ paddingTop: '120px' }}>Centered</h1> */}
						<h1><button style={{ marginTop: '150px', opacity: '0.8', textAlign: "center", marginLeft: "200px" }}><a href='./brands' style={{ textDecoration: 'none' }} > Mens</a></button></h1></div>
				</div>
				<div className='col-md-6 justify-content-center'  >
					<div style={{
						backgroundImage: 'url(https://i.pinimg.com/736x/e3/5e/98/e35e98b8592e40379cc037a5e7b38dd7.jpg)'
						, height: 400, width: 500,
						backgroundRepeat: 'no-repeat', backgroundSize: 'cover', color: 'white'

					}}><h1><button style={{ marginTop: '150px', backgroundcolor: 'blue', opacity: '0.8', textAlign: "center", marginLeft: "180px" }}><a href='./brands' style={{ textDecoration: 'none' }}> Womens</a></button></h1></div>

				</div>
			</div>



		</div>
	)
};

export default Home;