import { useSelector } from 'react-redux';
import logo from '../../assets/logo.svg';
import SingleNavLink from './SingleNavLink';
import Menu from './Menu';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { menuOpen } = useSelector((state) => state.menu);

  return (
    <header className="flex items-center px-4 py-2 md:py-1 md:px-4 lg:pl-8 lg:pr-12 relative select-none gap-4">
      <div className="flex gap-2 items-center md:grow-[1]">
        <NavLink to={'/'}>
          <img
            src={logo}
            alt="Logo"
            className=" w-12 md:w-[6vw] max-w-16 aspect-square rounded-md"
          />
        </NavLink>
        <h3 className="flex flex-col text-secondary tracking-wide md:text-sm lg:text-base md:tracking-widest">
          <span className="block">PHIONA VIOLINA</span>{' '}
          <span className="block">MUSIC ACADEMY</span>
        </h3>
      </div>

      {/* nav for desktop */}
      <nav className=" hidden md:flex ml-auto w-4/6 items-center md:grow-[3] md:gap-3">
        <div className="grid grid-cols-6 w-4/5 text-center text-sm lg:text-base">
          <SingleNavLink href={'/'} name={'Home'} />
          <SingleNavLink href={'/about-us'} name={'About Us'} />
          <SingleNavLink href={'/programs'} name={'Programs'} />
          <SingleNavLink href={'/students'} name={'Students'} />
          <SingleNavLink href={'/gallery'} name={'Gallery'} />
          <SingleNavLink href={'/contact'} name={'Contact'} />
        </div>

        <button className="ml-auto border-2 border-primary text-primary font-semibold tracking-wide md:px-1 md:font-normal md:text-sm lg:text-base lg:px-2 py-2 hover:bg-primary hover:text-white rounded-md active:scale-95 transition-transform duration-150 ease-in-out">
          Register Online
        </button>
      </nav>

      <div className="md:hidden">
        <Menu displayMenu={menuOpen} />
      </div>
      {/* nav for mobile */}
      {menuOpen && (
        <nav
          className={`md:hidden absolute z-40 right-0 top-0 bg-white h-[70vh] w-2/3 text-center rounded grid place-items-center ${
            menuOpen ? 'animate-menu' : 'animate-menu-reverse'
          }`}
        >
          <div className="nav-contents flex flex-col gap-6 items-center">
            <div className="grid grid-rows-6 w-4/5 text-center gap-3">
              <SingleNavLink href={'/'} name={'Home'} />
              <SingleNavLink href={'/about-us'} name={'About Us'} />
              <SingleNavLink href={'/programs'} name={'Programs'} />
              <SingleNavLink href={'/students'} name={'Students'} />
              <SingleNavLink href={'/gallery'} name={'Gallery'} />
              <SingleNavLink href={'/contact'} name={'Contact'} />
            </div>

            <button className="ml-auto border-2 border-primary text-primary font-semibold tracking-wide px-2 py-2 hover:bg-primary hover:text-white rounded-md">
              Register Online
            </button>
          </div>
        </nav>
      )}

      {menuOpen && (
        <div className="absolute bg-primary w-screen h-screen left-0 right-0 top-0 z-30 opacity-40 "></div>
      )}
    </header>
  );
};

export default Navigation;
