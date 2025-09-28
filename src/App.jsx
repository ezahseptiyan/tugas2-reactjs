import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { publicRoutes } from "./routes/publicRoutes";
import { notFoundRoutes } from "./routes/notFoundRoutes";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />
      <main className="flex-fill">
        <Routes>
          {publicRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}

          {notFoundRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
