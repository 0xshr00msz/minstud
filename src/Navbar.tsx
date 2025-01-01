export default function NavBar() {
  return (
      <div className="Nav">
        {/* Include a valid logo element */}
        <img src="logo.png" alt="Logo" className="logo" />
        {/* Add list items */}
        <a href="#intro">Intro</a>
        <a href="#culture">Culture</a>
        <a href="#map">Map</a>
        <a href="#issues">Issues</a>
	<a href="#facts">Facts</a>
      </div>
  );
}

