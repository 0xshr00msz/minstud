import { useState } from 'react';
import Pagebreak from './Pagebreak.tsx'
import kaamulan from './assets/kaamulan.jpg'
import history from './assets/history.jpg'
import beliefs from './assets/beliefs.jpg'

export default function Culture() {
  const [activeTribe, setActiveTribe] = useState<string | null>(null);
  const [activeTribeContent, setActiveTribeContent] = useState<string | null>(null);

  const tribeContent: { [key: string]: string } = {
  bukidnon: `The term <b>Bukidnon</b> translates to <b>people of the mountains</b>. In the past, they migrated from riverbanks and coastal regions to the highlands in order to distance themselves from early Christian settlers and colonists.`,
  higaonon: `The Higaonon people, who live primarily in northern Bukidnon, are traditional farmers. The name <b>Higaonon</b> is derived from <b>higa</b> (coastal plains) and <b>gaon</b> (to ascend), indicating their movement from coastal areas to the mountains, similar to the Bukidnon tribe. They maintain a traditional way of life and have a rich spiritual heritage.`,
  manobo: `Residing in the municipalities of Pangantucan, Kalilangan, and Kadingilan, the Manobo people speak a unique language distinct from other ethnic groups in the province.`,
  matigsalug: `The Matigsalug, which translates to <b>people along the Salug River</b>, live in parts of the Tegwa-Salug Valley in the San Fernando municipality. They are recognized as a distinct subgroup, separate from the broader Manobo ethnolinguistic group.`,
  talaandig: `Primarily located in the municipalities of Lantapan and Talakag, the Talaandig are known for their expertise in embroidery and patchwork. They are semi-sedentary and have a rich cultural heritage that includes traditional music, dance, and rituals.`,
  tigwahanon: `This group resides along the Tigwa River and in the Tigwa-Salug Valley. They are known for their loud speech and serve as traders among the hinterland ethnic groups, facilitating the exchange of goods and cultural practices.`,
  umayamnon: `A highly nomadic subgroup of the Manobo, the Umayamnon live along the watershed of Umayam River. They are noted for their skills in beadwork and brass jewelry.`,
  };


  const showContent = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = e.currentTarget.id; // Get the id of the clicked element
    setActiveTribe(id); // Set the active tribe
    setActiveTribeContent(tribeContent[id] || "No content available"); // Map id to content or show fallback
  };

  return (
    <div id="culture">
      <div>
        <Pagebreak/>
        <h2>The People and Tribes of Bukidnon</h2>
        <p>
          For centuries, the Bukidnon people, also called "Buquidnons," have lived along the northern Pulangi River and the Tagoloan and Cagayan Rivers. These are proud and resilient forest dwellers, bound by their heritage and deep connection to the land.
        </p>
        <img src={kaamulan}/>
        <p>The province is home to <b>seven indigenous tribes</b>:</p>
        <div className="list" id="tribes">
          <div id="bukidnon" onClick={showContent} className={activeTribe === 'bukidnon' ? 'clicked' : ''}>Bukidnon</div>
          <div id="higaonon" onClick={showContent}  className={activeTribe === 'higaonon' ? 'clicked' : ''}>Higaonon</div>
          <div id="manobo" onClick={showContent}  className={activeTribe === 'manobo' ? 'clicked' : ''}>Manobo</div>
          <div id="matigsalug" onClick={showContent} className={activeTribe === 'matigsalug' ? 'clicked' : ''}>Matigsalug</div>
          <div id="talaandig" onClick={showContent} className={activeTribe === 'talaandig' ? 'clicked' : ''}>Talaandig</div>
          <div id="tigwahanon" onClick={showContent} className={activeTribe === 'tigwahanon' ? 'clicked' : ''}>Tigwahanon</div>
          <div id="umayamnon" onClick={showContent} className={activeTribe === 'umayamnon' ? 'clicked' : ''}>Umayamnon</div>
        </div>
      {activeTribe ?
          <div>
            <h2 style={{textTransform: "capitalize", fontSize: "25px", paddingTop: "10px"}}>{activeTribe}</h2>
	    <div className='tribe-content'
        	dangerouslySetInnerHTML={{ __html: activeTribeContent || "<p>Select a tribe to see details.</p>" }}
      	    ></div>
          </div> : <h3 style ={{color: "black"}}>Select a tribe to see details.</h3>} 
      </div>
      <Pagebreak/>
      <div>
        <h2>A Glimpse into Bukidnon's History</h2>
        <p>
          In 1889, the population of Bukidnon was estimated at 13,000. These communities lived in "tulugan"—small tribal groups governed by a datu. Each tulugan was a tightly knit community, led by a central datu or elder. The datus were not only leaders but keepers of the epic Ulaguing, which they sang during gatherings, telling stories of their people's past.
        </p>
        <br />
        <p>
          The Spanish arrived in the 1860s, bringing Jesuit missionaries who established the first parish in Sumilao in 1880. By the early 1900s, many Bukidnons had converted to Christianity while retaining elements of their animist beliefs. This blend of old and new shaped Bukidnon's spiritual identity.
        </p>
	<img src={history} />
      </div>
      <Pagebreak/>
      <div>
        <h2>Beliefs of the Bukidnon Tribes</h2>
        <p>
          Central to Bukidnon's identity is its connection to nature and spirituality. The tribes believe in four gods, each representing a direction:
        </p>
        <div className="list" id="beliefs">
          <div>Domalongdong (North)</div>
          <div>Ongli (South)</div>
          <div>Tagolambong (East)</div>
          <div>Magbabaya (West)</div>
        </div>
        <p>
          These deities guide and protect their people, symbolizing the harmony between the tribes and the natural world.
        </p>
	<img src={beliefs}/>
      </div>
    </div>
  );
}

