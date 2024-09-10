import React from 'react';
import SidebarItem from "./SidebarItem";

//Icons
import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EmailIcon from '@mui/icons-material/Email';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ChatIcon from '@mui/icons-material/Chat';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

function Sidebar(props) {
    const dashboardItems = [
        {text:"Home", icon:<HomeIcon fontSize="small"/> },
        {text:"Analytics", icon:<BarChartIcon fontSize="small"/> },
        {text:"Sales", icon:<AttachMoneyIcon fontSize="small"/> },
    ]
    const quickItems = [
        {text:"Users", icon:<PeopleAltIcon fontSize="small"/> },
        {text:"User", icon:<PersonAddIcon fontSize="small"/> },
        {text:"Products", icon:<StorefrontIcon fontSize="small"/> },
        {text:"Transactions", icon:<AttachMoneyIcon fontSize="small"/> },
        {text:"Reports", icon:<BarChartIcon fontSize="small"/> },
    ]
    const notificationItems = [
        {text:"Mail", icon:<EmailIcon fontSize="small"/> },
        {text:"Feedback", icon:<FeedbackIcon fontSize="small"/> },
        {text:"Messages", icon:<ChatIcon fontSize="small"/> },
    ]
    const staffItems = [
        {text:"Manage", icon:<ManageAccountsIcon fontSize="small"/> },
        {text:"Analytics", icon:<BarChartIcon fontSize="small"/> },

    ]
    return (
        <div className="fixed top-[calc(100vh-(100vh-80px))] w-full h-full bg-gray-100 p-6 pl-8">
            <ul>
                <p className="mt-2 mb-2 font-semibold">Dashboard</p>
                {
                    dashboardItems.map(item=>(
                        <SidebarItem {...item}/>
                    ))
                }
                <p className="mt-2 mb-2 font-semibold">Quick Menu</p>
                {
                    quickItems.map(item=>(
                        <SidebarItem {...item}/>
                    ))
                }
                <p className="mt-2 mb-2 font-semibold">Notifications</p>
               {
                    notificationItems.map(item=>(
                        <SidebarItem {...item}/>
                    ))
                }
                <p className="mt-2 mb-2 font-semibold">staff</p>
                {
                    staffItems.map(item=>(
                        <SidebarItem {...item}/>
                    ))
                }
            </ul>
        </div>
    );
}

export default Sidebar;