import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { allRemove, getUsers } from '../../slices/userSlice';
import Buttons from "../../modal/buttons/Buttons";
import './userlist.scss';
import { stateUser } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';

export const UserList = () => {
  //const users = useSelector((state) => state.userStore.userArr);
  const stateLocalUser = JSON.parse(localStorage.getItem('users')).data;
 
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="userlist-title">UserList</h1>
      <div className="userlist">
        <Buttons getAll={getUsers} allRemove={allRemove} />
        <div className="userlist-item">
          <ul className="userlist-li">
            {stateLocalUser?.map((item) => (
              <NavLink to={`/userlist/${item.id}`} >
                <li key={item.id} onClick={() => dispatch(stateUser(item.id))} >{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
