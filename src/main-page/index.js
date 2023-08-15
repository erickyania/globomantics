import { useEffect, useMemo, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; //renamed BrowserRouter as --router---;
import "./main-page.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import SearchResults from "../search-result";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
//import { Switch } from "react-router-dom/cjs/react-router-dom.min";

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
    <Router>
      <div className="container">
        <Header subtitle="providing houses all over the world"></Header>
        <HouseFilter allhouses={allHouses}></HouseFilter>
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses}></SearchResults>
          </Route>
          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses}></HouseFromQuery>
          </Route>
          <Route path="/">
            <FeaturedHouse house={featuredHouses}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
