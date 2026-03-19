import { useSearchParams } from "react-router-dom";
import Select from "./Select";

export default function SortBy({ options }) {
  const [searchparams, setSearchParams] = useSearchParams();
  const sortBy = searchparams.get("sortBy") || "";

  function handleChange(e) {
    searchparams.set("sortBy", e.target.value);
    setSearchParams(searchparams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}
