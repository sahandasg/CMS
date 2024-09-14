import React from 'react';
import {Link} from "react-router-dom"

function SidebarItem(props) {
    return (
        <Link to={props.text === "Home" ? "/" : props.text.toLowerCase()}>
            <li
                className="ml-2 p-1 text-[.9rem] flex items-center text-gray-600 hover:bg-cyan-100 rounded hover:cursor-pointer">
                {props.icon}
                {props.text}
            </li>
        </Link>
    );
}

export default SidebarItem;