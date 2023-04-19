import { combineReducers, legacy_createStore as createStore } from 'redux';
import profileReducers from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

const reducers = combineReducers({
  profilePage: profileReducers,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});

let store = createStore(reducers);

export default store;
