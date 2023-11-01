import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch=useDispatch();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.

      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
   useEffect(() => {
    // const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL:photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return ()=>{
        unsubscribe();   //I need to unsubscribe in clen up function in use effect because header page is sync in with onauthStatechange so after unmounting we need to unsubscribe it (unsubscribe method is given by firebase doc for unauthentication)
    }
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="logo"
      />

      {user && (
        <div className="flex p-4">
          {/* <img 
             className="w-[2rem] h-[2rem]"
            src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"/> */}
          <img className="w-[2rem] h-[2rem]" src={user?.photoURL} />
          <button
            className="font bold text-white"
            onClick={() => {
              handleSignout();
            }}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
