import React from 'react';
// import google from '../../../images/social/google.png';
// import github from '../../../images/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMessage;
    if (error ) {
         errorMessage = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
      }


      if(user ){
        navigate('/home');
      }
    return (
        <div >
            <div className='d-flex align-items-center justify-content-center'>
            <div style={{height:'1px'}} className='bg-dark w-50'></div>
            <p className='mt-2 mx-2'>or</p>
            <div style={{height:'1px'}} className='bg-dark w-50'></div>
            </div>
                {errorMessage}
                <button
                onClick={()=> signInWithGoogle()}
                className='btn btn-info mx-auto d-block w-50 my-3'>
                    <img className='mx-2 ' style={{width:'30px'}}  alt="" />
                    Google SignIn
                    </button>

        </div>
    );
};

export default SocialLogin;