import './CreateTodoButton.css'
function CreateTodoButtom(props){
    return (
       <button className='CreateTodoButton' onClick={props.onDibujar}>+</button>
    )
}

export {CreateTodoButtom}