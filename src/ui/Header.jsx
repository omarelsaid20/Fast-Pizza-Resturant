import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className=" font-pizza z-20 flex items-center justify-between border-b-2 border-stone-400 bg-cyan-700 px-4 py-3 uppercase">
      <Link
        to={"/"}
        className="text-xl font-bold tracking-widest text-stone-200"
      >
        React Pizza
      </Link>
      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
