import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase";
import { UserAuth } from "../context/AuthContext";

const SendMessageBox = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleSendMessage = async (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      alert("Enter valid message");
    }
    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, "messages"), {
        text: value,
        user: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    console.log(value);
    setValue("");
  };

  return (
    <div className="bg-secondary fixed bottom-0 w-full py-10 shadow-lg text-primary-content">
      <form onSubmit={handleSendMessage} className="containerWrap flex">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
          aria-label="write message"
          className="input w-full focus:outline-none text-white rounded-full"
        />
        <button
          type="submit"
          className="w-auto ml-4 bg-primary text-white text-sm rounded-full px-5"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessageBox;
