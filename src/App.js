import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navigation } from './action/Navigation';
import { PostList } from './action/PostList';
import { TodoList } from './action/TodoList';
import { UserList } from './action/UserList';


function App() {

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Navigation />
          <Routes>
            <Route path='/' element={<PostList />} />
            <Route path='todo' element={<TodoList />} />
            <Route path='userlist' element={<UserList />} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
