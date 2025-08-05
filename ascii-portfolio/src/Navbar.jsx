export default function Navbar() {
  return (
    <div className="navbar">
      <div className="scrolling-links">
        <span>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
          {' • '}
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          {' • '}
          <a href="https://www.strava.com/athletes/your-id" target="_blank" rel="noopener noreferrer">Strava</a>
        </span>
      </div>
    </div>
  );
}