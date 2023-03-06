import { useState } from 'react';
import './App.css';

export function App() {
  const [task, setTask] = useState('');
  const [describe, setDescribe] = useState('');
  const [dateNow, setDateNow] = useState('');
  const [dateLaste, setDateLast] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAdd() {
    if (!task || !describe || !dateNow || !dateLaste) {
      alert('Todos os campos são obrigatorios');
      return;
    }
    setTasks([
      { task: task, desc: describe, dateNow: dateNow, dateLaste: dateLaste },
      ...tasks,
    ]);
    clear();
  }

  function handleClear() {
    if (tasks.length === 0) {
      alert('A lista ja está limpa');
      return;
    }
    setTasks([]);
  }

  function clear() {
    setTask('');
    setDescribe('');
    dateNow('');
    dateLaste('');
  }

  return (
    <main className="container">
      <div className="div">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder={'Task'}
        />

        <input
          value={describe}
          onChange={(e) => setDescribe(e.target.value)}
          placeholder={'Describe'}
        />

        <input
          type={'datetime-local'}
          value={dateNow}
          onChange={(e) => setDateNow(e.target.value)}
          placeholder={'Date now'}
        />

        <input
          type={'datetime-local'}
          value={dateLaste}
          onChange={(e) => setDateLast(e.target.value)}
          placeholder={'Date last'}
        />

        <button onClick={handleAdd}>Adicionar</button>
        <button onClick={handleClear}>Limpar</button>
      </div>
      <ul className="lista">
        {tasks.map((e) => (
          <div className="div-container">
            <h1>{e.task}</h1>
            <p>{e.desc}</p>
            <p>{e.dateNow}</p>
            <p>{e.dateLaste}</p>
            <input className="check-list" type="checkbox" />
          </div>
        ))}
      </ul>
    </main>
  );
}
