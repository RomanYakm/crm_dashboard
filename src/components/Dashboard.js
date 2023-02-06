import Burger from "./Burger";

const Dashboard = ({ handleMenuShow }) => {
  return (
    <section className="Product">
      <div className="Product__top">
        <h1 className="Product__title title">Dashboard</h1>
        <Burger handleMenuShow={handleMenuShow} />
      </div>
    </section>
  );
};

export default Dashboard;