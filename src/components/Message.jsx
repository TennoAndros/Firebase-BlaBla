import PropTypes from "prop-types";
import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();

  return (
    <div>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} alt="user" />
          </div>
        </div>
        <div className="chat-header">
          {message.user}
          <time className="text-xs opacity-50 ml-1">12:45</time>
        </div>
        <div className="chat-bubble  chat-bubble-accent">{message.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.object,
};

export default Message;
