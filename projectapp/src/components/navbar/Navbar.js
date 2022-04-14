import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import DataContext from "../../dataStore/dataStore";
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import {
    FiHome,
    FiLogOut,
    FiArrowLeftCircle,
    FiArrowRightCircle
} from "react-icons/fi";
import { 
    FaList, 
    FaRegHeart,
    FaJava,
    FaReact,
    FaExclamationTriangle,
    FaTable 
} from "react-icons/fa";
import { RiPencilLine, RiAdminLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import { IoLogoJavascript } from 'react-icons/io';
import { SiPostgresql } from 'react-icons/si';
import { MdWebAsset } from 'react-icons/md';
import Logo from "./Logo";
import Survey from "../Survey/Survey";
// import Logo from "../img-components/Logo";

const Navbar = ({setShowLogin}) => {

    //NAV COLLAPSING STATE
    const [menuCollapse, setMenuCollaspe] = useState(false);

    //CALLING IN DATASTORE -> USED FOR NAV BAR CONDITION STATEMENT
    const { user, setUser } = useContext(DataContext);

    function logout() {
        setUser(null);
        localStorage.removeItem("user");
        setShowLogin(true);
    }

    //NAV STRUCTURE SECTIONS
    const menuIconClick = () => {
        menuCollapse ? setMenuCollaspe(false) : setMenuCollaspe(true);
    }

    return (
        <>
            <div id="header">
                <ProSidebar collapsed={menuCollapse}>

                    {/*CONTAINS HEADER & RESPONSIVE LOGO*/}
                    <SidebarHeader>
                        <div className="logotext">
                            <p>{menuCollapse ? <Logo/> : <Logo/>}</p>
                        </div>
                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? <FiArrowRightCircle /> :
                                <FiArrowLeftCircle />}
                        </div>

                        {/*CHANGE MENU ICON SHAPE*/}

                        <Menu >
                            <MenuItem active={true} icon={<FiHome />}>
                                <Link to="/">Home</Link>
                            </MenuItem>


                            {/* conditionally show the admin portal */}
                            {user && user.account === 'admin' ?

                                <MenuItem icon={<RiAdminLine />}>
                                 <Link to="/admin">Admin Portal</Link>
                            </MenuItem>

                            : ""}

                        </Menu>


                    </SidebarHeader>

                    {/*CONTAIN MAIN NAV CONTENT*/}
                    <SidebarContent>
                        <Menu iconShape="square">

                            <MenuItem icon={<RiPencilLine/>}>
                                <a href="#">Content</a>
                            </MenuItem>



                        </Menu>
                    </SidebarContent>

                    <SidebarContent>
                        <Menu iconShape="square">
                            <MenuItem active={true} icon={<FiHome />}>
                                <Link to="/beginner">Beginner</Link>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <Link to="/intermidate">Intermidate</Link>
                            </MenuItem>


                            <MenuItem icon={<RiPencilLine/>}>
                                <Link to="/advanced">Advanced</Link>
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <Link to="/java">Java</Link>

                                {/*<Link to={`/userprofile/${retrieveInfo?.username}`}>*/}


{/*                            <MenuItem active={true} icon={<FaJava />}>*/}
{/*                                <a href="#">Java</a>*/}
{/*                            </MenuItem>*/}
{/*                            <MenuItem icon={<FaReact/>}>*/}
{/*                                <a href="#">React</a>*/}
{/*                            </MenuItem>*/}
{/*                            <MenuItem icon={<FaTable/>}>*/}
{/*                                <a href="#">SQL</a>*/}
{/*                            </MenuItem>*/}
{/*                            <MenuItem icon={<IoLogoJavascript/>}>*/}
{/*                                <a href="#">JavaScript</a>*/}
{/*                            </MenuItem>*/}
{/*                            <MenuItem icon={<MdWebAsset/>}>*/}
{/*                            <a href="#">HTML</a>*/}
                            </MenuItem>
                            <MenuItem icon={<RiPencilLine/>}>
                                <Link to="/react">React</Link>
                            </MenuItem>
                        </Menu>
                    </SidebarContent>

                    {/*FOOTER SECTION*/}
                    <SidebarFooter>
                        <Menu iconShape="square">

                          <MenuItem icon={<BiCog/>}>
                                <Link to="/editAccount">Account</Link>
                            </MenuItem>
                          
                            <MenuItem icon={<FaExclamationTriangle/>}>
                                <a href="#">Report</a>
                            </MenuItem>
                            <MenuItem icon={<FiLogOut/>}>
                                <Link to="/" onClick={() => logout()}>Logout</Link>
                            </MenuItem>
                        </Menu>
                    </SidebarFooter>
                </ProSidebar>
            </div>
        </>
    );
};

export default Navbar;