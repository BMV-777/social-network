// import React from 'react';
//  import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import { addPost } from 'Redux/state';
// import state from 'Redux/state';
// import { renderEntireThree } from 'render';

//  export let renderEntireThree =() => {
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App
//         posts={state.profilePage.posts}
//         dialogs={state.dialogsPage.dialogs}
//         messages={state.dialogsPage.messages}
//         friends={state.sidebar.friends}
//         addPost={addPost}
//       />
//     </BrowserRouter>
//   </React.StrictMode>
// );

// }
// renderEntireThree(state);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import state from 'Redux/state';
import store from 'Redux/state';
// import {
//   updatePostText,
//   addPost,
//   addPostDialog,
//   updateMessageText,
//   subscribe,
// } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderEntireThree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          posts={state.profilePage.posts}
          dialogs={state.dialogsPage.dialogs}
          messages={state.dialogsPage.messages}
          friends={state.sidebar.friends}
          newPostText={state.profilePage.newPostText}
          newMessageText={state.dialogsPage.newMessageText}
          dispatch={store.dispatch.bind(store)}
          // updatePostText={updatePostText}
          // addPost={addPost}
          // addPostDialog={addPostDialog}
          // updateMessageText={updateMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderEntireThree(store.getState());
store.subscribe(renderEntireThree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//        posts={store._state.profilePage.posts}
//            dialogs={store._state.dialogsPage.dialogs}
//            messages={store._state.dialogsPage.messages}
//            friends={store._state.sidebar.friends}
//            newPostText={store._state.profilePage.newPostText}
//            newMessageText={store._state.dialogsPage.newMessageText}
//           updatePostText={store.updatePostText.bind(store)}
//           addPost={store.addPost.bind(store)}
//           addPostDialog={store.addPostDialog.bind(store)}
//           updateMessageText={store.updateMessageText.bind(store)}
//         />
//       </BrowserRouter>
//     </React.StrictMode>
//   );
// };

//  renderEntireThree(store.getState());
//  store.subscribe(renderEntireThree);
