import user from '../assets/user.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>

            </div>
            <div className='space-x-5'>
                <Link to='/'>Home</Link>
                <Link to='/career'>Career</Link>
                <Link to='/about'>About</Link>
            </div>
            <div className='flex gap-2 items-center'>
              <img src={user} alt="" />
              <Link className='btn btn-neutral' to='/login'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;