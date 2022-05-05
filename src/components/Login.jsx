import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import useAuth from '../hooks/useAuth'
import { actionLogin } from '../auth/authReducer'

const Login = () => {
	const { authState, dispatch } = useAuth()

	const handleSubmit = values => {
		actionLogin(values, dispatch)
	}
	return (
		<div className='container'>
			<div className='card col-md-6 mx-auto mt-4 p-4'>
				<h1>Login</h1>
				<Formik
					initialValues={{ name: '' }}
					onSubmit={values => handleSubmit(values)}
				>
					{() => (
						<Form>
							<div className='form-group mb-4'>
								<label className='form-label'>Ingrese su nombre</label>
								<Field className='form-control' type='text' name='name' />
							</div>
							<div className='form-group'>
								<button className='btn btn-primary' type='submit'>
									Ingresar
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default Login
