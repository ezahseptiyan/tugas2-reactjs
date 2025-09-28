export default function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="lead">Halaman yang Anda cari tidak ditemukan.</p>
      <a href="/" className="btn btn-outline-primary mt-3">
        Kembali ke Home
      </a>
    </div>
  );
}
