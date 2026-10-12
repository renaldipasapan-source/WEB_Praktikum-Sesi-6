import { useState } from 'react';
import TaskCard from '../components/TaskCard';

function Home({ tasks, onDeleteTask, onToggleTask }) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredTasks = tasks.filter((task) =>
    task.judul.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div style={{ padding: '20px' }}>
      <h2>Daftar Tugas Hari Ini</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Cari tugas..."
      />

      {/* Short-circuit Rendering jika data kosong */}
      {tasks.length === 0 && (
        <p>Belum ada tugas. Silakan tambahkan tugas baru!</p>
      )}

      {/* Rendering List dengan map dan key */}
      {filteredTasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDeleteTask}
          onToggle={onToggleTask}
        />
      ))}
    </div>
  );
}

export default Home;
