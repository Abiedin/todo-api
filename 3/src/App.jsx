import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/nav/Navigation';
import { PostList } from './components/post/PostList';
import  TodoList  from './components/todo/TodoList';
import { UserList } from './components/user/UserList';

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
