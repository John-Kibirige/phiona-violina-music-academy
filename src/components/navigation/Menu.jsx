import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/menu';

const Menu = ({ displayMenu }) => {
  const dispatch = useDispatch();
  const handleHamburgerMenuClicked = () => {
    dispatch(toggleMenu());
  };
  return (
    <button
      className="flex flex-col gap-2 cursor-pointer absolute right-4 top-[32%]  z-50"
      onClick={handleHamburgerMenuClicked}
    >
      <span
        className={`w-8 h-[2px] bg-secondary-dark block rounded ${
          displayMenu ? ' animate-menu-span-1' : 'animate-menu-span-1-reverse'
        }`}
      ></span>
      <span
        className={`w-8 h-[2px] bg-secondary-dark block rounded ${
          displayMenu ? ' animate-menu-span-2' : 'animate-menu-span-2-reverse'
        }`}
      ></span>
      <span
        className={`w-8 h-[2px] bg-secondary-dark block rounded ${
          displayMenu ? ' animate-menu-span-3' : 'animate-menu-span-3-reverse'
        }`}
      ></span>
    </button>
  );
};

export default Menu;
