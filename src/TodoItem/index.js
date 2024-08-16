import './TodoItem.css'
import { CompleteIcon } from '../TodoIcon/completeIcon';
import { DeleteIcon } from '../TodoIcon/deleteIcon';
function TodoItem(props){
    return (
      <li className={`TodoItem ${props.completed && "TodoItem-active"}`}>
        <CompleteIcon completed={props.completed} onComplete={props.onComplete}/>
        {/* <span className={`Icon Icon-check ${props.completed&& "Icon-check--active"}`} onClick={props.onComplete}>v</span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        {/* <span className="Icon Icon-delete" value ={props.disponible} onClick={props.onDelete}>x</span> */}
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }

  
  export {TodoItem}