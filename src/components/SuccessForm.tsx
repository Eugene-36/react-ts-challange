import React from 'react';
import style from '../style.module.css';

type NumProps = {
  num: number;
};

function SuccessForm({ num }: NumProps) {
  return (
    <div className={`${style.card} ${style.thankCard}`}>
      <div>
        <span>Your selected {num} out five</span>
      </div>
      <p>Thank you!</p>
      <p>We appreciate you taking a time to give a rating</p>
      <p>If you need more suppord, do not hesatite to get in touch!</p>
    </div>
  );
}

export default SuccessForm;
