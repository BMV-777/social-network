let state = {
  profilePage: {
    posts: [
      { id: '1', message: 'Hi, how are you', likesCount: '7' },
      { id: '2', message: 'Ok, and you', likesCount: '7' },
      { id: '3', message: 'Kimi-himi', likesCount: '4' },
      { id: '4', message: 'Yo', likesCount: '3' },
      { id: '5', message: 'Bro', likesCount: '2' },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: '1', name: 'Maks' },
      { id: '2', name: 'Sveta' },
      { id: '3', name: 'Nataha' },
      { id: '4', name: 'Oly' },
      { id: '5', name: 'Vika' },
    ],
    messages: [
      { id: '1', message: 'Hi' },
      { id: '2', message: 'How are you?' },
      { id: '3', message: 'Yo' },
      { id: '4', message: 'Yo' },
      { id: '5', message: 'Bro' },
    ],
  },
  sidebar: {
    friends: [
      [
        { id: '1', name: 'Maks', isOnline: 'false' },
        { id: '2', name: 'Sveta', isOnline: 'true' },
        { id: '3', name: 'Nataha', isOnline: 'false' },
        { id: '4', name: 'Oly', isOnline: 'true' },
        { id: '5', name: 'Vika', isOnline: 'true' },
      ],
    ],
  },
};

export default state;
