import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { removeAll, getUsers } from '../../slices/userSlice';
import Buttons from '../../modal/buttons/Buttons';
import './userlist.scss';
import { stateUser } from '../../slices/userSlice';
import { useDispatch } from 'react-redux';

export const UserList = () => {
  const users = useSelector((state) => state.userStore.userArr);
  const dispatch = useDispatch();

  return (
    <>
      <h1 className="userlist-title">UserList</h1>
      <div className="userlist">
        <Buttons getAll={getUsers} removeAll={removeAll} />
        <div className="userlist-item">
          <ul className="userlist-li">
            {users?.map((item) => (
              <NavLink to={`/userlist/${item.id}`} key={item.id}>
                <li
                  onClick={() => {
                    dispatch(stateUser(item.id));
                  }}
                >
                  {item.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
