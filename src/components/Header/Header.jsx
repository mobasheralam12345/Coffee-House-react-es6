
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='flex justify-between items-center max-w-7xl mx-auto py-2 border-b-2'>
             <h1 className='text-3xl font-bold'>Cafe Bil Horina</h1>
             <img src={profile} alt="" />
        </header>
    );
};

export default Header;