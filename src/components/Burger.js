import { ReactComponent as BurgerIcon } from "../img/Hamburger_icon.svg";

const Burger = ({ handleMenuShow }) => {

  return (
    <BurgerIcon className="Product__burger burger" fill="#9197B3" onClick={handleMenuShow} />
  );
};

export default Burger;