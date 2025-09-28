export default function Home() {
  return (
    <div>
      {/* 🔹 Hero Section */}
      <section className="hero d-flex align-items-center text-center text-white">
        <div className="container">
          <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
            Selamat Datang di <span className="text-warning">MyWebsite</span>
          </h1>
          <p className="lead mb-4 animate__animated animate__fadeInUp">
            Website modern dengan React Router, Bootstrap, dan styling custom.
          </p>
          <a href="/about" className="btn btn-lg btn-warning shadow me-3">
            Tentang Kami
          </a>
          <a href="/team" className="btn btn-lg btn-outline-light shadow">
            Lihat Tim
          </a>
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4 text-primary">Kenapa Pilih Kami?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card feature-card h-100 text-center p-3">
              <div className="feature-icon bg-primary text-white mx-auto mb-3">
                🚀
              </div>
              <h5 className="fw-bold">Cepat & Responsif</h5>
              <p className="text-muted">
                Website ini menggunakan teknologi modern sehingga cepat diakses di berbagai perangkat.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card h-100 text-center p-3">
              <div className="feature-icon bg-warning text-dark mx-auto mb-3">
                🎨
              </div>
              <h5 className="fw-bold">Desain Menarik</h5>
              <p className="text-muted">
                Tampilan dibuat clean, elegan, dan user-friendly agar nyaman digunakan.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card feature-card h-100 text-center p-3">
              <div className="feature-icon bg-success text-white mx-auto mb-3">
                🔒
              </div>
              <h5 className="fw-bold">Aman & Terpercaya</h5>
              <p className="text-muted">
                Kami mengutamakan keamanan data pengguna dengan standar terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Banner CTA */}
      <section className="cta-section text-center text-white py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">Siap untuk mulai?</h2>
          <p className="mb-4">Bergabunglah dengan kami dan rasakan pengalaman terbaik.</p>
          <a href="/contact" className="btn btn-lg btn-light text-primary fw-bold">
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
}
