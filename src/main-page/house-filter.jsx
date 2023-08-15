import { useHistory } from "react-router-dom";
const HouseFilter = ({ allhouses }) => {
  const history = useHistory();

  const countries = allhouses
    ? Array.from(new Set(allhouses.map((h) => h.country)))
    : [];
  countries.unshift(null);

  const onSearchChange = (e) => {
    const country = e.target.value;
    history.push(`/searchresults/${country}`)
  };
  return (
    <div className="row mt-3">
      <div className="offset-md-2 col-md-4">
        Look for your dream house in country:
      </div>
      <div col-md-4 mb-3>
        <select className="form-select" onChange={onSearchChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HouseFilter;
