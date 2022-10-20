import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { PostList } from './components/PostList';
import  TodoList  from './components/TodoList';
import { UserList } from './components/UserList';

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
