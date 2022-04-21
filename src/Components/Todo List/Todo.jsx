import React, {useState} from 'react';
import './style.css'

const Todo = () => {
    const [taskName, setTaskName] = useState('');
    const [taskList, setTaskList] = useState([]);

    function addTask() {
        setTaskList([...taskList, taskList]);
        console.warn(taskList);
    }

    const taskListContent = taskList.map((task, index) => {
        console.log('task', task)
        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1rem'}}>
                <p>{task}</p>
                <i className="far fa-trash-alt" onClick={() => deleteTask(index)}
                   style={{color: 'red', paddingTop: '3px'}}/>
            </div>
            // TODO: Not working, make it work.
        )
    });

    function deleteTask(index) {
        const dupArr = [...taskList];
        dupArr.splice(index, 1)
        setTaskList(dupArr)
    }

    return (
        <React.Fragment>
            <div className="row justify-content-center">
                <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                    <h1>Todo List React</h1>
                    <input type="text" placeholder='Enter Tasks' className='form-control' value={taskName}
                           onChange={(e) => {
                               setTaskName(e.target.value)
                           }}/>
                    <button className='btn btn-primary' onClick={addTask}>ADD</button>

                    <br/>
                    {taskListContent}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Todo;
