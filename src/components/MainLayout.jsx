/* Note 
1. ttg logo 
2. error di bagian 
*/
import React from 'react';
import './MainLayout.css'
import moment from  'moment';
import { RiFileExcel2Fill } from "react-icons/ri";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

const Layout = ({ children }) => {

  const formattedDate = moment().format("MMM Do YYYY, h:mm:ss a");

  return (
    <div>
      <header className="navbar"> 
        <p className="text_data">DATA COLLECTION</p>

        <div className="navbar_right_content">
          <p className="text_date">{formattedDate}</p>
          <img src="/src/assets/img/img_profilePicture.png" alt="Logo" className="img_rightContent"/> 
          {/* CATATAN NANTI GANTI PP */}
        </div>

      </header>

      {/* SIDEBAR START */}
      <div className="container_main">
        <div className="sidebar">

          <div className="container_role">
            <div className="container_role_top">
              <div className="icon_dot"></div>
              <p>Role</p>
            </div>

            <div className="container_role_bottom">
              <h4>Admin</h4>
              <p>Staff Semarang</p>
              <p> University</p>
            </div>
          </div>

          <div className="container_tabs">
            <div className="container_tabItem">
              {/* <img src="/src/assets/img/img_profilePicture.png" alt="" /> */}
              <RiFileExcel2Fill className='tabs_logo' />
              <p>Dashboard</p>
            </div>
            <div className="container_tabItem">
              {/* <img src="/src/assets/img/img_profilePicture.png" alt="" /> */}
              <TbLayoutDashboardFilled className='tabs_logo'/>
              <p>Upload Excel File</p>
            </div>
            <div className="container_tabItem">
              {/* <img src="/src/assets/img/img_profilePicture.png" alt="" /> */}
              <MdFormatListBulletedAdd className='tabs_logo'/>
              <p>Add Staff Data</p>
            </div>
            <div className="container_tabItem">
              {/* <img src="/src/assets/img/img_profilePicture.png" alt="" /> */}
              <MdManageAccounts className='tabs_logo'/>
              <p>Manage Staff Data</p>
            </div>
          </div>
        </div>
        <main style={{ padding: '1rem' }}>
          {/* Untuk halaman kosongnya */}
          {children}
        </main>
      </div>
      {/* SIDEBAR END */}

    </div>
  );
};

export default Layout;
