import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../../firebase.config';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";

const auth = getAuth(app);

const Register = () => {
    const [show, setShow] = useState(true)
const [error, setError] = useState('');
const [success , setSuccess] = useState('');
const [user , setUser] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault(); //reload hobe na
        setSuccess('');
        setError('');
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        // console.log(name, email, password)
        if(!/(?=.*[A-Z])/.test(password)){
            setError('please add at least one uppercase');
            return;
        }
        else if(!/(?=.*[0-9].*[0-9])/.test(password)){
            setError('at lest 2 number needed');
            return;
        }
        else if(password.length < 8){
            setError('at least 8 characters needed');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser)
            setError('')
            event.target.reset();
            setSuccess('successfully created')
            sendVerificationEmail(loggedUser);
            updateUserData(loggedUser, name);
        })
        .catch(error => {
            // console.log(error.message)
            setError(error.message)
        })
    }

    // 
    const sendVerificationEmail = (user) =>{
        sendEmailVerification(user)
        .then(result => {
            // console.log(result);
            alert('verify your email')
        })

    }
    // 
    const updateUserData = (user, name) => {
        updateProfile(user , {
            displayName:name
        })
        .then(()=>{
            // console.log('user name updated')
        })
        .catch(error => {
            // console.log(error.message)
        })
    }
// ----------------
const handleShowPassword = () => {
setShow(!show)
}
    return (
        <div>
           <h2>Please Register</h2>
            <form onSubmit={handleSubmit}>
                <input  type="name" name="name" id="" placeholder='name' required /> <br />
                <input  type="email" name="email" id="" placeholder='email' required /> <br />
                <input type={show ? "password" :"text"} name="password" id="" placeholder='password' required /> <br />
                <button onClick={handleShowPassword}> {show ? "show password" : "hide password"} </button>
                <input type="submit" value="submit" placeholder='submit' />
            </form>
            <p> <small> Have you an account ? please <Link to='/login'>log in</Link></small></p>
                <p> {error}</p>
                <p>{success}</p>
        </div>
    );
};

export default Register;