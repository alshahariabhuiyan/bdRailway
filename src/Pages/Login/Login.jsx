import { Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import AllUsers from '../../Hooks/AllUsers';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
const Login = () => {

    const [ ,users] = AllUsers()
    const {login} = useContext(AuthContext)
    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = 'Invalid email address';
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
                            email: '',
                            password: ''

                        }}
                        onSubmit={values => {
                            console.log(values);
                            login(values.email, values.password)
                            .then(result => {
                                const loggedUser = result.user;
                                if(loggedUser) {
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
                                        title: `user logged in successfully`
                                      })
                                }
                            })
                            .catch(err => {
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
                                    icon: 'error',
                                    title: `${err.code}`
                                  })
                            })
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form>
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
                                <button className='btn w-full' type="submit">LogIn</button>
                            </Form>
                        )}
                    </Formik>
                    <small>Don&apos;t Have An Account?Please<Link to='/register' className='underline text-orange-700'>Register</Link></small>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;