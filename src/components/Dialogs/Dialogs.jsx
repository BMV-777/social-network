import css from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  
  let path = "/dialogs/" + props.id;

  return <div className={css.dialog + ' ' + css.active}>
          <NavLink to={path}>{props.name} </NavLink>
        </div>

}

const Message = (props) => {

  return <div className={css.message}>{props.message }</div>;

}

const Dialogs = (props) => {
  
let dialogsData = [
  { id: '1', name: 'Maks' },
  { id: '2', name: 'Sveta' },
  { id: '3', name: 'Nataha' },
  { id: '4', name: 'Oly' },
  { id: '5', name: 'Vika' },
];

let messageData = [
  { id: '1', massage: 'Hi' },
  { id: '2', massage: 'How are you?' },
  { id: '3', massage: 'Yo' },
  { id: '4', massage: 'Yo' },
  { id: '5', massage: 'Bro' },
];

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>
      <div className={css.messages}>
        <Message message={messageData[0].massage} />
        <Message message={messageData[1].massage} />
        <Message message={messageData[2].massage} />
      </div>
    </div>
  );
}


export default Dialogs;