import { Fragment } from "react";
import Header from "./Header";
import { ToastContainer } from "react-toastify";

const Layout = (props) => {
  return (
    <Fragment>
      <ToastContainer />
      <Header />
      {props.children}
    </Fragment>
  );
};

export default Layout;
