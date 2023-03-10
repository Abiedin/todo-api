import { useParams } from 'react-router-dom';
import { useState } from 'react';
import './user.scss';
import ModalUser from '../modal-user/ModalUser';
import InputsField from '../modal-user/InputsField';
import ButtonUser from './buttons/ButtonUser';
import { useEffect } from 'react';
import ButtonsExtra from './extra/ButtonsExtra';

export const User = () => {
  const { id } = useParams();
  const [modalActive, setModalActive] = useState(false);
  const [arr, setArr] = useState(
    JSON.parse(localStorage.getItem('users')).data[id - 1]
  );

  useEffect(() => {
    setInterval(() => {
      setArr(JSON.parse(localStorage.getItem('users')).data[id - 1]);
    }, 1000);
  }, []);

  return (
    <div className="user">
      <div className="user__change">
        <ButtonUser setModalActive={setModalActive} />
        <ModalUser
          active={modalActive}
          setActive={setModalActive}
          InputsField={<InputsField id={id} setActive={setModalActive} />}
        />
      </div>
      <div className="information">
        <div className="information__extra">
          <ButtonsExtra id={id} />
        </div>
        <div className="user__box">
          <div className="user__item">
            <img
              className="user__img"
              src="../img/user-img/name.png"
              alt="name"
              alert="pen"
            />
            <div className="user_name">
              {arr.name}
              <p>Name</p>
            </div>
          </div>
          <div className="user__item">
            <img
              className="user__img"
              src="../img/user-img/email.png"
              alt="email"
              alert="pen"
            />
            <div className="user_name">
              {arr.email}
              <p>Email</p>
            </div>
          </div>
          <div className="user__item">
            <img
              className="user__img"
              src="../img/user-img/phone-call.png"
              alt="phone"
              alert="pen"
            />
            <div className="user_name">
              {arr.phone}
              <p>Mobile</p>
            </div>
          </div>
          <div className="user__item">
            <img
              className="user__img"
              src="../img/user-img/street.png"
              alt="name"
              alert="pen"
            />
            <div className="user_name">
              <div className="user__city">{arr.address.city},</div>
              <div className="user__street">{arr.address.street},</div>
              <div className="user__zipcode">{arr.address.zipcode}</div>
              <p>Work</p>
            </div>
          </div>
          <div className="user__item">
            <img
              className="user__img"
              src="../img/user-img/site.png"
              alt="name"
              alert="pen"
            />
            <div className="user_name">
              {arr.website}
              <p>Social</p>
            </div>
          </div>
          <div className="user__item">
            <img
              className="user__img"
              src="../img/user-img/company.png"
              alt="name"
              alert="pen"
            />
            <div className="user_name">
              <div className="user__segment companyname">
                {arr.company.name},
              </div>
              <div className="user__segment specialization">
                {arr.company.bs},
              </div>
              <div className="user__segment tagline">
                {arr.company.catchPhrase}
              </div>
              <p>Segments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
