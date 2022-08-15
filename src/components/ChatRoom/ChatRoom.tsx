import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  DocumentData,
  limit,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "../../App.css";
import { Firestore } from "../../utils/firestore";
import { ChatMessage } from "../ChatMessage/ChatMessage";

interface User {
  uid: string;
  photoURL: string | null;
}

export const ChatRoom = () => {
  const auth = getAuth();
  const [formValue, setFormValue] = useState("");
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current)
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const messagesRef = query<DocumentData>(
    collection(Firestore, "messages"),
    orderBy("createdAt"),
    limit(25)
  );

  const [messages] = useCollectionData(messagesRef);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    const { uid, photoURL }: any = auth.currentUser;

    try {
      const document = await addDoc(collection(Firestore, "messages"), {
        text: formValue,
        createdAt: serverTimestamp(),
        uid,
        photoURL,
      });

      console.log("Document written with ID: ", document.id);
    } catch (error) {
      console.error("Error adding document: ", e);
    }

    setFormValue("");
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg: any, index) => (
            <ChatMessage key={index} message={msg} />
          ))}

        <span ref={messagesEndRef}></span>
      </main>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button disabled={!formValue} type="submit">
          🕊
        </button>
      </form>
    </>
  );
};
