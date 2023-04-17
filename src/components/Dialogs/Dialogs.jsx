import css from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { updateNewMessageCreate, addMessageCreate } from 'Redux/state';





const Dialogs = (props) => {

  let dialogElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} url={d.url} />)
  let messageElement = props.messages.map(m => (<Message message={m.message} key={m.id} />));
  let newMessageBody = props.newMessageText;
  console.log(newMessageBody)
      // addPostDialog={props.addPostDialog}
      // newMessageText={props.newMessageText}
      // updateMessageText={props.updateMessageText}
  //   />
  // ));
  
  
  
  let onSendMessageClick = () => {
    props.store.dispatch(addMessageCreate());
  }
  
  let onMessageChange = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageCreate(body));
  
  }

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogElement}</div>
      <div className={css.messages}>
        <div>{messageElement}</div>
        <div>
          <div><textarea value={newMessageBody} onChange={onMessageChange} placeholder="Enter your message" ></textarea></div>
          <div><button type="button" onClick={onSendMessageClick}>Send</button></div>
        </div>
      </div>
    </div>
  );
}


export default Dialogs;