import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  category: 'personal' | 'professional';
  completed: boolean;
}

const TaskScheduler: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Omit<Task, 'id' | 'completed'>>({
    title: '',
    description: '',
    dueDate: '',
    category: 'personal',
  });

  const addTask = () => {
    if (newTask.title && newTask.dueDate) {
      setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
      setNewTask({ title: '', description: '', dueDate: '', category: 'personal' });
    }
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Task Scheduler</h2>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Task title"
          className="border rounded p-2"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="border rounded p-2"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <input
          type="date"
          className="border rounded p-2"
          value={newTask.dueDate}
          onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
        />
        <select
          className="border rounded p-2"
          value={newTask.category}
          onChange={(e) =>
            setNewTask({
              ...newTask,
              category: e.target.value as 'personal' | 'professional',
            })
          }
        >
          <option value="personal">Personal</option>
          <option value="professional">Professional</option>
        </select>
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
        onClick={addTask}
      >
        <Plus size={20} className="mr-2" />
        Add Task
      </button>
      <ul className="mt-6 space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`bg-gray-50 p-4 rounded-lg flex items-center justify-between ${
              task.completed ? 'opacity-50' : ''
            }`}
          >
            <div>
              <h3 className="font-semibold">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <p className="text-sm text-gray-500">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </p>
              <span
                className={`text-xs px-2 py-1 rounded ${
                  task.category === 'personal'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-blue-100 text-blue-800'
                }`}
              >
                {task.category}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(task.id)}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button style={{border:'2px solid #3388FF',backgroundColor:'#3388FF',height:'35px',width:'300',padding:'0.5rem',borderRadius:'10px',color:'white',fontSize:'10px'}} > <a href='https://ask-ai-delta.vercel.app/'>GUIDE ME</a> </button>
    </div>
  );
  
};



export default TaskScheduler;