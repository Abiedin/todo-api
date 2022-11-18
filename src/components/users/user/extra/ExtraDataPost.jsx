import { useSelector } from 'react-redux';
import { ButtonGoBack } from './ButtonGoBack';

export const ExtraDataPost = () => {
const storeExtraPost = useSelector((store) => store.extraStore.extraPosts)

  return (
    <>
      <ButtonGoBack />
      <div className="extra">
       {storeExtraPost.title} 
      </div>
    </>
  );
};
