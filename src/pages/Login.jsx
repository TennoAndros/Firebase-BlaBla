import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { currentUser, signinWithGoogle, signinWithFacebook } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      await signinWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  const handleFacebookLogin = async () => {
    try {
      await signinWithFacebook();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/chat");
    }
  }, [currentUser]);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1633354998322-415842c7ee11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80)",
      }}
    >
      <div className="hero-overlay" />
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there👋🏻</h1>
          <p className="mb-5">
            Join the conversation, meet new people, and make connections in one
            shared room.
          </p>
          <div className="flex space-x-2 items-center justify-center">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-primary flex items-center space-x-2 text-neutral"
            >
              <FcGoogle className="text-2xl" />
              <span>Login With Google</span>
            </button>
          </div>
          <br />
          <div className="flex space-x-2 items-center justify-center ">
            <button
              onClick={handleFacebookLogin}
              className="btn btn-primary flex items-center space-x-2 text-neutral"
            >
              <BsFacebook className="text-2xl  fill-blue-500" />
              <span>Login With Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
