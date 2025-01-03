import './Graph.css'

export default function StaticMunicipalities() {
  const municipalities = [
    { name: 'Valencia City', population: 216546 },
    { name: 'Malaybalay City', population: 190712 },
    { name: 'Manolo Fortich', population: 113200 },
    { name: 'Quezon', population: 109624 },
    { name: 'Maramag', population: 108293 },
    { name: 'Talakag', population: 77027 },
    { name: 'Don Carlos', population: 69273 },
    { name: 'Lantapan', population: 65974 },
    { name: 'San Fernando', population: 63045 },
    { name: 'Pangantucan', population: 56580 },
    { name: 'Impasugong', population: 53863 },
    { name: 'Kitaotao', population: 53796 },
    { name: 'Libona', population: 48965 },
    { name: 'Kalilangan', population: 43711 },
    { name: 'Kibawe', population: 41897 },
    { name: 'Baungon', population: 37111 },
    { name: 'Cabanglasan', population: 36286 },
    { name: 'Kadingilan', population: 33735 },
    { name: 'Sumilao', population: 29531 },
    { name: 'Malitbog', population: 26741 },
    { name: 'Dangcagan', population: 26076 },
  ];

  return (
    <section>
      <h2>Population of Bukidnon</h2>
      <p>(As of the 2020 census, the province has a total population of 1,541,308)</p>
      <div className="chart">
        {municipalities.map((municipality, index) => (
          <div 
            key={index} 
            className="municipality-bar"
            style={{
              width: `${Math.ceil(municipality.population / 450)}px`
            }}
          >
            <span className="municipality-name">{municipality.name}</span>
            <span className="municipality-population">{municipality.population}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

