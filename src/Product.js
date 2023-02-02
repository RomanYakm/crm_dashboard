const Product = () => {
  return (
    <section className="Product">
      <h1 className="Product__title title">Hello Evano 👋🏼,</h1>
      <div className="Product__customers__list customers__list">
        <div className="customers__list__info">
          <h2 className="customers__list__title">All Customers</h2>
          <p className="customers__list__active">Active Members</p>
        </div>
        <input className="customers__list__search" type="text" />
      </div>
    </section>
  );
};

export default Product;