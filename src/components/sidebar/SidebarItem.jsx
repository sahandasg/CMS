import React from 'react';

function SidebarItem(props) {
    return (
        <li
            className="ml-2 p-1 text-[.9rem] flex items-center text-gray-600 hover:bg-cyan-100 rounded hover:cursor-pointer">
            {props.icon}
            {props.text}
        </li>
    );
}

export default SidebarItem;