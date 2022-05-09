import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogIn/SocialLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

  const [
    signInWithEmailAndPassword,
    user
  ] = useSignInWithEmailAndPassword(auth);


  

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password);
    }

    const handleSignUp = () =>{
            navigate('/register');
    }

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    if(user){
      navigate(from, { replace: true });
    }


    const handleResetPassword = async () =>{
      const email = emailRef.current.value;
      if(email){
        await sendPasswordResetEmail(email);
        toast('reset link sent to your email');
      }

    }
    return (
        <div className='container'>
           <h1 className='text-center text-primary my-3'>Please Login</h1> 
           <Form onClick={handleSubmit} className='w-50 mx-auto'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email address</Form.Label>
             <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
             <Form.Text className="text-muted">
              We'll never share your email with anyone else.
         </Form.Text>
         </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
<p className='text-center'>New here? <span className='text-danger' role='button' onClick={handleSignUp}> Signup Now</span></p>
<p className='text-center'>Forget password? <span className='text-danger' role='button' onClick={handleResetPassword}>Reset</span></p>
<SocialLogin></SocialLogin>
<ToastContainer/>
        </div>
    );
};

export default Login;