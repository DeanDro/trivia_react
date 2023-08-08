import React from "react";
import retrieveImg from "../assets/manageAssets";


function Footer(){
    let img = retrieveImg();
    return (
        <footer className="footing">
            {img}
            <caption className="small_caption">
                <a href="https://www.flaticon.com/free-icons/books" title="books icons">Books icons created by popo2021 - Flaticon</a>
            </caption>
        </footer>
    )
}

export default Footer;