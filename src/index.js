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
// import { Provider } from 'react-redux';
import store from 'Redux/redux-store';

// import {
//   updatePostText,
//   addPost,
//   addPostDialog,
//   updateMessageText,
//   subscribe,
// } from './Redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Provider>
//       <App store={store} dispatch={store.dispatch.bind(store)} state={state} />
//     </Provider>
//   </BrowserRouter>
// );

let renderEntireThree = () => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          // store={store}
          // dispatch={store.dispatch.bind(store)}
          // state={state}
          posts={store.getState().profilePage.posts}
          dialogs={store.getState().dialogsPage.dialogs}
          messages={store.getState().dialogsPage.messages}
          friends={store.getState().sidebar.friends}
          newPostText={store.getState().profilePage.newPostText}
          newMessageText={store.getState().dialogsPage.newMessageText}
          dispatch={store.dispatch.bind(store)}
          //  updatePostText={updatePostText}
          //  addPost={addPost}
          // addPostDialog={store.addPostDialog}
          // updateMessageText={store.updateMessageText}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

renderEntireThree();
store.subscribe(() => {
  let state = store.getState();
  renderEntireThree(state);
});
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

//  posts={state.profilePage.posts}
//           dialogs={state.dialogsPage.dialogs}
//           messages={state.dialogsPage.messages}
//           friends={state.sidebar.friends}
//           newPostText={state.profilePage.newPostText}
//           newMessageText={state.dialogsPage.newMessageText}
//           dispatch={store.dispatch.bind(store)}
//            updatePostText={updatePostText}
//            addPost={addPost}
//            addPostDialog={addPostDialog}
//            updateMessageText={updateMessageText}
