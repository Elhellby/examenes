import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header/>
            {props.children}
            {/* <Footer/>             */}
        </React.Fragment>
    );
}
export default Layout;
