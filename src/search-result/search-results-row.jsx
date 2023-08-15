import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const SearchResultsRow = ({ house }) => {
  const setActive = () => {
    const [history] = useHistory
    history.push(`/house/${house.id}`);
  };
  return (
    <tr onClick={setActive}>
      <td>{house.address}</td>
      <td>{house.price}</td>
      <td>{house.likes}</td>
    </tr>
  );
};

export default SearchResultsRow;