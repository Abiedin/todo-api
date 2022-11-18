import { useNavigate } from 'react-router-dom';

export const ButtonGoBack = () => {
  const goBack = useNavigate();

  return (
    <>
      <button className="btn-goback" onClick={() => goBack(-1)}>
        GO BACK
      </button>
    </>
  );
};
