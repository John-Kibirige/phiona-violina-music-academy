import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { closeMenu } from '../../redux/menu';

const SingleNavLink = ({ href, name }) => {
  const dispatch = useDispatch();
  const generalStyles =
    'relative py-1 rounded tracking-wide transition-colors duration-100 ease-in';

  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? `${generalStyles} text-primary font-semibold under-line`
          : `${generalStyles} text-secondary hover:bg-light-pink`
      }
      to={href}
      onClick={() => {
        dispatch(closeMenu());
      }}
    >
      {name}
    </NavLink>
  );
};

export default SingleNavLink;
