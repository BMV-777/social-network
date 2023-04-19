const UPDATE_NEW_MASSAGE_BODY = 'UPDATE_NEW_MASSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MASSAGE_BODY:
      state.newMessageText = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageText;
      state.newMessageText = '';
      state.newMessageText.push({ id: 7, message: body });
      return state;
    default:
      return state;
  }
};

export const addMessageCreate = () => ({ type: SEND_MESSAGE });
export const updateNewMessageCreate = body => ({
  type: UPDATE_NEW_MASSAGE_BODY,
  body: body,
});

//   if (action.type === UPDATE_NEW_MASSAGE_BODY) {
//     state.newMessageText = action.body;
//   } else if (action.type === SEND_MESSAGE) {
//     let body = state.newMessageText;
//     state.newMessageText = '';
//     state.newMessageText.push({ id: 7, message: body });
//   }

//   return state;
// };

export default dialogsReducer;
