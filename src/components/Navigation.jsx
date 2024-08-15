import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="">
        <li className="">
          <NavLink to={'/'}>Home</NavLink>
        </li>
        <li className="">
          <NavLink to={'/about-us'}>About Us</NavLink>
        </li>
        <li className="">
          <NavLink to={'/programs'}>Programs</NavLink>
        </li>
        <li className="">
          <NavLink to={'/students'}>Students</NavLink>
        </li>
        <li className="">
          <NavLink to={'/gallery'}>Gallery</NavLink>
        </li>
        <li className="">
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
