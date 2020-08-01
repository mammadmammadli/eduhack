import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './index.scss';

const Login = () => {
    const { handleSubmit, errors, register } = useForm();
    const [ isTouched, setTouched ] = useState({ isPasswordTouched: false, isEmailTouched: false });

    const onSubmit = values => {
        console.log(values);
    }

    return (
        <div className='loginPage'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="email"
                    placeholder="e-mail"
                    type="text"
                    ref={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        }
                    })}
                />
                {isTouched.isEmailTouched && errors.email && errors.email.message}
                <input
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
                {isTouched.isPasswordTouched && errors.password && errors.password.message}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login;