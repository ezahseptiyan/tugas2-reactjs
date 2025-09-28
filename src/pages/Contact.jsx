export default function Contact() {
  return (
    <div className="contact-page py-5">
      <div className="container">
        <h2 className="fw-bold text-center text-primary mb-4">
          Hubungi Kami
        </h2>
        <p className="text-center text-muted mb-5">
          Punya pertanyaan atau ingin bekerja sama? Silakan isi form di bawah
          atau hubungi kontak yang tersedia.
        </p>

        <div className="row g-4">
          {/* 🔹 Form Kontak */}
          <div className="col-md-7">
            <div className="card shadow-lg border-0 p-4 h-100">
              <h4 className="fw-bold mb-3">Kirim Pesan</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Nama</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="nama@email.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Pesan</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>

          {/* 🔹 Info Kontak */}
          <div className="col-md-5">
            <div className="card shadow-lg border-0 p-4 h-100">
              <h4 className="fw-bold mb-3">Informasi Kontak</h4>
              <p className="lead mb-2">📧 Email: contact@mywebsite.com</p>
              <p className="lead mb-2">📞 Telp: +62 812-3456-7890</p>
              <p className="lead">📍 Alamat: Jl. Merdeka No. 123, Jakarta</p>
              <hr />
              <h6 className="text-muted">Jam Operasional</h6>
              <p>Senin - Jumat : 09.00 - 17.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
