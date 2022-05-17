import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const navigate = useNavigate();
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";

      useEffect(() =>{
        if (user || gUser) {
            navigate(from, { replace: true });
    
        }
      },[user,gUser,from,navigate])


      if( loading || gLoading){
        return <Loading></Loading>
      }

    
    const onSubmit = data => {

        console.log(data);
        signInWithEmailAndPassword(data.email,data.password);
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                               
                            </label>
                            <input type="email"
                             placeholder="your Email"
                              class="input input-bordered w-full max-w-xs"
                              {...register("email", { 
                                  required:{
                                        value:true,
                                        message:'Email baba is required'
                                  },
                                  pattern:{
                                      value:/[A-Za-z]{3}/,
                                      message:'Provide a valid Email baba'
                                  }
                            
                            })}
                              />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                               
                            </label>
                            <input type="password"
                             placeholder="your password"
                              class="input input-bordered w-full max-w-xs"
                              {...register("password", { 
                                  required:{
                                        value:true,
                                        message:'password baba is required'
                                  },
                                  pattern:{
                                      value:0,
                                      message:'Provide a valid Email baba'
                                  }
                            
                            })}
                              />
                            <label class="label">
                                <span class="label-text-alt">Alt label</span>
                               
                            </label>
                        </div>
                      

                        <input className='btn  w-full max-w-xs text-white' type="submit" value='logg inn' />
                    </form>
                    <p><small>new to doctors portal <Link className='text-secondary' to = "/signup">Create a new account</Link></small></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}

                        class="btn btn-link"
                    >Continue with google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;