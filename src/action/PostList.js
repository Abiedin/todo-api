//import { useSelector } from 'react-redux';
import FormPostList from "../components/FormPostList";
import '../scss/post.scss'
import { useState } from "react";

export const PostList = () => {
  const [arrpost, setPosts] = useState([]);
  //const [allTodos, setAllTodos] = useState(0);
 // const [allComplete, setAllComplete] = useState(0)


  const putPost = (value) => {
    if(value) {
      setPosts([...arrpost, {id: Date.now(), text: value}])
    } else {
      alert('Введите текстaaa')
    }
  }

  const clearAllPosts = () => {
    setPosts([]);
  }

  return (
    <div className="post-conteiner">
      <h1 className="post-title">PostList</h1>
        <FormPostList 
          putPost={putPost}
        />
        <ul className="post-ul">
          {
            arrpost.map((todo) => {
              return (
                <li className="post-text">
                  {todo.text}
                </li>
              )
            })
          }
        </ul>
        <div className="postbtncl">
          <button className="btn-clear" onClick={clearAllPosts} > Clear All</button>  
        </div>
        
    </div>
  )
}