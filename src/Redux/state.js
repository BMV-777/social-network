import { renderEntireThree } from 'render';

let state = {
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
        url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
      },
      {
        id: '2',
        name: 'Sveta',
        url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
      },
      {
        id: '3',
        name: 'Nataha',
        url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
      },
      {
        id: '4',
        name: 'Oly',
        url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
      },
      {
        id: '5',
        name: 'Vika',
        url: 'https://www.esmagazine.com/ext/resources/whitney-logo-300x248.jpg?1594045477',
      },
    ],
    messages: [
      { id: '1', message: 'Hi' },
      { id: '2', message: 'How are you?' },
      { id: '3', message: 'Yo' },
      { id: '4', message: 'Yo' },
      { id: '5', message: 'B88' },
    ],
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
};
window.state = state;

export let addPostDialog = dialogMessages => {
  let newMessage = {
    id: 5,
    message: dialogMessages,
  };

  state.dialogsPage.messages.push(newMessage);
  renderEntireThree(state);
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireThree(state);
};

export let updatePostText = newText => {
  state.profilePage.newPostText = newText;
  renderEntireThree(state);
};

export default state;
