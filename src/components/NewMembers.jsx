import React from 'react';
import {useState} from "react";

import VisibilityIcon from '@mui/icons-material/Visibility';

function NewMembers(props) {
    const [newMember, setNewMember] = useState([
    {name: "Sahand asg", expert: "Front Developer"},
    {name: "Milad Abdolahi", expert: "Back-End Developer"},
    {name: "Amir Hossein Khzayi", expert: "IT Bachelor"},
    {name: "Ali Behmaram", expert: "React Developer"},
    {name: "Hadi Shahbazi", expert: "Django Developer"},
])

    function displayHandler(member) {
    setNewMember(newMember.filter(item => (item.name !== member.name)))
}
    return (
        <div className="w-[40%] h-fit border-2 rounded m-4 p-6">
            <h4 className="text-3xl font-semibold">New Join Members</h4>
            {
                newMember.map((member) => (
                    <div key={Math.random()} className="flex items-center gap-10 my-8 mx-4 justify-between">
                        <img className="w-[50px] h-[50px] rounded-full" src="/images/sahand-asgharzadeh-picture.jpg"
                             alt="member pic"/>
                        <div className="flex flex-col w-full justify-start">
                            <h5 className="font-bold text-xl">{member.name}</h5>
                            <p className="text-gray-400">{member.expert}</p>
                        </div>
                        <button onClick={() => displayHandler(member)}
                                className="flex bg-sky-400 p-1 rounded justify-between gap-2">
                            <VisibilityIcon/>
                            <p>Display</p>
                        </button>
                    </div>
                ))
            }
        </div>
    );
}

export default NewMembers;