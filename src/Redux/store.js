// export const post = () => {
//    let renderEntireThree = () => {
//      console.log('gringo');
//    };

//   let state = {
//     profilePage: {
//       posts: [
//         { id: '1', message: 'Hi, how are you', likesCount: '7' },
//         { id: '2', message: 'Ok, and you', likesCount: '7' },
//         { id: '3', message: 'Kimi-himi', likesCount: '4' },
//         { id: '4', message: 'Yo', likesCount: '3' },
//         { id: '5', message: 'Bro', likesCount: '2' },
//       ],
//       newPostText: 'Ты программист!!!',
//     },
//     dialogsPage: {
//       dialogs: [
//         {
//           id: '1',
//           name: 'Maks',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//         {
//           id: '2',
//           name: 'Sveta',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//         {
//           id: '3',
//           name: 'Nataha',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//         {
//           id: '4',
//           name: 'Oly',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//         {
//           id: '5',
//           name: 'Vika',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//       ],
//       messages: [
//         { id: '1', message: 'Hi' },
//         { id: '2', message: 'How are you?' },
//         { id: '3', message: 'Yo' },
//         { id: '4', message: 'Yo' },
//         { id: '5', message: 'B88' },
//       ],
//       newMessageText: '',
//     },
//     sidebar: {
//       friends: [
//         [
//           {
//             id: '1',
//             name: 'Maks',
//             isOnline: 'true',
//             url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//           },
//           {
//             id: '2',
//             name: 'Sveta',
//             isOnline: 'true',
//             url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//           },
//           {
//             id: '3',
//             name: 'Nataha',
//             isOnline: 'true',
//             url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//           },
//           {
//             id: '4',
//             name: 'Oly',
//             isOnline: 'true',
//             url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//           },
//           {
//             id: '5',
//             name: 'Vika',
//             isOnline: 'true',
//             url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//           },
//         ],
//       ],
//     },
//   };
//   window.state = state;

//    const addPostDialog = () => {
//     let newMessage = {
//       id: 1,
//       message: state.dialogsPage.newMessageText,
//     };

//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessageText = '';
//     renderEntireThree(state);
//   };

//    const updateMessageText = newText => {
//     state.dialogsPage.newMessageText = newText;
//     renderEntireThree(state);
//   };

//     const addPost = () => {
//     let newPost = {
//       id: 5,
//       message: state.profilePage.newPostText,
//       likesCount: 0,
//     };

//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     renderEntireThree(state);
//   };

//    const updatePostText = newText => {
//     state.profilePage.newPostText = newText;
//     renderEntireThree(state);
//   };

//    const subscribe = observer => {
//     renderEntireThree = observer;
//   };

// }
// export default post;

//----------------раздиление---------///

// let renderEntireThree = () => {
//   console.log('gringo');
// };

//  let state = {
//   profilePage: {
//      posts: [
//       { id: '1', message: 'Hi, how are you', likesCount: '7' },
//       { id: '2', message: 'Ok, and you', likesCount: '7' },
//       { id: '3', message: 'Kimi-himi', likesCount: '4' },
//       { id: '4', message: 'Yo', likesCount: '3' },
//       { id: '5', message: 'Bro', likesCount: '2' },
//     ],
//     newPostText: 'Ты программист!!!',
//   },
//   dialogsPage: {
//     dialogs: [
//       {
//         id: '1',
//         name: 'Maks',
//         url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//       },
//       {
//         id: '2',
//         name: 'Sveta',
//         url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//       },
//       {
//         id: '3',
//         name: 'Nataha',
//         url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//       },
//       {
//         id: '4',
//         name: 'Oly',
//         url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//       },
//       {
//         id: '5',
//         name: 'Vika',
//         url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//       },
//     ],
//     messages: [
//       { id: '1', message: 'Hi' },
//       { id: '2', message: 'How are you?' },
//       { id: '3', message: 'Yo' },
//       { id: '4', message: 'Yo' },
//       { id: '5', message: 'B88' },
//     ],
//     newMessageText: '',
//   },
//   sidebar: {
//     friends: [
//       [
//         {
//           id: '1',
//           name: 'Maks',
//           isOnline: 'true',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//         {
//           id: '2',
//           name: 'Sveta',
//           isOnline: 'true',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//         {
//           id: '3',
//           name: 'Nataha',
//           isOnline: 'true',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//         {
//           id: '4',
//           name: 'Oly',
//           isOnline: 'true',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//         {
//           id: '5',
//           name: 'Vika',
//           isOnline: 'true',
//           url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
//         },
//       ],
//     ],
//   },
//  };

// window.state = state;

// export const addPostDialog = () => {
//   let newMessage = {
//     id: 1,
//     message: state.dialogsPage.newMessageText,
//   };

//   state.dialogsPage.messages.push(newMessage);
//   state.dialogsPage.newMessageText = '';
//   renderEntireThree(state);
// };

// export const updateMessageText = newText => {
//   state.dialogsPage.newMessageText = newText;
//   renderEntireThree(state);
// };

// export const addPost = () => {
//   let newPost = {
//     id: 5,
//     message: state.profilePage.newPostText,
//     likesCount: 0,
//   };

//   state.profilePage.posts.push(newPost);
//   state.profilePage.newPostText = '';
//   renderEntireThree(state);
// };

// export const updatePostText = newText => {
//   state.profilePage.newPostText = newText;
//   renderEntireThree(state);
// };

// export const subscribe = observer => {
//   renderEntireThree = observer;
// };

//----------------Store--------------//

import sidebarReducer from './sidebar-reducer';
import profileReducers from './profile-reducer';
import dialogsReducer from './dialogs-reducer';

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: '1', message: 'Hi, how are you', likesCount: '7' },
        { id: '2', message: 'Ok, and you', likesCount: '7' },
        { id: '3', message: 'Kimi-himi', likesCount: '4' },
        { id: '4', message: 'Yo', likesCount: '3' },
        { id: '5', message: 'Bro', likesCount: '2' },
      ],
      newPostText: 'Ты программист!!!',
    },
    dialogsPage: {
      dialogs: [
        {
          id: '1',
          name: 'Maks',
        },
        {
          id: '2',
          name: 'Sveta',
          // url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
        },
        {
          id: '3',
          name: 'Nataha',
          url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
        },
        {
          id: '4',
          name: 'Oly',
          // url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
        },
        {
          id: '5',
          name: 'Vika',
          // url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
        },
      ],
      messages: [
        { id: '1', message: 'Hi' },
        { id: '2', message: 'How are you?' },
        { id: '3', message: 'Yo' },
        { id: '4', message: 'Yo' },
        { id: '5', message: 'B88' },
      ],
      newMessageText: '',
    },
    sidebar: {
      friends: [
        [
          {
            id: '1',
            name: 'Maks',
            isOnline: 'true',
            url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
          },
          {
            id: '2',
            name: 'Sveta',
            isOnline: 'true',
            url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
          },
          {
            id: '3',
            name: 'Nataha',
            isOnline: 'true',
            url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
          },
          {
            id: '4',
            name: 'Oly',
            isOnline: 'true',
            url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
          },
          {
            id: '5',
            name: 'Vika',
            isOnline: 'true',
            url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
          },
        ],
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  // setState(value) {
  //   return this._state.profilePage.posts =value;
  // },
  subscribe(observer) {
    this.renderEntireThree = observer;
  },

  //   let newMessage = {
  //     id: 1,
  //     message: this._state.dialogsPage.newMessageText,
  //   };

  //   this._state.dialogsPage.messages.push(newMessage);
  //   this._state.dialogsPage.newMessageText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateMessageText(newText) {
  //   this._state.dialogsPage.newMessageText = newText;
  //   this._callSubscriber(this._state);
  // },
  //  let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };

  dispatch(action) {
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.profilePage = profileReducers(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};
// if (action.type === ADD_Post) {
//   let newPost = {
//     id: 5,
//     message: this._state.profilePage.newPostText,
//     likesCount: 0,
//   };

//   this._state.profilePage.posts.push(newPost);
//   this._state.profilePage.newPostText = '';
//   this._callSubscriber(this._state);
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//   this._state.profilePage.newPostText = action.newText;
//   this._callSubscriber(this._state);
//     } else if (action.type === UPDATE_NEW_MASSAGE_BODY) {
//       this._state.dialogsPage.newMessageText = action.body;
//       this._callSubscriber(this._state);
//     } else if (action.type === SEND_MESSAGE) {
//       let body = this._state.dialogsPage.newMessageText;
//       this._state.dialogsPage.newMessageText = '';
//       this._state.dialogsPage.newMessageText.push({ id: 7, message: body });
//       this._callSubscriber(this._state);
//     }
//   },
// };

export default store;
window.store = store;

///-----обьединили в dispatch-------/
// updateMessageText(newText) {
//   this._state.dialogsPage.newMessageText = newText;
//   this._callSubscriber(this._state);
// },
// addPost() {

//   let newPost = {
//     id: 5,
//     message: this._state.profilePage.newPostText,
//     likesCount: 0,
//   };

//   this._state.profilePage.posts.push(newPost);
//   this._state.profilePage.newPostText = '';
//   this._callSubscriber(this._state);
// },
// updatePostText(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },
