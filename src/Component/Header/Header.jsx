import profile from '../../assets/profile.png'
import './Header.css';

const Header = () => {
    return (
        <div className="flex justify-between items-center py-3 mb-5 border-b-2 border-[#eee">
            <div className="logo">
                <a href="index.html" className='text-base md:text-3xl font-semibold'>Knowledged Cafe</a>
            </div>
            <div className="userImage">
                <img src={profile} alt="userImage" className='w-10 lg:w-full' />
            </div>
        </div>
    );
};

export default Header;