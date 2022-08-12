import styled from 'styled-components';

export const Box = styled.div`
padding: 60px 40px;
background:#261C29;// #3F8678;
position: absolute;
color: #fff;
margin-bottom: 0;
width: 100%;
height: 450px;
overflow: hidden;
@media (max-width: 1000px) {
	padding: 50px 30px;
}


`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	// margin-top: 100px;
	/* background: red; */
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 0px;
margin-top : 20px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 10px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(100px, 1fr));
}
`;

export const FooterLink = styled.a`
color: #fff7;
margin-bottom: 10px;
font-size: 16px;
text-decoration: none;

&:hover {
	color: #fff;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 20px;
color: #fff;
margin-bottom: 12px;
font-weight: bold;
`;
