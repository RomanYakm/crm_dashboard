import Burger from "./Burger";

const Promote = ({ handleMenuShow }) => {
  return (
    <section className="Product">
      <div className="Product__top">
        <h1 className="Product__title title">Promote</h1>
        <Burger handleMenuShow={handleMenuShow} />
      </div>
    </section>
  );
};

export default Promote;