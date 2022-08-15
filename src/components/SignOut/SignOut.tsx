import { getAuth } from "firebase/auth";
import "../../App.css";

export const SignOut = () => {
  const handleSignOut = () => {
    auth.signOut();
  };

  const auth = getAuth();
  return auth.currentUser && <button onClick={handleSignOut}>Sign Out</button>;
};
