import "./App.css";
import { useForm } from "react-hook-form";

function App() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = data => console.log(data);
	return (
		<div className='App'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						{...register("firstName", { required: true, maxLength: 20 })}
						placeholder='Enter name...'
						aria-invalid={errors.firstName ? "true" : "false"}
					/>
					{(errors.firstName?.type === "required" ||
						errors.firstName?.type > "maxLenght") && (
						<p role='alert'>First name is required,max 20 chars</p>
					)}
				</div>
				<div>
					<input
						{...register("lastName", { pattern: /^[A-Za-z]+$/i })}
						placeholder='Enter last name...'
					/>
				</div>

				<div>
					<input
						type='number'
						{...register("age", { min: 18, max: 99 })}
						placeholder='Enter age...'
						aria-invalid={errors.age ? "true" : "false"}
					/>
					{(errors.age?.type < "min" || errors.age?.type > "max") && (
						<p role='alert'>Age is required,min: 18, max: 99 years</p>
					)}
				</div>
				<div>
					<select {...register("gender")}>
						<option value='female'>female</option>
						<option value='male'>male</option>
					</select>
				</div>
				<div>
					<input type='submit' />
				</div>
			</form>
		</div>
	);
}

export default App;
