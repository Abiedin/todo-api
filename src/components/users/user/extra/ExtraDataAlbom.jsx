import { useSelector } from 'react-redux';
import { ButtonGoBack } from './ButtonGoBack';

export const ExtraDataAlbom = () => {
const storeExtraAlbom = useSelector((store) => store.extraStore.extraAlboms)

  return (
    <>
      <ButtonGoBack />
      <div className="extra">
       {storeExtraAlbom.title} 
      </div>
    </>
  );
};
