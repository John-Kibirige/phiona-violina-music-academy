import logo from '../../assets/logo.svg';
import SingleNavLink from './SingleNavLink';

const Navigation = () => {
  return (
    <header className="border flex items-center py-1 pl-8 pr-12">
      <img
        src={logo}
        alt="Logo"
        className="w-[70px] h-[70px] aspect-square rounded-md"
      />
      <nav className="flex border ml-auto w-4/6 items-center">
        <div className="grid grid-cols-6 w-4/5 text-center">
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
      </nav>
    </header>
  );
};

export default Navigation;
