import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTask({ onAddTask }) {
  const [judul, setJudul] = useState('');
  const [kategori, setKategori] = useState('Pekerjaan');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!judul.trim()) return alert('Judul tugas tidak boleh kosong!');

    const newTask = {
      id: Date.now(),
      judul,
      kategori,
      isCompleted: false,
    };

    onAddTask(newTask);
    navigate('/'); // Navigasi otomatis kembali ke halaman utama
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tambah Tugas Baru</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Judul Tugas: </label>
          <br />
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Masukkan nama tugas..."
            style={{ width: '300px', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Kategori: </label>
          <br />
          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            style={{ padding: '8px' }}
          >
            <option value="Pekerjaan">Pekerjaan</option>
            <option value="Pribadi">Pribadi</option>
            <option value="Belajar">Belajar</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            padding: '8px 15px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
          }}
        >
          Simpan Tugas
        </button>
      </form>
    </div>
  );
}

export default AddTask;
