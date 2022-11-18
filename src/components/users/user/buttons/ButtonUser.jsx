import { useNavigate } from 'react-router-dom';

const ButtonUser = ({ setModalActive }) => {
  const goBack = useNavigate();

  return (
    <>
      <button className="btn-goback" onClick={() => goBack(-1)}>
        GO BACK
      </button>
      <button
        className="btn-change"
        onClick={() => {
          setModalActive(true);
        }}
      >
        CHANGE
      </button>
    </>
  );
};

export default ButtonUser;
