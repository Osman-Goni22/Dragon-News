
import moment from 'moment/moment';
import logo from '../../assets/logo.png';
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-6'>
            <div className='w-[300px]'>
                <img src={logo} alt="" />
            </div>
            <p className='text-gray-400'>Journalism Without Fear or Favour</p>

            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;
