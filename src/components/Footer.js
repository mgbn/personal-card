import React from "react";
import {FaTwitter, FaFacebook,FaInstagramSquare,FaGithubSquare} from 'react-icons/fa'

export default function (){
    return (
      <div className="footer">
        <a href="">
          <FaTwitter className="item" />
        </a>
        <a href="">
          <FaFacebook className="item" />
        </a>
        <a href="">
          <FaInstagramSquare className="item" />
        </a>
        <a href="">
          <FaGithubSquare className="item" />
        </a>
      </div>
    );
}