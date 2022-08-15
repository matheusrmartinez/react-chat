import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "../../App.css";

export const SignIn = () => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};
