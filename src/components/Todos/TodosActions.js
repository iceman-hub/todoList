import Button from '../UI/Button'
import {RiDeleteBin2Line, RiRefreshLine} from 'react-icons/ri'
import styles from './TodosActions.module.css'

function TodosActions ({resetTodos, deleteTodosIsCompleted, completedTodosExist}) {
    return (
        <div className={styles.todosActionsConteiner}>
            <Button title={'Reset Todos'} onClick ={resetTodos}>
                <RiRefreshLine/>
            </Button> 

            <Button title={'Delete Completed Todos'} onClick={deleteTodosIsCompleted} disabled={!completedTodosExist}>
                <RiDeleteBin2Line/>
            </Button>
        </div>
    )
}

export default TodosActions
    