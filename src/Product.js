const Product = () => {
  return (
    <section className="Product">
      <h1 className="Product__title title">Hello Evano 👋🏼,</h1>
      <div className="Product__customers__list customers__list">
        <div className="customers__list__top">
          <div className="customers__list__info">
            <h2 className="customers__list__title">All Customers</h2>
            <p className="customers__list__active">Active Members</p>
          </div>
          <input className="customers__list__search" type="text" placeholder="Search" />
        </div>
        <div className="customers__list__table">
          <table>
            <tr className="customers__list__table__top">
              <th>Customer Name</th>
              <th>Company</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Country</th>
              <th>Status</th>
            </tr>
            <tr>
              <th>Jane Cooper</th>
              <th>Microsoft</th>
              <th>(225) 555-0118</th>
              <th>jane@microsoft.com</th>
              <th>United States</th>
              <th>Active</th>
            </tr>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Product;