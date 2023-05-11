import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Menu } from './components/Menu';
import { BlogPost } from './components/BlogPost';

//  /#/ -> principal page
//  /#/blog -> BlogPage
// .....
//  /#/hdsnjfdsj -> not Found page

// la propiedad element puede cambiar dependiendo si estamos usando
// HashRouter o BrowserRouter 


function App() {
  return (
    <>
      <HashRouter>
        <Menu />

        <Routes>

          <Route path='/' element={<HomePage />} />

          <Route path='/blog' element={<BlogPage />}>
            <Route path=':slug' element={<BlogPost />} />
          </Route>

          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<NotFoundPage />} />



        </Routes>

      </HashRouter>
    </>
  );
}

export default App;
