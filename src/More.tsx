import { useState } from 'react'

export default function More() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleOnClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div id="more">
        <h2>Learn More About Bukidnon</h2>
        <div className='dropdown-menu'>
          <div className='dropdown-button' onClick={() => handleOnClick(0)}><h4>Natural Wonders and Cultural Treasures</h4></div>
            {activeIndex === 0 &&
            <div className='dropdown-content'>
              <h3>Header</h3>
              <p>Para</p>
            </div>}
          <div className='dropdown-button' onClick={() => handleOnClick(1)}><h4>Challenges and Hopes for the Future</h4></div>
            {activeIndex === 1 &&
            <div className='dropdown-content'>
              <h3>Header</h3>
              <p>Para</p>
            </div>}
          <div className='dropdown-button' onClick={() => handleOnClick(2)}><h4>Did You Know? (Interesting Facts)</h4></div>
            {activeIndex === 2 &&
            <div className='dropdown-content'>
              <h3>Header</h3>
              <p>Para</p>
            </div>}
        </div>
    </div>
  );
}

