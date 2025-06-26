import { useState } from 'react';
import './App.css';

function App() {
  const [page, setPage] = useState('home');
  const [email, setEmail] = useState('');

  const handleMailingListSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <>
      <nav className="navbar">
        <img src="/src/assets/meba.jpg" alt="MEBA Logo" className="logo" />
        <ul>
          <li onClick={() => setPage('home')}><b>Home</b></li>
          <li onClick={() => setPage('eboard')}><b>Eboard</b></li>
          <li onClick={() => setPage('application')}><b>Application</b></li>
        </ul>
      </nav>

      {page === 'home' && (
        <div id="home">
          <h1 id="Home">Middle East Business Association</h1>
          <div className="about">
            <p className="description">
              MEBA is a Stern club that teaches students about business.
            </p>
          </div>

          <div className="mailing-list">
            <button>OUR MAILING LIST</button>
            <p>Join our mailing list!</p>
            <form onSubmit={handleMailingListSubmit}>
              <label htmlFor="email">Email:</label><br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              /><br /><br />
              <input type="submit" value="Subscribe" />
            </form>
          </div>

          <div className="events"></div>
        </div>
      )}

      {page === 'eboard' && (
        <div id="eboard">
          <h1>MEBA Eboard</h1>
          <p>This is the Eboard page for MEBA.</p>
          <p>Here you can find information about the executive board members.</p>
          <div className="members">
            <h2>Executive Board Members</h2>
            <div className="member">
              <h3>Rami Awad</h3>
            </div>
          </div>
        </div>
      )}

      {page === 'application' && (
        <div id="application">
          <h1>MEBA Application Form</h1>
          <p>
            Are you interested in applying to our various mentorship programs? Fill out the form below to get started!
          </p>
          <div className="form-container">
            <form>
              <label htmlFor="name">Name:</label><br />
              <input type="text" id="name" name="name" placeholder="Name" required /><br /><br />

              <label htmlFor="email-app">Email:</label><br />
              <input type="email" id="email-app" name="email" placeholder="Email" required /><br /><br />

              <label htmlFor="school">School:</label><br />
              <input type="text" id="school" name="school" placeholder="School" required /><br /><br />

              <label htmlFor="team">Which team would you like to join?</label><br />
              <input type="text" id="team" name="team" required /><br /><br />

              <label htmlFor="q1">Why do you want to join MEBA?:</label><br />
              <input type="text" id="q1" name="q1" required /><br /><br />

              <label htmlFor="resume">Resume:</label><br />
              <input type="file" id="resume" name="resume" /><br /><br />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
