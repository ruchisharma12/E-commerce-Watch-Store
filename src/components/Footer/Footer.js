import React, { useState } from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyles";
import './Footer.css';
import {
	Button,
	Form,
	FormGroup,
	Input,
	Label
} from 'reactstrap';

function Footer(props) {

	const [username, setUsername] = useState("");
	const [comment, setComment] = useState("");

	function getFeedbackData(e) {
		console.log(username, comment)
		e.preventDefault()
	}

	return (
		<Box>

			<h2 style={{
				color: "white",
				textAlign: "left",
				marginTop: "-50px", marginLeft: "30%",
			}}>
				Premium and Swiss SAMAY WATCH STORE
			</h2>
			<Container>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Aim</FooterLink>
						<FooterLink href="#">Vision</FooterLink>
						<FooterLink href="#">Testimonials</FooterLink>
					</Column>
					<Column></Column>
					<Column>
						<Heading>Services</Heading>
						<FooterLink href="#">Writing</FooterLink>
						<FooterLink href="#">Internships</FooterLink>
						<FooterLink href="#">Coding</FooterLink>
						<FooterLink href="#">Teaching</FooterLink>
					</Column>
					<Column></Column>
					<Column>
						<div className="zap" style={{ width: '400px', }}>
							<h2>Feedback</h2>
							<Form className="form" onSubmit={getFeedbackData}>
								<FormGroup>
									<Label for="exampleEmail">Username</Label>
									<Input
										type="email"
										name="email"
										id="exampleEmail"
										placeholder="example@example.com"
										onChange={(e) => setUsername(e.target.value)}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="comments">Comment</Label>
									<Input style={{ height: "" }}
										type="text"
										name="comment"
										id="comments"
										placeholder="This is the comment section"
										onChange={(e) => setComment(e.target.value)}

									/>
								</FormGroup>
								<Button type="submit" onClick={props.data}>Submit</Button>
							</Form>
						</div>
					</Column>
					<Column></Column>


				</Row>
			</Container>

		</Box>
	)
}
export default Footer;
