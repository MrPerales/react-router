import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import { HomePage } from './HomePage';
import { BlogPage } from './BlogPage';
import { ProfilePage } from './ProfilePage';
import { NotFoundPage } from './NotFoundPage';
import { Menu } from './Menu';

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
        <Menu/>

        <Routes>
            
          <Route path='/' element={<HomePage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          {/* <Route path='*' element={<NotFoundPage/>}/> */}



        </Routes>
      
      </HashRouter>
    </>
  );
}

export default App;
