import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { UseAuth } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { user } = UseAuth();

  if (!user) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
