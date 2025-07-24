import { link } from "framer-motion/client";
import React, { useState } from "react";

// Tech stack logo URLs
const logos = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  Node: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  Redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  HTML: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
};

const projects = [
  {
    name: "LeetLove",
    desc: "Rich problem library, live Monaco editor, streak calendar, and modern dashboard for coding interview practice.",
    link: "https://github.com/Vimalnegi03/LeetLove",
    image: "/check.png",
    live:"https://leetlove-1.onrender.com/"
  },
  {
    name: "Tutor Finder",
    desc: "MERN stack platform for connecting students to tutors, featuring real-time chat, reviews, and group lessons.",
    link: "https://github.com/Vimalnegi03/Tutor_Finder",
    image: "/LMS.png",
    live:"https://major-project-frontend-iqr1.onrender.com/"
  },
  {
    name: "GenerativeAI Experiments",
    desc: "Playground for GenAI, vector DBs, Langchain, RAG, and knowledge graphs.",
    link: "https://github.com/Vimalnegi03/GenerativeAI",
    image: "/GenAI.png",
    link:"https://github.com/Vimalnegi03/GenerativeAI"
  },
  {
    name:"AI_Video Generator",
    desc:"Share your videos on our platform and watch others shared videos.",
    link:"https://github.com/Vimalnegi03/Ai_Video",
    image:"./AI_video.png",
    live:"https://ai-video-rg5u.vercel.app/"
  },
    {
    name:"LMS",
    desc:"LMS is a platform that enables you to learn from top tutors so what are you waiting for start your journey today.",
    link:"https://github.com/Vimalnegi03/LMS",
    image:"./online.png",
    live:"https://lms-v1wq.onrender.com/"
  },
     {
    name:"DSA using C++",
    desc:"This repo contains c++ code from basic to advance",
    image:"./DSA.png",
  },

];

const achievements = [
  "B.Tech Graduate (2025)",
  "GATE Qualified",
  "Open source AI/Web contributor",
  "Active tech blogger (Hashnode)",
  "Deployed several full-stack web and AI projects",
];

export default function App() {
  // Dark mode state
  const [dark, setDark] = useState(false);

  // Theme colors
  const theme = dark
    ? {
        bg: "#15171D",
        text: "#f8fafd",
        card: "#232535",
        nav: "#191b22",
        border: "#313346",
        accent: "#43cc95",
        accentDark: "#3576fa",
        shadow: "0 3px 22px #25273f2c",
        section: "#181926",
        link: "#58e1c8",
        faint: "#384362",
      }
    : {
        bg: "linear-gradient(125deg,#ecf7ff 0%,#fafdff 70%,#e1fbf5 100%)",
        text: "#25272e",
        card: "#f2f6ff",
        nav: "#fff",
        border: "#ececf0",
        accent: "#43cc95",
        accentDark: "#3576fa",
        shadow: "0 2px 13px #dae8fff2",
        section: "#fff",
        link: "#3576fa",
        faint: "#e6ecf8",
      };

  return (
   <div
  className="root"
  style={{
    background: theme.bg,
    color: theme.text,
    minHeight: "100vh",
    margin: 0,
    padding: 0,
  }}
>
  {/* Navbar */}
  <nav className="navbar" style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "22px 8vw",
    background: theme.nav,
    borderBottom: `1.5px solid ${theme.border}`,
    flexWrap: "wrap",
    position: "sticky",
    top: 0,
    zIndex: 10,
  }}>
    <span
      className="logo"
      style={{
        fontWeight: 900,
        fontSize: 28,
        color: theme.accentDark,
        letterSpacing: "1.2px",
      }}
    >
      Vimal Negi
    </span>

    <div className="nav-links" style={{
      display: "flex",
      gap: 32,
      fontWeight: 600,
      flexWrap: "wrap"
    }}>
      <a href="#about" style={{ ...navA(theme) }}>About</a>
      <a href="#stack" style={navA(theme)}>Tech Stack</a>
      <a href="#projects" style={navA(theme)}>Projects</a>
      <a href="#achievements" style={navA(theme)}>Achievements</a>
      <a href="#contact" style={navA(theme)}>Contact</a>
      <button
        aria-label="Toggle color theme"
        style={{
          background: dark ? "#f8fafd" : "#25293a",
          color: dark ? "#15171D" : "#fff",
          fontWeight: 700,
          border: 0,
          borderRadius: 30,
          fontSize: 16,
          padding: "8px 20px",
          marginLeft: 10,
          cursor: "pointer",
          boxShadow: "0 1px 5px #77eeec61",
        }}
        onClick={() => setDark((v) => !v)}
      >
        {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  </nav>


      {/* Hero */}
      <header style={{
        textAlign: "center", padding: "62px 0 50px 0",
        background: dark ? "linear-gradient(90deg,#232336 60%,#181926 120%)" : "linear-gradient(96deg,#f2f6ff 60%,#eafdfe 100%)",
        borderBottom: `1px solid ${theme.border}`,
      }}>
        <h1 style={{
          fontSize:50, margin:0, fontWeight:900, color: dark ? "#f8fafd" : "#232a3a"
        }}>Hi, I'm Vimal Negi</h1>
        <h2 style={{
          fontSize:27, fontWeight:700, marginTop:12, color: theme.accentDark
        }}>Full Stack & AI Developer</h2>
        <p style={{
          fontSize:18, marginTop:18, color: dark ? "#b7d1ee" : "#39475a"
        }}>
          Web: MERN | Docker | Redis | SQL | Tailwind<br/>
          AI: Vector DBs | Knowledge Graphs | Langchain (+Graph/Smith)<br/>
          B.Tech 2024 • GATE Qualified • Open Source Contributor
        </p>
        <div style={{
          marginTop:32, display:"flex", justifyContent:"center", gap: 18, flexWrap:"wrap"
        }}>
 <a href="mailto:vimalnegi2003@gmail.com" style={linkBtn(theme)}>📧 Email</a>
<a href="https://www.linkedin.com/in/vimal-negi/" target="_blank" rel="noopener noreferrer" style={linkBtn(theme)}>💼 LinkedIn</a>
<a href="https://hashnode.com/@vimalnegi03" target="_blank" rel="noopener noreferrer" style={linkBtn(theme)}>✍️ Hashnode</a>
<a href="https://github.com/Vimalnegi03" target="_blank" rel="noopener noreferrer" style={linkBtn(theme)}>🐙 GitHub</a>

        </div>
      </header>

      {/* About */}
      <section id="about" style={{ ...section(theme), paddingBottom:42 }}>
        <SectionTitle theme={theme}>About Me</SectionTitle>
        <p style={{ fontSize:17, color: theme.text, lineHeight:1.6, marginBottom:0 }}>
          I'm a curious and determined engineer recently graduated with a B.Tech, recognized for qualifying GATE. Experienced in full MERN stack, DevOps with Docker and Redis, and advanced AI prototyping with LangChain, vector DBs, and knowledge graphs. I thrive on building scalable products and sharing technical insights with the community.
        </p>
      </section>

      {/* Tech Stack */}
      <section id="stack" style={{ ...section(theme), background: theme.faint, paddingTop:54 }}>
        <SectionTitle theme={theme}>Technology Stack</SectionTitle>
        <div style={techGrid}>
          {Object.entries(logos).map(([name, url]) => (
            <div key={name} style={techCard(theme)}>
              <img src={url} alt={name} style={styles.techIcon} loading="lazy"/>
              <span>{name}</span>
            </div>
          ))}
          <div style={{...techCard(theme), fontSize: 28}}>🦜 LangChain</div>
          <div style={{...techCard(theme), fontSize: 28}}>🔗 LangGraph</div>
          <div style={{...techCard(theme), fontSize: 28}}>🧠 Vector DB</div>
        </div>
      </section>

      {/* Projects */}
   <section id="projects" style={{ ...section(theme), paddingBottom: 35 }}>
  <SectionTitle theme={theme}>Projects</SectionTitle>

  <div className="proj-grid">
    {projects.map((p, i) => (
      <div key={i} style={projCard(theme)}>
        <img
          src={p.image}
          alt={p.name + " screenshot"}
          style={styles.projImg}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <h3 style={{ fontWeight: 800, color: theme.accentDark, margin: "17px 0 3px 0" }}>{p.name}</h3>
        <p style={{ fontSize: 15.8, color: theme.text, minHeight: 60 }}>{p.desc}</p>

        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginTop: 10 }}>
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            style={projBtn(theme)}
          >
            🔗 GitHub
          </a>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ ...projBtn(theme), background: theme.accentDark }}
            >
              🌐 Live Demo
            </a>
          )}
        </div>
      </div>
    ))}
  </div>
</section>



      {/* Achievements */}
      <section id="achievements" style={{
        ...section(theme), background: theme.faint, paddingBottom:37
      }}>
        <SectionTitle theme={theme}>Achievements</SectionTitle>
        <ul style={{
          fontSize:17, margin:0, paddingLeft:28, color: theme.text, display:"grid", gap:8
        }}>
          {achievements.map((a,i)=>(
            <li key={i} style={{padding:"6px 0", margin:"4px 0", lineHeight:1.4}}>{a}</li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" style={section(theme)}>
        <SectionTitle theme={theme}>Contact & Connect</SectionTitle>
        <div style={{ fontSize: 18, marginBottom:8 }}>
          📧 Email: &nbsp;
          <a href="mailto:vimalnegi2003@gmail.com" style={linkA(theme)}>
            vimalnegi2003@gmail.com
          </a>
        </div>
        <div style={{ fontSize:18, marginBottom:4 }}>
          🔗 LinkedIn: &nbsp;
          <a href="https://www.linkedin.com/in/vimal-negi/" target="_blank" rel="noopener noreferrer" style={linkA(theme)}>
            Vimal Negi
          </a>
        </div>
        <div style={{ fontSize:18 }}>
          ✍️ Hashnode: &nbsp;
          <a href="https://hashnode.com/@vimalnegi03" target="_blank" rel="noopener noreferrer" style={linkA(theme)}>
            @vimalnegi03
          </a>
        </div>
        <div style={{marginTop:24, color:theme.accentDark}}>Let’s collaborate on something meaningful!</div>
      </section>

      <footer style={{
        marginTop:38, padding:"20px 0", textAlign:"center",
        color: dark ? "#9de7db" : "#929faf", fontSize:15, background: dark ? "#1a1d2b" : "#fafdff"
      }}>
        &copy; {new Date().getFullYear()} Vimal Negi 
      </footer>

      <style>
        
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;900&display=swap');
        body, #root {
          font-family: Montserrat,Arial,sans-serif;
          margin:0; padding:0;
        }
        a { color: ${theme.link}; text-decoration: none; }
        a:hover { text-decoration: underline; 
  transform: scale(1.03);
  opacity: 0.95;
}

      .proj-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 16px;
}

@media (max-width: 900px) {
  .proj-grid {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }
}

@media (max-width: 600px) {
  .proj-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }
}

.proj-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--card-bg-color, #f2f6ff);
  border-radius: 16px;
  box-shadow: var(--card-shadow, 0 2.7px 14px #cdecef79);
  padding: 0 12px 20px 12px;
  transition: transform 0.14s;
  cursor: pointer;
}

.proj-card:hover {
  transform: scale(1.02);
}

.proj-img {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: contain;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background: #daf6ef;
  border-bottom: 1.5px solid #43cc95;
}

.proj-title {
  font-weight: 800;
  color: var(--accent-dark, #3576fa);
  margin: 17px 0 3px 0;
  font-size: 1.2rem;
  text-align: center;
}

.proj-desc {
  font-size: 1rem;
  color: var(--text-color, #333);
  min-height: 60px;
  text-align: center;
  margin: 0 0 12px 0;
}

.proj-btn-container {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

.proj-btn {
  padding: 7px 18px;
  border-radius: 7px;
  font-weight: 700;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  background-color: var(--accent, #43cc95);
  transition: background-color 0.3s ease;
}

.proj-btn:hover {
  background-color: var(--accent-dark, #3576fa);
}

      `}
      </style>
    </div>
  );
}

// --- Helper components and styles ---

function SectionTitle({theme, children}) {
  return (
    <h2 style={{
      fontSize: 27, fontWeight: 700, color: theme.accentDark,
      margin: "0 0 20px 0", letterSpacing: 1.1
    }}>{children}</h2>
  );
}

const navA = (theme) => ({
  fontSize: 17,
  color: theme.text,
  textDecoration: "none",
  padding: "6px 0",
  background: "none",
  border: "none",
  margin:0,
  transition: "color 0.2s, border 0.2s"
});

const linkBtn = (theme) => ({
  display: "inline-block",
  background: theme.accent,
  color: "#fff",
  borderRadius: 6,
  fontWeight: 600,
  padding: "9px 20px",
  fontSize: 16,
  textDecoration: "none",
  border: "none",
  margin: "0 3px",
  boxShadow: "0 1px 12px #1ee7a330",
  transition: "background .21s"
});

const linkA = (theme) => ({
  color: theme.link,
  textDecoration: "none",
  fontWeight: 700
});

const section = (theme) => ({
  padding: "48px 10vw",
  background: theme.section,
  margin: 0
});

const styles = {
  techIcon: { width: 40, height: 40, marginBottom: 2 },
  projImg: {
    width:"100%", objectFit:"cover", height:170,
    background:"#daf6ef", borderTopLeftRadius:15, borderTopRightRadius:15,
    borderBottom:"1.5px solid #43cc95"
  }
};

function techCard(theme) {
  return {
    background: theme.card,
    boxShadow: theme.shadow,
    borderRadius: 11,
    padding: "13px 18px 11px",
    fontWeight: 700,
    fontSize: 16,
    minWidth: 104,
    display:"flex", flexDirection:"column", alignItems:"center", gap:6,
    color: theme.text
  };
}

const techGrid = {
  display:"flex", flexWrap:"wrap", gap:"28px 32px", marginTop:20, justifyContent:"center"
};

const projGrid = {
  display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap:32, marginTop:16
};

function projCard(theme) {
  return {
    background: theme.card,
    borderRadius: 16,
    boxShadow: theme.shadow,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transition: "transform .14s"
  };
}

function projBtn(theme) {
  return {
    color:"#fff", background:theme.accent,
    borderRadius:7, marginTop:8,
    padding:"7px 18px", fontWeight:700,
    textDecoration:"none", fontSize:"16px",
    letterSpacing:"0.02em",
    marginBottom:10,
    transition:"background .21s"
  }
}

