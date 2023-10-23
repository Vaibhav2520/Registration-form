import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const fetchPost = async () => {
  let candidatesData = [];
  await getDocs(collection(db, "candidate")).then((querySnapshot) => {
    candidatesData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  });
  return candidatesData;
};
