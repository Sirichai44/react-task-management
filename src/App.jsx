import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")) || []);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme,setTheme] = useState("light");

  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(tasks));
  },[tasks])

  function deleteTask(id) {
    // console.log(id);
    const result = tasks.filter((item) => item.id !== id);
    setTasks(result);
  }
  function saveTask(e) {
    e.preventDefault();
    // console.log("saved");
    if (!title) {
      alert("กรุณาป้อนข้อมูล");
    }else if(editId){
      //อัพเดทข้อมูล
      // console.log("อัพเดทข้อมูล");
      const updateTask = tasks.map((item)=>{
        if(item.id === editId){
          return {...item,title:title}
        }
        return item
      })
      // console.log(updateTask);
      setTasks(updateTask);
      setEditId(null);
      setTitle("");

    }else{
      //เพิ่มรายการใหม่
      const newTask = {
        id: Math.floor(Math.random() * 1000),
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }
  function editTask(id) {
    // console.log(id);
    setEditId(id);
    const editTask = tasks.find((item)=>item.id === id);
    // console.log(editTask);
    setTitle(editTask.title);
  }

  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme} />

      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editId={editId}
        />
        <section>
          {tasks.map((task) => (
            <Item
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
