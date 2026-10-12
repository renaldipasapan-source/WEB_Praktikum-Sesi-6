import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>404</h1>
      <h2>Halaman Tidak Ditemukan</h2>
      <p>Maaf, alamat yang Anda tuju tidak tersedia.</p>
      <button
        onClick={() => navigate('/')}
        style={{ padding: '8px 15px', cursor: 'pointer' }}
      >
        Kembali ke Beranda
      </button>
    </div>
  );
}

export default NotFound;
