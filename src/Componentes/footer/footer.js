import React from "react";
import "./footer.css"
import { FaGithub } from "react-icons/fa"

function Footer(){
    return(
        <div className="footer">
            <a className="text_footer" href="https://github.com/rafael-alves-nascimento"><h1 ><FaGithub/> Rafael Alves</h1></a>
            <a className="text_footer" href="https://github.com/viniciuszile"><h1 ><FaGithub/> vinicius Zile</h1></a>
            <a className="text_footer" href="https://github.com/wesleww"><h1 ><FaGithub/> Wesley Santos</h1></a>
        </div>
    )
}

export default Footer;