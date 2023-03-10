import React from 'react';
import style from '../style.module.css';
import CardThanks from '../assets/illustration-thank-you.svg';

type NumProps = {
  num: number;
  length: number;
};

function SuccessForm({ num, length }: NumProps) {
  return (
    <div className={`${style.card} ${style.thankCard}`}>
      <img src={CardThanks} alt='icon card' />
      <div>
        <span>
          Your selected {num} out {length}
        </span>
      </div>
      <p className={style.mainTitle}>Thank you!</p>
      <p>We appreciate you taking a time to give a rating</p>
      <p>If you need more suppord, do not hesatite to get in touch!</p>
    </div>
  );
}

export default SuccessForm;
