import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector((state) => state.user.userName);
  return (
    <div className=" grid">
      <img
        className=" fixed left-0 top-0 z-0 blur-sm"
        src="https://c.wallhere.com/photos/b1/5b/2560x1600_px_food_Pizza-1204032.jpg!d"
        alt="pizaa"
      />
      <div className="sm:my-25 z-10 my-20 h-[50vh] rounded-2xl bg-stone-200/50  py-20 text-center">
        <h1 className="mb-4 text-xl font-semibold  md:text-3xl">
          The best pizza.
          <br />
          <span className="text-cyan-800">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {userName === "" ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Ordering now , {userName}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
