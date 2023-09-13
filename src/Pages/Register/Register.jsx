import { Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
        }
        return error;
    }

    function validateUsername(value) {
        let error;
        if (value === 'admin') {
            error = 'Nice try!';
        }
        return error;
    }

    function validatePassword(value) {
        let error;
        if (!/^(?=.*[A-Z])(?=.*[!@#$&*]).{6}$/.test(value)) {
            error = 'password must be 1 uppercase 1 special charecter and 6 digit'
        }
        return error
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <Formik
                            initialValues={{
                                username: '',
                                email: '',
                                password: ''

                            }}
                            onSubmit={values => {
                                createUser(values.email, values.password)
                                    .then(result => {
                                        const loggedUser = result.user
                                        console.log(loggedUser)
                                        if (loggedUser) {
                                            fetch('http://localhost:5000/users', {
                                                method: "POST",
                                                headers: {
                                                    'content-type': 'application/json'
                                                },
                                                body: JSON.stringify(values)
                                            })
                                                .then(res => res.json())
                                                .then(data => {
                                                    if (data.insertedId) {
                                                        const Toast = Swal.mixin({
                                                            toast: true,
                                                            position: 'top-end',
                                                            showConfirmButton: false,
                                                            timer: 3000,
                                                            timerProgressBar: true,
                                                            didOpen: (toast) => {
                                                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                                                            }
                                                        })

                                                        Toast.fire({
                                                            icon: 'success',
                                                            title: 'User created successfully ! Please login'
                                                        })
                                                    }
                                                })
                                        }
                                    })
                                    .catch(error => {
                                        const Toast = Swal.mixin({
                                            toast: true,
                                            position: 'top-end',
                                            showConfirmButton: false,
                                            timer: 3000,
                                            timerProgressBar: true,
                                            didOpen: (toast) => {
                                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                                            }
                                        })

                                        Toast.fire({
                                            icon: 'success',
                                            title: `${error.code}`
                                        })
                                    })
                                // console.log(values);
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <label className='block mb-2' htmlFor="username">username</label>
                                    <Field
                                        name="username"
                                        validate={validateUsername}
                                        className="border h-10 lg:w-full rounded-lg p-2 mb-4 "
                                    />
                                    {errors.username && touched.username && <small className='block text-orange-600 mb-4'><div>{errors.username}</div></small>}
                                    <label className='block mb-2' htmlFor="email">Email</label>
                                    <Field
                                        name="email"
                                        type="email"
                                        className="border h-10 lg:w-full rounded-lg p-2 mb-4"
                                        validate={validateEmail} />
                                    {errors.email && touched.email && <small className='block text-orange-600 mb-4'><div>{errors.email}</div></small>}
                                    <label className='block mb-2' htmlFor="password">password</label>
                                    <Field
                                        name="password"
                                        type="password"
                                        validate={validatePassword}
                                        className="border h-10 lg:w-full rounded-lg p-2 mb-4"
                                    />
                                    {errors.password && touched.password && <small className='block text-orange-600 mb-4'><div>{errors.password}</div></small>}
                                    <button className='btn w-full' type="submit">Register</button>
                                </Form>
                            )}
                        </Formik>
                        <small>Don&apos;t Have An Account?<Link to='/login' className='underline text-orange-700'>Log In</Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;