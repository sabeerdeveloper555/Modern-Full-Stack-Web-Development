import './App.css'

function App() {
  return (
    <main className="page">
      <article className="profile-card">
        <header className="profile-header">
          <p className="eyebrow">A little about me</p>
          <h1>Sabeer Alam</h1>
          <p className="role">Learning modern full-stack web development</p>
        </header>

        <div className="profile-content">
          <section className="profile-section">
            <h2>About me</h2>
            <p>
              I have a BSCS degree from Karachi Institute of Economics and
              Technology (KIET). I&apos;m currently learning modern full-stack
              web development at Saylani IT Center.
            </p>
          </section>

          <section className="profile-section">
            <h2>My hobbies</h2>
            <p>
              I enjoy going to the gym, developing software applications, and
              spending time with friends.
            </p>
          </section>

          <section className="profile-section profile-section--wide">
            <h2>My goal</h2>
            <p>
              I want to become a full-stack developer and learn how to build
              complex software applications.
            </p>
          </section>
        </div>
      </article>
    </main>
  )
}

export default App
