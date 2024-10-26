import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const branches = [
  {
    name: "Addis Abeba / Mexico",
    position: [9.010216074734041, 38.745346069335945],
  },
  {
    name: "Addis Abeba / Bole",
    position: [8.989149724779885, 38.79012823104859],
  },
  {
    name: "Addis Abeba / Olyopia",
    position: [9.004493948133025, 38.7674903869629],
  },
  {
    name: "Addis Abeba / Yeka",
    position: [9.016478520544965, 38.788787126541145],
  },
  {
    name: "Bahirdar / Giorgis",
    position: [11.594606040534348, 37.38760113716126],
  },
  {
    name: "Bahirdar / Abay Mado",
    position: [11.601416376115239, 37.420978546142585],
  },
  {
    name: "Gondar",
    position: [12.612259388384967, 37.46795029512321],
  },
  {
    name: "Arbamnch",
    position: [6.023799363787255, 37.55144119262696],
  },
  {
    name: "Mekelle",
    position: [13.499477321719816, 39.480915069580085],
  },
  {
    name: "Dire Dawa",
    position: [9.601934729613406, 41.84597969055176],
  },
  {
    name: "Adama",
    position: [8.538923421610123, 39.27200317382813],
  },
  {
    name: "Jimma",
    position: [7.671524501131187, 36.84076309204102],
  },
  {
    name: "Hawassa",
    position: [7.049104960505505, 38.481674194335945],
  },
];

function BranchesMap() {
  return (
    <div
      className="bg-primary-bg h-96 w-full relative pt-16 text-center text-gray-200 mb-36"
      id="branchs"
    >
      <h3 data-aos="fade-up" className="font-semibold mb-2">
        Branches
      </h3>
      <h2 data-aos="fade-up" className="font-semibold text-3xl mb-5">
        Discover Our Branches and Unlock Nearby Adventures!
      </h2>
      <MapContainer
        center={[9.028865339591997, 38.75221252441407]}
        zoom={5}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {branches.map((branch) => (
          <Marker position={branch.position} key={branch.name}>
            <Popup>
              <span> {branch.name}</span>
            </Popup>
          </Marker>
        ))}
        {/* <Marker position={[9.028865339591997, 38.75221252441407]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
}

export default BranchesMap;
