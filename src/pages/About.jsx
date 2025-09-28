export default function About() {
  return (
    <div className="about-page py-5">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-primary mb-3">Tentang Kami</h2>
          <p className="lead text-muted">
            Website ini dibuat sebagai demo project menggunakan React Router
            dan Bootstrap dengan styling modern agar lebih menarik dan interaktif.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card shadow-lg border-0 p-4 h-100">
              <h4 className="fw-bold text-primary mb-3">Visi</h4>
              <p className="text-muted">
                Menjadi platform pembelajaran modern yang mempermudah
                developer pemula dalam memahami konsep dasar React
                dan Bootstrap melalui contoh langsung.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card shadow-lg border-0 p-4 h-100">
              <h4 className="fw-bold text-primary mb-3">Misi</h4>
              <ul className="text-muted list-unstyled">
                <li>✅ Memberikan contoh nyata implementasi React Router</li>
                <li>✅ Menyediakan desain yang clean & responsif</li>
                <li>✅ Membantu mahasiswa & developer pemula belajar interaktif</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline / Perjalanan */}
        <div className="timeline text-center">
          <h4 className="fw-bold text-primary mb-4">Perjalanan Kami</h4>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <ul className="list-group shadow-sm">
                <li className="list-group-item">
                  🚀 <b>2025:</b> Membuat demo pertama dengan React + Bootstrap
                </li>
                <li className="list-group-item">
                  🎨 <b>2025:</b> Menambahkan custom styling & komponen interaktif
                </li>
                <li className="list-group-item">
                  🌍 <b>Next:</b> Membuka kontribusi untuk publik
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
