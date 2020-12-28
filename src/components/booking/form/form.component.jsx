import * as React from "react";
import { useFormik } from "formik";
import SubmitButton from "../../shared/button.component";

const validate = (values) => {
	const errors = {};

	// Name Validation
	if (!values.name) {
		errors.name = "This field is required";
	} else if (values.name.length > 20) {
		errors.name = "Must be 20 characters or less";
	}

	// Email Validation
	if (!values.email) {
		errors.email = "This field is required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	// Date validation
	if (!values.month || !values.day || !values.year) {
		errors.date = "This field is incomplete";
	}

	// Hour validation
	if (!values.hour || !values.minute) {
		errors.time = "This field is incomplete";
	}

	return errors;
};

const Form = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",

			month: "",
			day: "",
			year: "",

			hour: "",
			minute: "",
			partOfDay: "AM",
			numberOfPeople: 4,
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	const handleIncrement = () => {
		let prevNumber = formik.values.numberOfPeople;

		if (prevNumber < 15) {
			formik.values.numberOfPeople = prevNumber + 1;
			console.log(formik.values.numberOfPeople);
		}
	};
	const handleDecrement = () => {
		let prevNumber = formik.values.numberOfPeople;

		if (prevNumber > 4) {
			formik.values.numberOfPeople = prevNumber - 1;
			console.log(formik.values.numberOfPeople);
		}
	};
	return (
		<div className="bg-white py-5 px-8 laptop:px-10 -mt-20.6 laptop:-mt-85 w-full laptop:w-1/2 laptop:pt-8 mb-32 mr-0 shadow-form">
			<div className="text-left mb-10">
				<form onSubmit={formik.handleSubmit} name="booking">
					<div>
						<label htmlFor="name">Name</label>
						<input
							id="name"
							name="name"
							type="text"
							placeholder="Name"
							value={formik.values.name}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className={`form-input form-line pl-4 ${
								formik.touched.name && formik.errors.name ? "field-error" : ""
							}`}
						/>
						{formik.touched.name && formik.errors.name ? (
							<div className="pl-4 error-message">{formik.errors.name}</div>
						) : null}
					</div>

					<div>
						<label htmlFor="email">Email</label>
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							className={`form-input form-line pl-4 ${
								formik.touched.email && formik.errors.email
									? "field-error"
									: null
							}`}
						/>
						{formik.touched.email && formik.errors.email ? (
							<div className="pl-4 error-message">{formik.errors.email}</div>
						) : null}
					</div>

					<div
						className="laptop:flex laptop:items-center form-line mt-4"
						id="date"
						name="date"
					>
						<div className="laptop:w-1/3">
							<p className="text-lg">Pick a date</p>

							{(formik.touched.month ||
								formik.touched.day ||
								formik.touched.year) &&
							formik.errors.date ? (
								<div className="error-message">{formik.errors.date}</div>
							) : null}
						</div>
						<div className="flex justify-between laptop:w-2/3">
							<label htmlFor="month">Month</label>
							<input
								type="number"
								min="1"
								max="12"
								placeholder="MM"
								value={formik.values.month}
								name="month"
								id="month"
								onBlur={formik.handleBlur}
								onChange={formik.handleChange}
								className={`input-in-group ${
									formik.touched.month && formik.errors.date
										? "field-error"
										: null
								}`}
							/>
							<label htmlFor="day">Day</label>
							<input
								type="number"
								min="1"
								max="30"
								placeholder="DD"
								name="day"
								id="day"
								onBlur={formik.handleBlur}
								value={formik.values.day}
								onChange={formik.handleChange}
								className={`input-in-group ${
									formik.touched.day && formik.errors.date
										? "field-error"
										: null
								}`}
							/>
							<label htmlFor="year">Year</label>

							<input
								type="number"
								min="2020"
								max="2030"
								placeholder="YYYY"
								name="year"
								id="year"
								onBlur={formik.handleBlur}
								value={formik.values.year}
								onChange={formik.handleChange}
								className={`input-in-group ${
									formik.touched.year && formik.errors.date
										? "field-error"
										: null
								}`}
							/>
						</div>
					</div>

					<div className="form-line laptop:flex laptop:items-center mt-9">
						<div className="laptop:w-1/3">
							<p className="text-lg">Pick a time</p>

							{(formik.touched.hour || formik.touched.minute) &&
							formik.errors.time ? (
								<div className="error-message">{formik.errors.time}</div>
							) : null}
						</div>
						<div className="flex justify-between laptop:w-2/3">
							<input
								type="number"
								min="0"
								max="24"
								placeholder="09"
								name="hour"
								id="hour"
								onBlur={formik.handleBlur}
								value={formik.values.hour}
								onChange={formik.handleChange}
								className={`input-in-group ${
									formik.touched.hour && formik.errors.time
										? "field-error"
										: null
								}`}
							/>
							<input
								type="number"
								min="0"
								max="60"
								placeholder="00"
								name="minute"
								id="minute"
								onBlur={formik.handleBlur}
								value={formik.values.minute}
								onChange={formik.handleChange}
								className={`input-in-group ${
									formik.touched.minute && formik.errors.time
										? "field-error"
										: null
								}`}
							/>
							<select
								id="partOfDay"
								name="partOfDay"
								className="input-in-group appearance-none"
								value={formik.values.partOfDay}
								onChange={formik.handleChange}
								onBlur={formik.handleChange}
							>
								<option id="AM" value="AM">
									AM
								</option>
								<option id="PM" value="PM">
									PM
								</option>
							</select>
						</div>
					</div>
					<div className="form-line input-group flex justify-between border-b border-codGray w-full mt-9 pb-4">
						<button
							onClick={handleDecrement}
							className="text-body--1 font-bold text-beaver disabled:opacity-50 w-2/12 text-lg ring-0"
							disabled={formik.values.numberOfPeople === 4 ? true : false}
							type="button"
						>
							-
						</button>
						<div className="text-body--1 font-bold text-lg">
							{formik.values.numberOfPeople} people
						</div>
						<button
							onClick={handleIncrement}
							className="text-body--1 font-bold text-beaver disabled:opacity-50 w-2/12 text-lg ring-0"
							disabled={formik.values.numberOfPeople === 15 ? true : false}
							type="button"
						>
							+
						</button>
					</div>

					<SubmitButton
						callToAction="Make Reservation"
						type="submit"
						onLight={true}
						classProperties="w-full px-8 mt-3"
					/>
				</form>
			</div>
		</div>
	);
};

export default Form;
