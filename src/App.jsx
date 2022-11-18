import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/nav/Navigation';
import { PostList } from './components/post/PostList';
import TodoList from './components/todo/TodoList';
import { UserList } from './components/users/UserList';
import { User } from './components/users/user/User';
import { ExtraDataAlbom } from './components/users/user/extra/ExtraDataAlbom';
import { ExtraDataTodo } from './components/users/user/extra/ExtraDataTodo';
import { ExtraDataPost } from './components/users/user/extra/ExtraDataPost';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Navigation />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="todo" element={<TodoList />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="userlist/:id" element={<User />} />
          <Route path="userlist/:id/albom" element={<ExtraDataAlbom />} />
          <Route path="userlist/:id/todo" element={<ExtraDataTodo />} />
          <Route path="userlist/:id/post" element={<ExtraDataPost />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
