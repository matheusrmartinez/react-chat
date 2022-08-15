import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { ChatRoom } from "./components/ChatRoom/ChatRoom";
import { SignIn } from "./components/SignIn/SignIn";

function App() {
  const auth = getAuth();

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      {user ? (
        <section>
          <ChatRoom />
        </section>
      ) : (
        <>
          <SignIn />
        </>
      )}
    </div>
  );
}

export default App;
