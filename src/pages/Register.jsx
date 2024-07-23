import "../style.scss"
import AddAvatar from "../img/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth, storage, db} from "../firebase.js";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL
} from "firebase/storage"
const Register = () => {
  const navigate = useNavigate();

  const [err,setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
try {
  const res = createUserWithEmailAndPassword(auth, email, password) 
  const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

uploadTask.on(
  (error) => {
      setErr(true)
      console.log(err)
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
      await updateProfile((await res).user, {
        displayName,
        photoURL:downloadURL
      });
      await setDoc(doc(db, "users", (await res).user.uid),{
        uid: (await res).user.uid,
        displayName,
        email,
        photoURL : downloadURL
      });
      await setDoc(doc(db, "userChats", (await res).user.uid), {});
      navigate("/");
    });
    
  }
);
} catch (error) {
  setErr(true)
}
 
  }

  return (
    <div className="form-container">
        <div className="form-wrapper">
            <span className="logo">Chat App</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <input type="file" id="file" style={{display: "none"}} />
                <label htmlFor="file">
                    <img src={AddAvatar} alt="avatar" />
                    <span>Add an Avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Something went wrong</span>}
            </form>
            <p>You do have an account? Login</p>
        </div>
    </div>
  );
}

export default Register;
