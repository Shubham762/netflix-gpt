import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
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
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe(); //I need to unsubscribe in clen up function in use effect because header page is sync in with onauthStatechange so after unmounting we need to unsubscribe it (unsubscribe method is given by firebase doc for unauthentication)
    };
  }, []);

  const handleGptSerachClick = () => {
    //toggle GPT search
    dispatch(toggleGptSearchView());
  };

  const handleLangugaeChange = (eventvalue) => {
    // console.log(eventvalue);
    dispatch(changeLanguage(eventvalue));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-4">
          {/* <img 
             className="w-[2rem] h-[2rem]"
            src="https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png"/> */}
          {showGptSearch && (
            <select
              className="p-2  m-2 -mt-1 bg-gray-900 text-white"
              onChange={(e) => {
                handleLangugaeChange(e.target.value);
              }}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                // console.log(lang)
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.language_name}
                </option>
              ))}
              {/* <option value="en">English</option>
              <option valuse='hindi'>Hindi</option>
              <option value='spanish'>Spanish</option> */}
            </select>
          )}
          <button
            className="py-2 px-4 m-1 mx-4 mb-4  bg-purple-500 text-white rounded-lg"
            onClick={() => {
              handleGptSerachClick();
            }}
          >
            {showGptSearch ? "HomePage": "GPT Search"}
          </button>
          <img className="w-[2rem] h-[2rem] mt-2" src={user?.photoURL} />
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
