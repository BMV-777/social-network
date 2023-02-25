import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import state from 'Redux/state';
// let posts = [
//   { id: '1', message: 'Hi', likesCount: '7' },
//   { id: '2', message: 'Ok, and you', likesCount: '7' },
//   { id: '3', message: 'Kimi-himi', likesCount: '4' },
//   { id: '4', message: 'Yo', likesCount: '3' },
//   { id: '5', message: 'Bro77', likesCount: '2' },
// ];

// let dialogs = [
//   { id: '1', name: 'Maks' },
//   { id: '2', name: 'Sveta' },
//   { id: '3', name: 'Nataha' },
//   { id: '4', name: 'Oly' },
//   { id: '5', name: 'Vika' },
// ];
// let messages = [
//   { id: '1', message: 'Hi' },
//   { id: '2', message: 'How are you?' },
//   { id: '3', message: 'Yo' },
//   { id: '4', message: 'Yo' },
//   { id: '5', message: 'Bro' },
// ];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        posts={state.profilePage.posts}
        dialogs={state.dialogsPage.dialogs}
        messages={state.dialogsPage.messages}
        friends={state.sidebar.friends}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
