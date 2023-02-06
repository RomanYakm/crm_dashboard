import Burger from "./Burger";

const Help = ({ handleMenuShow }) => {
  return (
    <section className="Product">
      <div className="Product__top">
        <h1 className="Product__title title">Help</h1>
        <Burger handleMenuShow={handleMenuShow} />
      </div>
    </section>
  );
};

export default Help;