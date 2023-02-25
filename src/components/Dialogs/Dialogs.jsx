import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";





const Dialogs = (props) => {
  
  // let dialogs = [
  //   { id: '1', name: 'Maks' },
  //   { id: '2', name: 'Sveta' },
  //   { id: '3', name: 'Nataha' },
  //   { id: '4', name: 'Oly' },
  //   { id: '5', name: 'Vika' },
  // ];

  // let messages = [
  //   { id: '1', massage: 'Hi' },
  //   { id: '2', massage: 'How are you?' },
  //   { id: '3', massage: 'Yo' },
  //   { id: '4', massage: 'Yo' },
  //   { id: '5', massage: 'Bro' },
  // ];

  let dialogElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} />)
  let messageElement = props.messages.map(m => <Message message={m.message} key={m.id} />)

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>
       {dialogElement}
      </div>
      <div className={css.messages}>
       {messageElement}
      </div>
    </div>
  );
}


export default Dialogs;