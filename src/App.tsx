import { useState } from 'react';
import SuccessForm from './components/SuccessForm';
import ReactLogo from './assets/icon-star.svg';
import style from './style.module.css';

function App() {
  const values = [
    { id: 1, text: '1' },
    { id: 2, text: '2' },
    { id: 3, text: '3' },
    { id: 4, text: '4' },
    { id: 5, text: '5' },
  ];
  const [num, setNum] = useState<number>(0);
  const [isAllowed, setAllowed] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<number>();

  function handleClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    let divNumber = e.target as HTMLElement;
    setNum(Number(divNumber.innerHTML));
  }

  function hnadleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAllowed(true);
  }

  return (
    <div className='App'>
      {!isAllowed ? (
        <>
          <div className={style.card}>
            <div className={style.star}>
              <img src={ReactLogo} alt='' />
            </div>
            <h3>How did we do?</h3>
            <p>
              Please let us know how did with your support request. All feedback
              is appreciated to help us improve our offering!
            </p>
            <div className={style.listItems}>
              <ul>
                {values.map(({ id, text }) => (
                  <li
                    key={id}
                    onClick={(e) => {
                      setActiveId(id);
                      handleClick(e);
                    }}
                    className={activeId === id ? style.active : ''}
                  >
                    <div>{text}</div>
                  </li>
                ))}
              </ul>
            </div>
            <button
              disabled={num <= 0 ? true : false}
              onClick={(e) => hnadleSubmit(e)}
              type='button'
            >
              SUBMIT
            </button>
          </div>
        </>
      ) : (
        <SuccessForm num={num} length={values.length} />
      )}
    </div>
  );
}

export default App;
