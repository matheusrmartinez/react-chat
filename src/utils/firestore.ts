import { getFirestore } from "firebase/firestore";
import { FirebaseClient } from "./firebase-client";

// console.log(FirebaseClient, "FirebaseClient");

export const Firestore = getFirestore(FirebaseClient);
