import "./App.css";
import { useForm } from "react-hook-form";

function App() {
	const { register, handleSubmit } = useForm();
	const onSubmit = data => console.log(data);
	return (
		<div className='App'>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<input
						{...register("firstName", { required: true, maxLength: 20 })}
						placeholder='Enter name...'
					/>
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
					/>
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
