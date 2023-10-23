import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
export const insertCandidate = async (candidate) => {
  try {
    const docRef = await addDoc(collection(db, "candidate"), candidate);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
