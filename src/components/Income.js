import Burger from "./Burger";

const Income = ({ handleMenuShow }) => {
  return (
    <section className="Product">
      <div className="Product__top">
        <h1 className="Product__title title">Income</h1>
        <Burger handleMenuShow={handleMenuShow} />
      </div>
    </section>
  );
};

export default Income;