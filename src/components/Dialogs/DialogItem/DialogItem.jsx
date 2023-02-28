// import css from './../Dialogs.module.css';
import css from './DialogItem.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = props => {
  let path = `/dialogs/${props.id}`;
  
  //  let path = '/dialogs/' + props.id;
 
  // let path = '/dialogs' + props.id;

  return (
    <div className={css.dialogs + ' ' + css.active}>
      <NavLink to={path} className={css.dialogs}>
        <img src={props.url} className={css.image} alt="img" />

        <div>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;