import { useState, useEffect } from "react";
import Header from "./Header,";
import Tasks from "./Tasks";
import Addtasks from "./Addtasks";
const TaskTrackerApp = () => {
  // const name = 'brad';
  // const shw = true;

  const  [tasks, setTasks ]= useState ([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks();
  }, [])

// fetch tasks from server

  const fetchTasks = async () => {
    console.log("fetching");
    const res = await fetch ('http://localhost:8080/api/all')
    const data = await res.json()
    return (data)
  }

  const addTask = (text, day, reminder) => {
//    console.log(text);
    // var id = 1;

    // var ids = tasks.map((tsk) => (tsk.id));
    // var id = Math.max (...ids.values()) + 1;
    const newTask = { text, day, reminder }
    console.log(newTask);

    const addtaskdb = async(newTask) => {
          const res = await fetch ('http://localhost:8080/api', 
          { method :  'POST',
            headers: {
              'content-type' : 'application/json'
            },
            body: JSON.stringify(newTask)
          })

          const data = await res.json();
          setTasks ([...tasks, data ]);
      }
      addtaskdb(newTask);

    // console.log(newTask);
    // console.log (...tasks);
  }

  const deleteTask = async (id) => {
    console.log("delete task! " + id);

    await fetch  ('http://localhost:8080/api/'+id, { method: "DELETE"} )

    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    console.log ("toggle "+ id);
    setTasks(tasks.map((task) => task.id === id ?
        {...task, reminder: !task.reminder } : task ));
  }

  const toggleShowAdd = () => {
    console.log ("showAdd");
    showAdd? setshowAdd(false) : setshowAdd(true);
}

  const  [showAdd, setshowAdd ]=  useState (false);

  return (
    <div className="container">
      <Header title="Task tracker" showaddsection= {toggleShowAdd}/>
      { showAdd? <Addtasks  addTask={addTask}/> : <div></div>}
      {tasks.length > 0 ? <Tasks tasks= {tasks} onDelete={deleteTask} onDoubleClick={toggleReminder}></Tasks> : "No tasks to show" }
    </div>
  );
}

export default TaskTrackerApp;
