// import React from 'react';
//  import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// import { addPost } from 'Redux/state';
import state from 'Redux/state';
import { renderEntireThree } from 'render';

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
renderEntireThree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
