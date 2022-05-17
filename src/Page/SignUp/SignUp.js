import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, uperror] = useUpdateProfile(auth);
      const navigate = useNavigate();

      if( loading || gLoading || updating){
        return <Loading></Loading>
      }

    if (user || gUser) {
        console.log(gUser);

    }
    const onSubmit = async data => {

        console.log(data);
        await createUserWithEmailAndPassword(data.email,data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
        navigate('/appointment');
    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Sign up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Name</span>
                           
                        </label>
                        <input type="name"
                         placeholder="your name"
                          class="input input-bordered w-full max-w-xs"
                          {...register("name", { 
                              required:{
                                    value:true,
                                    message:'name baba is required'
                              },
                             
                        
                        })}
                          />
                       
                        </div>
                    {/* 2nd div */}
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
                            <span class="label-text-alt"></span>
                           
                        </label>
                    </div>
                  

                    <input className='btn  w-full max-w-xs text-white' type="submit" value='signup' />
                </form>
                <p><small>Already have an account? <Link className='text-secondary' to = "/login">please login</Link></small></p>
                <div className="divider">OR</div>
                <button onClick={() => signInWithGoogle()}

                    class="btn btn-link"
                >Continue with google</button>

            </div>
        </div>
    </div>
    );
};

export default SignUp;