import React from "react";
import "../header/header.css"
import { FaBitcoin } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai"
import { AiOutlineEuro } from "react-icons/ai"

function Header(){
    return(
        <div className="header">
            <h1 className="text"><FaBitcoin/> Bitcoin</h1>
            <h1 className="text"><AiOutlineDollar/>Dolar</h1>
            <h1 className="text"><AiOutlineEuro/> Euro</h1>
        </div>
    )
}

export default Header;