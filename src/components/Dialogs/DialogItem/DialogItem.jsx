//  import css from './../Dialogs.module.css';
// import styled from 'styled-components';
// import styled from '@emotion/styled';
import css from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

const DialogItem = props => {
  let path = `/dialogs/${props.id}`;
  
  //  let path = '/dialogs/' + props.id;
 
  // let path = '/dialogs' + props.id;

  return (
    <div className={css.dialogs + ' ' + css.active}>
      <NavLink to={path} className={css.dialogs}>
        {/* <img src={props.url} className={css.image} alt="img" /> */}

        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;