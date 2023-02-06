import Burger from "./Burger";

const Customers = ({ handleMenuShow }) => {
  return (
    <section className="Product">
      <div className="Product__top">
        <h1 className="Product__title title">Product</h1>
        <Burger handleMenuShow={handleMenuShow} />
      </div>
    </section>
  );
};

export default Customers;