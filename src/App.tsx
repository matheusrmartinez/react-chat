import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { ChatRoom } from "./components/ChatRoom/ChatRoom";
import { SignIn } from "./components/SignIn/SignIn";
import { SignOut } from "./components/SignOut/SignOut";

function App() {
  const auth = getAuth();

  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
