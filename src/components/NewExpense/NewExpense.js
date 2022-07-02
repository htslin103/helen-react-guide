import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
        ...enteredExpenseData,
        /*This isn't a perfect random id, we could get the same number
        but it's good enough for this tutorial at the moment*/
        id: Math.random().toString()
        };
        console.log("In New Expense");
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return( 
    <div className='new-expense'>    
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />  
    </div>
    );
};

export default NewExpense; 