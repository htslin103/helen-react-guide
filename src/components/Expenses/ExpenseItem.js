import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import React, {useState} from 'react'; 

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React'); 
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);

  };

  //must only have only have one root element per return
  return (
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
