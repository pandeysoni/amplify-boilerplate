import React, {useState, useRef, useEffect} from 'react';
import * as classes from './square.module.scss'

const fetchData = (timestamp) => new Promise((resolve) => {
  const randomInteger = ~~(Math.random() * 100);
  setTimeout(() => {
    resolve([timestamp, randomInteger]);
  }, randomInteger);
});

const convertPosToStyle = (posArr) => ({
  top: posArr[1],
  left: posArr[0]
});

const Square = () => {

  useEffect(() => {
    const x = {};
    console.log(x); // {'data': 'asdf'}
    x.data = 'asdf'
    console.log(x); // {'data': 'asdf'}
  }, []);

  const [loc, setLoc] = useState([0 , 0]);
  const ref = useRef();
  const clickHandler = ({clientX, clientY}) => {
    const loc = ref.current.getBoundingClientRect();
    console.log(loc);
    const {x, y} = loc;
    const pos = [clientX - x, clientY - y];
    console.log(pos);
    setLoc(pos);
  };
  return (
    <div ref={ref} onClick={clickHandler} className={classes.square}>
      <div className={classes.dot} style={convertPosToStyle(loc)}/>
    </div>
  );
};

export default Square;
