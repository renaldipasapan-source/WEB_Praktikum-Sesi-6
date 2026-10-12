function TaskCard({ task, onDelete, onToggle }) {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        marginBottom: '10px',
        borderRadius: '5px',
        // Latar belakang berubah jika tugas sudah selesai
        backgroundColor: task.isCompleted ? '#d4edda' : '#ffffff',
      }}
    >
      <h3
        style={{
          // Garis coret jika tugas sudah selesai
          textDecoration: task.isCompleted ? 'line-through' : 'none',
          color: task.isCompleted ? '#6c757d' : 'inherit',
        }}
      >
        {task.judul}
      </h3>
      <p>
        Kategori: <strong>{task.kategori}</strong>
      </p>

      <label style={{ display: 'block', marginBottom: '10px' }}>
        <input
          type="checkbox"
          checked={task.isCompleted}
          onChange={() => onToggle(task.id)}
        />{' '}
        Tandai Selesai
      </label>

      <button
        onClick={() => onDelete(task.id)}
        style={{
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          padding: '5px 10px',
          cursor: 'pointer',
        }}
      >
        Hapus
      </button>
    </div>
  );
}

export default TaskCard;
