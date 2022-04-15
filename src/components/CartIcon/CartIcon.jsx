import { ReactComponent as ShoppingIcon } from "../../assets/18764800-shopping-bag.svg";

import "./styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
