import React from 'react'
import './Sidebar.scss'
import LogOutIcon from '@mui/icons-material/Logout'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ForumIcon from '@mui/icons-material/Forum';
import UsersIcon from '@mui/icons-material/PeopleAltRounded';
import LecturersIcon from '@mui/icons-material/School';
import AdminPeofileIcon from '@mui/icons-material/ManageAccounts'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
         <span className='logo'>Study Buddy</span>
      </div>
      <hr />
      <div className="list">
         <ul>
            <p className='title'>Navigation</p>
            <li>
               <DashboardIcon className='icon'/>
               <span>Dashboard</span>
            </li>
            <li>
               <ForumIcon className='icon'/>
               <span>Forum</span>
            </li>
            <li>
               <UsersIcon className='icon'/> 
               <span>User Details</span>
            </li>
            <li>
               <LecturersIcon className='icon'/>
               <span>Lecturers</span></li>
            <li>
               <AdminPeofileIcon className='icon'/>
               <span>Admin Profile</span>
            </li>
            <hr />
            <p className='title'>Settings</p>
            <li>
               <LogOutIcon className='icon'/>
               <span>Log Out</span>
            </li>
         </ul>
      </div>
      <div className="bottom">
         <div className="colorOption"></div>
         <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar