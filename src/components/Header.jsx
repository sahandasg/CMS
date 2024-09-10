import React from 'react';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

function Header(props) {
    return (
        <div className="w-full flex items-center justify-between p-4 bg-gray-100 fixed z-999">
            <section>
                <p className="font-semibold 2xl:text-3xl sm:text-xl text-[1rem]">Sahand Asgharzade</p>
            </section>
            <section className="flex justify-between items-center gap-2">
                <div className="relative">
                    <LanguageOutlinedIcon fontSize="large" className="cursor-pointer"/>
                    <p className="absolute top-0 text-white bg-red-800 rounded-full w-4 h-4 flex items-center justify-center text-[12px] ">2</p>
                </div>
                <div className="relative">
                    <NotificationsNoneOutlinedIcon fontSize="large" className="cursor-pointer"/>
                    <p className="absolute top-0 text-white bg-red-800 rounded-full w-4 h-4 flex items-center justify-center text-[12px] ">4</p>
                </div>
                <SettingsOutlinedIcon fontSize="large" className="cursor-pointer"/>
                <img className="w-14 h-14 rounded-full ml-4" src="/images/sahand-asgharzadeh-picture.jpg"
                     alt="dashboard pic"/>
            </section>
        </div>
    );
}

export default Header;