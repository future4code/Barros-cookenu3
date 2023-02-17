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


const NavBar = () => {
  return (
    <div className='navBar'>
        <div className='left'>
            <Link to='/' style={{textDecoration:'none'}}>
                <span>Social Cooking</span>
                
            </Link>
            <HomeOutlinedIcon/>
            <DarkModeOutlinedIcon/>
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
                <img src='' alt=''/>
                <span>Juliano Manzano</span>
            </div>
        </div>
    </div>
  )
}

export default NavBar