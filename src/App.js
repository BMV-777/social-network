import { Route, Routes } from 'react-router-dom';
import './App.css';

import { Profile } from 'components/Profaile/Profile';
import { Header } from 'components/Header/Header';
import { NavBar } from 'components/NawBar/NawBar';

import Dialogs from 'components/Dialogs/Dialogs';
import News from 'components/News/News';
import Music from 'components/NawBar/Music/Music';
import Setting from 'components/Setting/Settinge';

import post from './post.json';
import user from './user.json';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/dialogs" element={<Dialogs user={user} />} />
          <Route path="/profile" element={<Profile post={post} />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
