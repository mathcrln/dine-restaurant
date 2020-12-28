import * as React from "react";
import SubmitButton from "../../shared/button.component";

class BookingForm extends React.Component {
	constructor(props) {
		super(props);

		// this.handleNameChange = this.handleNameChange.bind(this);

		this.state = {
			name: "",
			email: "",
			numberOfPeople: 4,
			nameError: false,
			emailError: false,
			hasError: false,
		};
	}

	// handleNameChange(e) {
	// 	this.setState((state, e) => {
	// 		console.log(e);
	// 		return { name: e.target.value };
	// 	});
	// 	console.log(this.state.name);
	// }

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({
			name: "",
			email: "",
		});

		let bookingForm = document.forms.booking;
		console.log(bookingForm.name.value);
		console.log(bookingForm.email.value);

		// if (this.state.name === "") {
		// 	this.setState({
		// 		nameError: true,
		// 	});
		// } else {
		// 	this.setState({
		// 		nameError: false,
		// 	});
		// }

		// if (this.state.email === "") {
		// 	this.setState({
		// 		emailError: true,
		// 	});
		// } else {
		// 	this.setState({
		// 		emailError: false,
		// 	});
		// }

		// const { emailError, nameError } = this.state;
		// let errors = emailError && nameError;
		// !errors
		// 	? console.log("Thank you for submitting!")
		// 	: console.log("There are still errors.");
	};

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleDecrement = (event) => {
		event.preventDefault();

		let prevNumber = this.state.numberOfPeople;

		if (prevNumber > 4) {
			this.setState({
				numberOfPeople: prevNumber - 1,
			});
		}
	};
	handleIncrement = (event) => {
		event.preventDefault();
		let prevNumber = this.state.numberOfPeople;

		if (prevNumber < 15) {
			this.setState({
				numberOfPeople: prevNumber + 1,
			});
		}
	};

	render() {
		return (
			<div className="bg-white py-5 px-8 laptop:px-10 -mt-20.6 laptop:-mt-85 w-full laptop:w-1/2 laptop:pt-8 mb-32 mr-0 shadow-form">
				<div className="text-left mb-10">
					<form onSubmit={this.handleSubmit} name="booking">
						<input
							name="name"
							type="text"
							placeholder="Name"
							value={this.state.name}
							onChange={this.handleChange}
							className="form-input form-line pl-4"
						/>
						{/* <p hidden={!this.state.nameError}>This field is required</p> */}
						<input
							name="email"
							type="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleChange}
							className="form-input form-line pl-4"
						/>
						{/* <p hidden={!this.state.emailError}>This field is required</p> */}

						<div className="laptop:flex laptop:items-center form-line mt-4">
							<p className="text-lg laptop:w-1/3">Pick a date</p>
							<div className="flex justify-between laptop:w-2/3">
								<input
									type="number"
									min="1"
									max="12"
									placeholder="MM"
									className="input-in-group"
								/>
								<input
									type="number"
									min="1"
									max="30"
									placeholder="DD"
									className="input-in-group"
								/>
								<input
									type="number"
									min="2020"
									max="2030"
									placeholder="YYYY"
									className="input-in-group"
								/>
							</div>
						</div>

						<div className="form-line laptop:flex laptop:items-center mt-9">
							<p className="laptop:w-1/3 text-lg">Pick a time</p>
							<div className="flex justify-between laptop:w-2/3">
								<input
									type="number"
									min="0"
									max="24"
									placeholder="09"
									className="input-in-group"
								/>
								<input
									type="number"
									min="0"
									max="60"
									placeholder="00"
									className="input-in-group"
								/>
								<select
									id="partOfDay"
									name="partOfDay"
									className="input-in-group appearance-none"
								>
									<option value="AM">AM</option>
									<option value="PM">PM</option>
								</select>
							</div>
						</div>
						<div className="form-line input-group flex justify-between border-b border-codGray w-full mt-9 pb-4">
							<button
								onClick={this.handleDecrement}
								className="text-body--1 font-bold text-beaver disabled:opacity-50 w-2/12 text-lg ring-0"
								disabled={this.state.numberOfPeople === 4 ? true : false}
							>
								-
							</button>
							<div className="text-body--1 font-bold text-lg">
								{this.state.numberOfPeople} people
							</div>
							<button
								onClick={this.handleIncrement}
								className="text-body--1 font-bold text-beaver disabled:opacity-50 w-2/12 text-lg ring-0"
								disabled={this.state.numberOfPeople === 15 ? true : false}
							>
								+
							</button>
						</div>

						<SubmitButton
							callToAction="Make Reservation"
							onLight={true}
							classProperties="w-full px-8 mt-3"
						/>
					</form>
				</div>
			</div>
		);
	}
}

export default BookingForm;
