import { useEffect, useMemo, useState } from "react";
import "./main-page.css";
import Header from "./header";

function App() {
  const [allHouses, setAllHouses] = useState([]);
  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouses = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }
  }, [allHouses]);

  return (
    <div className="container">
      <Header subtitle="providing houses all over the world"></Header>
    </div>
  );
}

export default App;
