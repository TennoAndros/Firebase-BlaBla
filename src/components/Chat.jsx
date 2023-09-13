import { useEffect, useState } from "react";
import { ChatEngine } from "react-chat-engine";
import { UseAuth } from "../context/AuthContext";
import { useNavigate } from "react-router";
import axios from "axios";

const Chat = () => {
  const { user } = UseAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me/", {
        headers: {
          "project-ID": import.meta.env.VITE_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formData = new FormData();
        formData.append("email", user.email);
        formData.append("username", user.email);
        formData.append("secret", user.uid);

        getFile(user.photoURL).then((avatar) => {
          formData.append("avatar", avatar, avatar.name);

          axios
            .post("https://api.chatengine.io/users/", formData, {
              headers: {
                "PRIVATE-KEY": import.meta.env.VITE_CHAT_ENGINE_KEY,
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigate]);

  if (!user || loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary">Loading</span>
      </div>
    );

  return (
    <div className="absolute w-full">
      <div className="h-full bg-secondary">
        <ChatEngine
          projectID={import.meta.env.VITE_CHAT_ENGINE_ID}
          userName={user.email}
          userSecret={user.uid}
        />
      </div>
    </div>
  );
};

export default Chat;
