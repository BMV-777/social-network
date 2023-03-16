import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Profile } from 'components/Profaile/Profile';
import { Header } from 'components/Header/Header';
import { NavBar } from 'components/NawBar/NawBar';

import Dialogs from 'components/Dialogs/Dialogs';
import News from 'components/News/News';
import Music from 'components/NawBar/Music/Music';
import Setting from 'components/Setting/Settinge';

// import post from './post.json';
// import user from './user.json';
// import Friends from 'components/Friends/Friends';

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar friends={props.friends} />
      {/* <NavBar path="/friends" element={<Friends friends={props.friends} />} />  */}
      <div className="app-wrapper-content">
        <Routes>
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogs={props.dialogs}
                messages={props.messages}
                addPostDialog={props.addPostDialog}
                newMessageText={props.newMessageText}
                updateMessageText={props.updateMessageText}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                dispatch={props.dispatch}
                // posts={props.posts}
                // addPost={props.addPost}
                // newPostText={props.newPostText}
                // updatePostText={props.updatePostText}
              />
            }
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setting" element={<Setting />} />
          {/* <Route path="/friends" element={<Friends />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
