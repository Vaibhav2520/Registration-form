import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const getDataById = async (id) => {
  const docRef = doc(db, "candidate", id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};
