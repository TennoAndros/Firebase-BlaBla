import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar fixed z-10 bg-primary text-white">
      <div className="containerWrap">
        <div className="navbar w-full">
          <img src="../../public/chat.png" alt="chat" className="mr-1" />
          <a
            href="http://localhost:5173/"
            className="normal-case text-xl font-bold"
          >
            BlaBla
          </a>
        </div>
        {currentUser && (
          <div className="navbar w-auto">
            <button
              onClick={handleLogout}
              className="btn btn-ghost normal-case text-lg rounded-full hover:bg-secondary"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
