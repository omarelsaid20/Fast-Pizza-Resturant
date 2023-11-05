import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseNumItem, increaseNumItem } from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3 ">
      <Button type={"round"} onClick={() => dispatch(decreaseNumItem(pizzaId))}>
        -
      </Button>
      <Button type={"round"} onClick={() => dispatch(increaseNumItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
