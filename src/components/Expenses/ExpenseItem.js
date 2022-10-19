import React, { useState } from 'react'

import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  // react hooks start with use and must be called
  // in react function (can't be nested)

  // using aray destructor, useState always always returns 2 things,
  // first is current state value and second is function to update state value

  // how it works: when setTitle func is called, ExpenseItem function is executed and
  // useState assigns value defined in setTitle to title
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  console.log(title);

  const clickHandler = () => {
    // calling setTitle function (part of useState) executes the function where it is called again
    setTitle('Updated!');
    console.log(title);
  };

  // brackets () allow for spliting html across multiple lines
  // clickHandler does not have () to be executed when it is clisked and not when it is loaded
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
