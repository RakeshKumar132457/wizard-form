import "./CreateUser.css";

function CreateUser(props: any) {
	return (
		<div>
			<form
				className='form'
				onSubmit={(e) => {
					props.handleSubmit(e);
				}}
			>
				<div className='form__name'>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='Name'
					/>
				</div>
				<div className='form__email'>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
					/>
				</div>
				<div className='form__phone'>
					<label htmlFor='phone'>Phone</label>
					<input
						type='text'
						name='phone'
						id='phone'
						placeholder='Phone'
					/>
				</div>
				<div className='form__address'>
					<label htmlFor='address'>Address</label>
					<input
						type='text'
						name='address'
						id='address'
						placeholder='Address'
					/>
				</div>
				<div className='form__submit'>
					<button className='btn btn__submit'>Submit</button>
				</div>
			</form>
		</div>
	);
}

export default CreateUser;
