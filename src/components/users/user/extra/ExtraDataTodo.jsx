import { useSelector } from 'react-redux';
import { ButtonGoBack } from './ButtonGoBack';

export const ExtraDataTodo = () => {
const storeExtraTodo = useSelector((store) => store.extraStore.extraTodos)

  return (
    <>
      <ButtonGoBack />
      <div className="extra">
       {storeExtraTodo.title} 
      </div>
    </>
  );
};
