import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import React, {useState} from 'react'; 

function ExpenseItem(props) {

  //must only have only have one root element per return
  return (
    <li> 
      <Card className='expense-item'>
          <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>{props.amount}</div>
        </div>
        <button> Change Title</button>
      </Card>
    </li>
  );
}

export default ExpenseItem;
