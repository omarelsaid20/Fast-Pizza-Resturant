import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        placeholder="Search order # "
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[130px] rounded-full bg-yellow-100 px-4 py-2 transition-all duration-500 placeholder:text-slate-500 focus:opacity-50 focus:outline-none focus:ring focus:ring-yellow-300 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
