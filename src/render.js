import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//  import state from 'Redux/state';
import { addPost, updatePostText } from 'Redux/state';
import { addPostDialog } from 'Redux/state';

export let renderEntireThree = state => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          posts={state.profilePage.posts}
          dialogs={state.dialogsPage.dialogs}
          messages={state.dialogsPage.messages}
          friends={state.sidebar.friends}
          newPostText={state.profilePage.newPostText}
          updatePostText={updatePostText}
          addPost={addPost}
          addPostDialog={addPostDialog}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
