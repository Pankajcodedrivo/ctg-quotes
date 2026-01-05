import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const AuthLayout = () => {
  const location = useLocation();
  const { isLoggedIn, user, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const role = user?.role;

  const roleBasedRedirects: Record<string, string> = {
    user: "/my-quotes",
  };

  // ⏳ Wait until auth state is resolved
  if (loading) {
    return null; // or <Loader />
  }

  if (isLoggedIn) {
    if (role && roleBasedRedirects[role]) {
      if (location.pathname === "/") {
        return <Navigate to={roleBasedRedirects[role]} replace />;
      }
      return <Outlet />;
    }
    return <Navigate to="/not-authorized" replace />;
  }

  return (
    <Navigate
      to="/login"
      replace
      state={{ from: location }}
    />
  );
};

export default AuthLayout;
