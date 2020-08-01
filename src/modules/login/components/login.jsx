import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './index.scss';
import { useDispatch } from 'react-redux';
import { login } from '../store/actions';
import { ReactComponent as Vogel } from '../../../assets/images/vogel.svg';
import { ReactComponent as Globus } from '../../../assets/images/globus.svg';
import { ReactComponent as Pipes } from '../../../assets/images/pipes.svg';
import { ReactComponent as Calendar } from '../../../assets/images/calendar.svg';
import { Link, withRouter } from 'react-router-dom';

const Login = (props) => {
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(false)
    const { handleSubmit, register } = useForm();
    const [isTouched, setTouched] = useState({ isPasswordTouched: false, isEmailTouched: false });

    const onSubmit = ({ email, password }) => {
        const data = {
            email,
            password
        }
        setLoading(true)

        dispatch(login(data)).payload.then(data => {
            setLoading(false)
            console.log(data)
            localStorage.setItem('token', data.token);
            localStorage.setItem('id', data.user['_id']);
            props.history.push('/dashboard')
        }).catch(e => {
            console.log(e);
            alert('error')
        })
    }

    return (
        <div className='loginPage'>
            <div className='loginPage__form'>
                <div className='loginPage__form__top'>
                    <span>Oh, hello</span>
                </div>
                <div className='loginPage__form__middle'>
                    <div className='loginPage__form__icons'>
                        <Calendar />
                        <Globus />
                        <Pipes />
                    </div>
                    <div className='loginPage__form__inputs'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='loginPage__form__inputs__field'>
                                <input
                                    name="email"
                                    placeholder="E-mail"
                                    type="text"
                                    ref={register({
                                        required: true,
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email address"
                                        }
                                    })}
                                />
                            </div>
                            <div className='loginPage__form__inputs__field'>
                                <input
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    onKeyPress={(e) => {
                                        if (e.key === 'Enter') {
                                            setTouched({ ...isTouched, isPasswordTouched: true });
                                        } else if (isTouched.isPasswordTouched) {
                                            setTouched({ ...isTouched, isPasswordTouched: false });
                                        }
                                    }}
                                    onBlur={() => setTouched({ ...isTouched, isPasswordTouched: true })}
                                    ref={register({
                                        required: true,
                                        minLength: {
                                            value: 6,
                                            message: 'Password length should be longer than 6'
                                        }
                                    })}
                                />
                            </div>
                            <div className='loginPage__form__inputs__actions'>
                                <button type="submit">
                                    {isLoading ? 'Loading' : 'Log In'}
                                </button>
                                <Link to='#'>Forgot your password?</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='loginPage__form__footer'>
                    <span>&#169; Copyright 2020 Vogel, Inc. All rights reserved. Privacy Policy Terms</span>
                </div>
            </div>
            <div className='loginPage__logo'>
                <div className='loginPage__logo__circle'>
                    <Vogel /> <span>Vogel</span>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);