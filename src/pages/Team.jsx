import gunalanFoto from "../assets/foto1.png";
import aliceFoto from "../assets/foto2.png";
import budiFoto from "../assets/foto3.png";

export default function Team() {
  const members = [
    { nama: "Gunalan", role: "Frontend Developer", foto: gunalanFoto },
    { nama: "Alice", role: "Backend Developer", foto: aliceFoto },
    { nama: "Budi", role: "UI/UX Designer", foto: budiFoto },
  ];

  return (
    <div className="team-section py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-4 text-primary">Team Kami</h2>
        <p className="text-center text-muted mb-5">
          Kami adalah tim kecil dengan semangat besar untuk membangun aplikasi modern.
        </p>
        <div className="row g-4">
          {members.map((member, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-lg border-0 h-100 text-center team-card">
                <img
                  src={member.foto}
                  className="card-img-top rounded-circle p-4 team-img"
                  alt={member.nama}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{member.nama}</h5>
                  <p className="card-text text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
