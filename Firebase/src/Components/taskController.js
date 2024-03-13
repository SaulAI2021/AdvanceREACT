import { db } from "./Firebaseconfig";
import { doc,collection,addDoc,getDocs, setDoc, deleteDoc } from "firebase/firestore";

export const addNewTask = async (task) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), task);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


export const getTasks = async()=>{
  const querySnapshot = await getDocs(collection(db,'tasks'));
  const tasks = querySnapshot.docs.map(doc=>{
    return {...doc.data(), id: doc.id}
  });
  return tasks;
}

export const updateTask = async (task) => {
  await setDoc(doc(db,'tasks',task.id),{
    title: task.title,
    description : task.description
  })
}

export const deleteTask = async (id) =>{
  await deleteDoc(doc(db,'tasks',id));
}