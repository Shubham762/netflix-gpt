import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  var toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9db4a880-3034-4e98-bdea-5d983e86bf52/b5953637-091d-4e02-9754-2bfadc8a8f7c/IN-en-20230925-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Nteflixlogo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 m-auto left-0 right-0 text-white bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
       { !isSignedInForm && (<input
          type="Text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />)} 
        <input
          type="Text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignedInForm ? "Sign In" : "Sign UP"}
        </button>
        <p className="py-4 cusrsor- cursor-pointer" onClick={toggleSignInForm}>
          {isSignedInForm
            ? "New to Netflix? Sign Up Now"
            : "Alreadey Registered? Sign In now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
