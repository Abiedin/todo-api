import { useSelector } from "react-redux";
import { allRemove, getUsers } from "../../slices/userSlice";
import Buttons from "../../modal/Buttons";
import "./userlist.scss";

export const UserList = () => {
  const users = useSelector((state) => state.userStore.userArr);

  return (
    <>
      <h1 className="userlist-title">UserList</h1>
      <div className="userlist">
        <Buttons getAll={getUsers} allRemove={allRemove} />
        <div className="userlist-item">
          <ul className="userlist-li">
            {users?.map(
              (item) => (
                <li key={item.id}> {item.name}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
