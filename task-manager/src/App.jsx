import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  // State Utama untuk menampung seluruh daftar tugas
  const [tasks, setTasks] = useState([
    {
      id: 1,
      judul: 'Mempelajari State dan Props',
      kategori: 'Belajar',
      isCompleted: false,
    },
    {
      id: 2,
      judul: 'Membuat Navbar dengan React Router',
      kategori: 'Pekerjaan',
      isCompleted: false,
    },
  ]);

  // Handler untuk menambah tugas
  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Handler untuk menghapus tugas
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      ),
    );
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              tasks={tasks}
              onDeleteTask={handleDeleteTask}
              onToggleTask={handleToggleTask}
            />
          }
        />
        <Route
          path="/tambah"
          element={<AddTask onAddTask={handleAddTask} />}
        />
        <Route path="/about" element={<About />} />
        {/* Rute wildcard: untuk semua alamat yang tidak dikenali */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
