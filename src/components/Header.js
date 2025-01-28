import { LOGO_URL } from '../utils/constants';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import userContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {


  const [btnNameReact, setBtnNameReact] = useState('Login');

  const {loggedInUser} = useContext(userContext);

  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-600 shadow-2xl">
      <div className="logo-container">
        <img src={LOGO_URL} alt="App Logo" className="w-24" />
      </div>
      <div className="flex items-center">
        <ul className='flex p-4 m-4'>
          <li className='px-4 font-bold'>Online Status: {onlineStatus ? "🟢" : "🔴"} </li>
          <li className='px-4 text-black font-bold'><Link to="/">Home</Link></li>
          <li className='px-4 font-bold'><Link to="/About">About Us</Link></li>
          <li className='px-4 font-bold'><Link to="/Contact">Contact Us</Link></li>
          <li className='px-4 font-bold '><Link to="/cart">Cart({cartItems.length} items)</Link></li>
          <li className='px-4 font-bold'><Link to="/grocery">Grocery</Link></li>
          <button
            className="px-4 font-bold"
            onClick={() => {
    
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login');
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className='px-4 font-bold'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
