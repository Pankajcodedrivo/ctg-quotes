import { Link, useLocation } from "react-router-dom";

const SubFooter = () => {
  const { pathname } = useLocation();
  const isLogin = pathname === "/login";

  return (
    <div className="sub-footer text-center">
      {isLogin ? (
        <p>
          Don’t have an account?{" "}
          <Link to="/step-1">SignUp</Link>
        </p>
      ) : (
        <p>
          Already have an account?{" "}
          <Link to="/login">LogIn</Link>
        </p>
      )}

      <p className="copiright">
        © 2026 <span>CTG Quotes.</span> All rights reserved.{" "}
        <Link to="/">Privacy Policy</Link> |{" "}
        <Link to="/">Terms & Conditions</Link>
      </p>
    </div>
  );
};

export default SubFooter;
