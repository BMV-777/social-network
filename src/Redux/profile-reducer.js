const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: '1', message: 'Hi, how are you', likesCount: '7' },
    { id: '2', message: 'Ok, and you', likesCount: '7' },
    { id: '3', message: 'Kimi-himi', likesCount: '4' },
    { id: '4', message: 'Yo', likesCount: '3' },
    { id: '5', message: 'Bro', likesCount: '2' },
  ],
  newPostText: 'Ты программист!!!',
};

const profileReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPosts = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

//   if (action.type === ADD_Post) {

//     let newPost = {
//       id: 5,
//       message: state.newPostText,
//       likesCount: 0,
//     };

//     state.posts.push(newPost);
//     state.newPostText = '';
//   } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     state.newPostText = action.newText;
//   }
//   return state;
// }

export default profileReducers;
