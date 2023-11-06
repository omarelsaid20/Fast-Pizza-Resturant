import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseNumItem,
  getCurrentQuantityById,
  increaseNumItem,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <div className="flex items-center gap-1 md:gap-3 ">
      <Button type={"round"} onClick={() => dispatch(decreaseNumItem(pizzaId))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type={"round"} onClick={() => dispatch(increaseNumItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
