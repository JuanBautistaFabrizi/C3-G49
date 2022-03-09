import React from "react";
import FirstFooter from "../footer/firstFooter/FirstFooter";
import SecondFooter from "./secondFooter/SecondFooter";
import ThirdFooter from "./thirdFooter/ThirdFooter";

import './firstFooter/firstFooter.css'
import './secondFooter/secondFooter.css'
import './thirdFooter/thirdFooter.css'
import './footer.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Footer(){
    return(
        <section className="footer">
            <FirstFooter />
            <hr></hr>
            <SecondFooter />
            <hr></hr>
            <ThirdFooter />
        </section>
    )
}