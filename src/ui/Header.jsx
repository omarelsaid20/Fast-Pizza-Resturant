import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="font-pizza flex items-center justify-between border-b-2 border-stone-400 bg-yellow-500 px-4 py-3 uppercase">
      <Link to={"/"} className="tracking-widest">
        React Pizza
      </Link>
      <SearchOrder />

      <UserName />
    </header>
  );
}

export default Header;
