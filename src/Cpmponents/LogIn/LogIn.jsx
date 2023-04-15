
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { GithubAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../../firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);

const LogIn = () => {
    const [error, setError] = useState('');
const [success , setSuccess] = useState('');
const [user , setUser] = useState({});
const emailRef = useRef()
// ------------------------
    const handleSubmit = (event) => {
        event.preventDefault(); //reload hobe na
        setSuccess('');
        setError('');
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            // Signed in 
            const loggedUser = result.user;
            // console.log(loggedUser);
            if (!loggedUser.emailVerified) {
                alert('at first verify your email')
            }
            setSuccess('success')
            setError('')
            // ...
        })
        .catch(error => {
            setError(error.message)
        });

    }
// ----------------------
    const handlePassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert('at first input email')
            return;
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please check your email')
            })
            .catch(error => {
                // console.log(error)
                setError(error.message)
            })
    }
//-------------------------
const handleGoogleLogIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        // console.log(user)
        setUser(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        // console.log(errorMessage)
        setError(errorMessage);
      });
}
// -----------------------
const handleGithubLogIn = () => {
    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        const user = result.user;
        console.log(user)
        setUser(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
        setError(errorMessage);
      });
}
    return (
        <div>
            <h2>log in</h2>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" id="" placeholder='email' required /> <br />
                <input type="password" name="password" id="" placeholder='password' required /> <br />
                <input type="submit" value="submit" placeholder='submit' />
                <p> <small>forget password <button onClick={handlePassword}>get password</button></small></p>
                <p> {error}</p>
                <p>{success}</p>
            </form>
            <p>Are you First on this site ? Please..  <Link to='/register'>Register</Link></p>
            <button onClick={handleGoogleLogIn}> Log In With Google</button>
            <button onClick={handleGithubLogIn}> log In with gitHut</button>
            <p>user name : {user.displayName}</p>
        </div>
    );
};

export default LogIn;