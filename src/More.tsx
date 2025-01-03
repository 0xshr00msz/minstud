import { useState } from "react";

export default function More() {
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  const handleOnClick = (index: number) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index)); // Close the clicked dropdown if already open
    } else {
      setActiveIndices([...activeIndices, index]); // Open the clicked dropdown
    }
  };

  return (
    <div id="more">
      <h2>Learn More About Bukidnon</h2>
      <p>(Click to show more)</p>
      <div className="dropdown-menu">
        {/* Natural Wonders and Cultural Treasures */}
        <div
          className={`dropdown-button ${activeIndices.includes(0) ? "dropdown-clicked" : ""}`}
          onClick={() => handleOnClick(0)}
          id='one'
	>
          <h4>Natural Wonders and Cultural Treasures</h4>
        </div>
        {activeIndices.includes(0) && (
          <div className="dropdown-content">
            <p>
              Bukidnon is known for its lush landscapes and rich cultural
              heritage. Its rolling hills, verdant plains, and the majestic
              Kitanglad Mountain Range make it a haven for nature enthusiasts.
              The Kaamulan Festival celebrates the traditions of the Bukidnon,
              Higaunon, Manobo, Talaandig, Tigwahanon, Matigsalug, and
              Umayamnon tribes.
            </p>
          </div>
        )}

        {/* Challenges and Socioeconomic Issues */}
        <div
          className={`dropdown-button ${activeIndices.includes(1) ? "dropdown-clicked" : ""}`}
          onClick={() => handleOnClick(1)}
          id='two'
	>
          <h4>Challenges and Socioeconomic Issues</h4>
        </div>
        {activeIndices.includes(1) && (
          <div className="dropdown-content">
            <p>
              <strong>Land Conflicts:</strong> Agribusinesses displaced
              indigenous communities, intensifying land disputes.{" "}
              <a
                href="https://www.tandfonline.com/doi/pdf/10.1080/00472338380000111"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </p>
            <p>
              <strong>Environmental Degradation:</strong> From 2002 to 2023,
              Bukidnon lost 2,190 hectares of humid primary forest, affecting
              ecosystems and livelihoods.{" "}
              <a
                href="https://www.globalforestwatch.org/dashboards/country/PHL/16/?category=forest-change"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </p>
            <p>
              <strong>Violation of Indigenous Rights:</strong> Indigenous
              communities face encroachment and marginalization.{" "}
              <a
                href="https://www.protectionclusterphilippines.org/?p=387"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </p>
          </div>
        )}

        {/* Cultural Practices: Conflict Resolution */}
        <div
          className={`dropdown-button ${activeIndices.includes(2) ? "dropdown-clicked" : ""}`}
          onClick={() => handleOnClick(2)}
          id='three'
	>
          <h4>Cultural Practices: Conflict Resolution</h4>
        </div>
        {activeIndices.includes(2) && (
          <div className="dropdown-content">
            <p>
              The Higaonon tribe utilizes the "paghusay" system, involving
              community elders, rituals, and consensus. This process emphasizes
              spiritual integration and oral traditions.{" "}
              <a
                href="https://www.oxfordresearchgroup.org.uk/blog/weavers-of-peace-the-higaonon-tribe-in-the-philippines"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </p>
          </div>
        )}

        {/* Activism and Social Movements */}
        <div
          className={`dropdown-button ${activeIndices.includes(3) ? "dropdown-clicked" : ""}`}
          onClick={() => handleOnClick(3)}
          id='four'
	>
          <h4>Activism and Social Movements</h4>
        </div>
        {activeIndices.includes(3) && (
          <div className="dropdown-content">
            <p>
              <strong>Student Activism:</strong> Protests against perceived
              suppression of student rights at Central Mindanao University.{" "}
              <a
                href="https://www.bulatlat.com/news/3-26/3-26-studentactivists.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </p>
            <p>
              <strong>Farmers' Marches:</strong> Protests for agrarian reform
              under the Comprehensive Agrarian Reform Program Extension with
              Reforms (CARPER).{" "}
              <a
                href="https://mindanews.com/farmers-rally-for-carper-implementation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </p>
            <p>
              <strong>Environmental Advocacy:</strong> Protests advocating for
              sustainable practices and land protection.{" "}
              <a
                href="https://www.ucanews.com/news/green-activists-farmers-mark-earth-day-with-protests/75846"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </p>
          </div>
        )}

        {/* References and Further Reading */}
        <div
          className={`dropdown-button ${activeIndices.includes(4) ? "dropdown-clicked" : ""}`}
          onClick={() => handleOnClick(4)}
	  id='five'
        >
          <h4>References and Further Reading</h4>
        </div>
        {activeIndices.includes(4) && (
          <div className="dropdown-content">
            <ul>
              <li>
                <a
                  href="https://www.tandfonline.com/doi/pdf/10.1080/00472338380000111"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tandfonline - Agrarian Conflicts in Bukidnon
                </a>
              </li>
              <li>
                <a
                  href="https://www.oxfordresearchgroup.org.uk/blog/weavers-of-peace-the-higaonon-tribe-in-the-philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oxford Research Group - Higaonon Tribe Peace Practices
                </a>
              </li>
              <li>
                <a
                  href="https://www.rappler.com/philippines/mindanao/over-dozen-hurt-central-mindanao-university-guards-clash-farmers-bukidnon-november-21-2023/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rappler - CMU Farmers Clash
                </a>
              </li>
              <li>
                <a
                  href="https://mindanews.com/farmers-rally-for-carper-implementation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MindaNews - Farmers Rally for CARPER Implementation
                </a>
              </li>
              <li>
                <a
                  href="https://www.ucanews.com/news/green-activists-farmers-mark-earth-day-with-protests/75846"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  UCANews - Green Activists Mark Earth Day with Protests
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

