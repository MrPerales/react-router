import { Form, HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { ProfilePage } from './pages/ProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Menu } from './components/Menu';
import { BlogPost } from './components/BlogPost';
import { LoginPage } from './pages/LoginPage';
import { Logout } from './pages/Logout';
import { AuthProvider, ProtectRoute } from './auth'
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
        <AuthProvider>
          <Menu />

          <Routes>

            <Route path='/' element={<HomePage />} />

            <Route path='/blog' element={<BlogPage />}>
              <Route path=':slug' element={<BlogPost />} />
            </Route>

            <Route path='/login' element={<LoginPage />} />
            {/* protectRoute para no tener que protegerla desde el componente Logout con un condicional*/}
            <Route
              path='/logout'
              element={
                <ProtectRoute>
                  <Logout />
                </ProtectRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <ProtectRoute>
                  <ProfilePage />

                </ProtectRoute>
              } />


            <Route path='*' element={<NotFoundPage />} />



          </Routes>
        </AuthProvider>

      </HashRouter>
    </>
  );
}

export default App;
