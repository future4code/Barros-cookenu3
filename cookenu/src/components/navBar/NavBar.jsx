import './navBar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import {Link} from 'react-router-dom'
import { useContext } from 'react';
import { DarkModelContext } from '../../context/darkModelContext';
import { AuthContext } from '../../context/authContext';


const NavBar = () => {

    const {toggle,darkMode} = useContext(DarkModelContext)
    const {currentUser} = useContext(AuthContext)


  return (
    <div className='navBar'>
        <div className='left'>
            <Link to='/' style={{textDecoration:'none'}}>
                <span>Social Cooking</span>
                
            </Link>
            <HomeOutlinedIcon/>
            {darkMode ? (
                <WbSunnyOutlinedIcon onClick={toggle}/>
              ) : (
                <DarkModeOutlinedIcon onClick={toggle}/>
                )}
            <GridViewOutlinedIcon/>
            <div className='search'>
                <SearchOutlinedIcon/>
                <input type='text' placeholder='Search'/>
            </div>
        </div>
        <div className='right'>
            <Person2OutlinedIcon/>
            <EmailOutlinedIcon/>
            <NotificationsOutlinedIcon/>
            <div className='user'>
                <img src={currentUser.profilePic} alt=''/>
                <span>{currentUser.name}</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar