import { useParams } from 'react-router-dom';
//import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { extraApiAlbom, extraApiTodo, extraApiPost } from '../../../../slices/user-etra/userExtraSlice'
import "./extra.scss"

const ButtonsExtra = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  return (
    <div className="extra-buttons">
      <NavLink to={`/userlist/${id}/albom`}>
        <button className="extra-btn" onClick={() => dispatch(extraApiAlbom(id))}>
          Albom
        </button>
      </NavLink>
      <NavLink to={`/userlist/${id}/todo`}>
        <button className="extra-btn" onClick={() => dispatch(extraApiTodo(id))}>
          Todo
        </button>
      </NavLink>
      <NavLink to={`/userlist/${id}/post`}>
        <button className="extra-btn" onClick={() => dispatch(extraApiPost(id))}>
          Post
        </button>
      </NavLink>
    </div>
  );
};

export default ButtonsExtra;
