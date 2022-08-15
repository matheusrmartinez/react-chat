import { getFirestore } from "firebase/firestore";
import { FirebaseClient } from "./firebase-client";

export const Firestore = getFirestore(FirebaseClient);
