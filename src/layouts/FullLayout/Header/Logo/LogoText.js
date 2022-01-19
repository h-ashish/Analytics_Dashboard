import React from 'react';
import logotxt from "../../../../assets/images/users/resolutelogo.jpg";
const LogoText = (props) => {
    return ( 
        <img
            height="45px"
            width="200px"
            alt="Logo"
            src={logotxt}
            {...props}
        />
    );
}
 
export default LogoText;