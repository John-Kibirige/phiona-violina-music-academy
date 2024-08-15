import { NavLink } from 'react-router-dom';

const SingleNavLink = ({ href, name }) => {
  const generalStyles =
    'relative py-1 rounded tracking-wide transition-colors duration-100 ease-in';

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${generalStyles} text-primary font-semibold under-line`
          : `${generalStyles} text-light-primary hover:bg-light-pink`
      }
      to={href}
    >
      {name}
    </NavLink>
  );
};

export default SingleNavLink;
