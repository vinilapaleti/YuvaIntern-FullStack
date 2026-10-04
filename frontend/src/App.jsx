import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Connecting...");
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        setConnected(true);
      })
      .catch(() => {
        setMessage("Backend connection failed.");
        setConnected(false);
      });
  }, []);

  return (
    <main className="app">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-icon">Y</div>
          <span>YuvaIntern</span>
        </div>

        <div className="nav-status">
          <span className={`status-dot ${connected ? "online" : ""}`}></span>
          {connected ? "System Online" : "Connecting"}
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">FULL STACK DEVELOPER INTERNSHIP</span>

          <h1>
            Welcome to your
            <span> Full Stack Project</span>
          </h1>

          <p className="description">
            A simple full-stack application built using React, Vite,
            Node.js and Express.
          </p>

          <div className={`connection ${connected ? "success" : "error"}`}>
            <div className="connection-icon">
              {connected ? "✓" : "!"}
            </div>

            <div>
              <strong>{connected ? "Backend Connected" : "Connection Failed"}</strong>
              <p>{message}</p>
            </div>
          </div>
        </div>

        <div className="tech-card">
          <div className="card-header">
            <span>TECHNOLOGY STACK</span>
            <span className="live">LIVE</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo react">R</div>
            <div>
              <strong>React + Vite</strong>
              <small>Frontend</small>
            </div>
            <span>✓</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo node">N</div>
            <div>
              <strong>Node.js</strong>
              <small>Runtime</small>
            </div>
            <span>✓</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo express">E</div>
            <div>
              <strong>Express.js</strong>
              <small>Backend API</small>
            </div>
            <span>✓</span>
          </div>

          <div className="tech-item">
            <div className="tech-logo git">G</div>
            <div>
              <strong>Git & GitHub</strong>
              <small>Version Control</small>
            </div>
            <span>→</span>
          </div>
        </div>
      </section>

      <footer>
        <span>YuvaIntern Full Stack Developer Internship</span>
        <span>Task 1 • Fundamentals & Setup</span>
      </footer>
    </main>
  );
}

export default App;