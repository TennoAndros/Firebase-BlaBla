import { UseAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = UseAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar max-h-[66px] bg-primary text-white">
      <div className="flex-1 ml-2">
        <img src="./chat.png" alt="chat" className="mr-1" />
        <div className=" text-3xl font-bold ">BlaBla</div>
      </div>
      {user && (
        <div className="flex-none mr-2">
          <button
            onClick={handleLogout}
            className="btn btn-ghost normal-case text-lg rounded-full hover:bg-secondary"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
