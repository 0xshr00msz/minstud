import { useState } from 'react'

export default function More() {
  const [isShown, setIsShown] = useState<Boolean>(false);

  const handleOnClick = () => {
	setIsShown(!isShown)
  }

  return (
    <div id="more">
	<h2>Learn More About Bukidnon</h2>
	<div className='dropdown-menu'>
	  <div className='dropdown-button' onClick={handleOnClick}><h4>Natural Wonders and Cultural Treasures</h4></div>
	    {isShown && 
	    <div className='dropdown-content'>
	      <h3>Header</h3>
	      <p>Para</p>
	    </div>} 
	  <div className='dropdown-button'><h4>Challenges and Hopes for the Future</h4></div>
	    {isShown && 
	    <div className='dropdown-content'>
	      <h3>Header</h3>
	      <p>Para</p>
	    </div>} 
	  <div className='dropdown-button'><h4>Did You Know? (Interesting Facts)</h4></div>
	    {isShown && 
	    <div className='dropdown-content'>
	      <h3>Header</h3>
	      <p>Para</p>
	    </div>} 
	</div>
    </div>
  );
}

