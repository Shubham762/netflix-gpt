import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTOURL } from "../utils/constants";
import { PageImage } from "../utils/constants";
const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [errormsg, setErrormsg] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // checkValidData(email,password);
    // console.log(email.current.value);
    // console.log(password.current.value);

    let msg = checkValidData(email.current.value, password.current.value);
    // console.log(msg);
    setErrormsg(msg);

    if (msg) return; // msg ===Email is not valid  which is true but false case scenario if it is invalid return by checkvaliddata fuction

    //signin.sign up logic
    if (!isSignedInForm) {
      console.log(
        "this is auth,email,pass",
        auth,
        email.current.value,
        password.current.value
      );
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log("this is ", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:PHOTOURL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              /* the above dipath code is written as intial useffect update displya name and photourl with null value and sfter refresh it we get the value so above code dipatch a action and update a store with updated value from auth*/

            })
            .catch((error) => {
              setErrormsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrormsg(errorCode + "_" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         
         
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrormsg(errorCode + "_" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={PageImage}
          alt="Nteflixlogo"
        />
      </div>
      <form
        className="w-3/12 absolute p-12 bg-black my-36 m-auto left-0 right-0 text-white bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignedInForm && (
          <input
            ref={name}
            type="Text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="Text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errormsg}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
