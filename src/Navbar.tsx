export default function NavBar() {
  return (
    <nav>
      <ul className="Nav">
        {/* Include a valid logo element */}
        <img src="logo.png" alt="Logo" className="logo" />
        {/* Add list items */}
        <li><a href="#intro">Intro</a></li>
        <li><a href="#culture">Culture</a></li>
        <li><a href="#map">Map</a></li>
        <li><a href="#issues">Issues</a></li>
      </ul>
    </nav>
  );
}

