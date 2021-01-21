import { FaTimes } from 'react-icons/fa';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`}>
      <div className='taskPointer' onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} </h3>
        <p>{task.day}</p>
      </div>
      <div>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Task;
