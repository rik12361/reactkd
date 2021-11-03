import { FaTimes} from 'react-icons/fa'

const Task = ({ task, onDelete, onDoubleClick }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': ''}`} >
            <h3 onDoubleClick={() => onDoubleClick(task.id)}> { task.text }<FaTimes onClick={ () => onDelete (task.id) } style={{color: 'red', cursor: 'pointer'}}/></h3>
            <h3 onDoubleClick={() => onDoubleClick(task.id)}> { task.day }</h3>


            {/* <h3 onDoubleClick={() => onDoubleClick(task.id)} > { task.text } { task.day } <FaTimes onClick={ () => onDelete (task.id) } style={{color: 'red', cursor: 'pointer'}}/></h3> */}
        </div>
    )
}
export default Task

