import { getAuth } from "firebase/auth";
import "../../App.css";

interface ChatMessageProps {
  message: {
    text: string;
    uid: string;
    photoURL: string;
  };
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const auth = getAuth();
  const { text, uid, photoURL } = message;

  const messageClass = uid === auth.currentUser?.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="photo" />
      <p>{text}</p>
    </div>
  );
};
