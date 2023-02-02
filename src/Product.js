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
          <table className="customers__list__table__table">
            <tr className="customers__list__table__top">
              <th className="customers__list__table__heading">Customer Name</th>
              <th className="customers__list__table__heading">Company</th>
              <th className="customers__list__table__heading">Phone Number</th>
              <th className="customers__list__table__heading">Email</th>
              <th className="customers__list__table__heading">Country</th>
              <th className="customers__list__table__heading__status">Status</th>
            </tr>
            <tr className="customers__list__table__element__container">
              <td className="customers__list__table__element">Jane Cooper</td>
              <td className="customers__list__table__element">Microsoft</td>
              <td className="customers__list__table__element">(225) 555-0118</td>
              <td className="customers__list__table__element">jane@microsoft.com</td>
              <td className="customers__list__table__element">United States</td>
              <td className="customers__list__table__element__status__active">Active</td>
            </tr>
            <tr className="customers__list__table__element__container">
              <td className="customers__list__table__element">Floyd Miles</td>
              <td className="customers__list__table__element">Yahoo</td>
              <td className="customers__list__table__element">(205) 555-0100</td>
              <td className="customers__list__table__element">floyd@yahoo.com</td>
              <td className="customers__list__table__element">Kiribati</td>
              <td className="customers__list__table__element__status__inactive">Inactive</td>
            </tr>
            <tr className="customers__list__table__element__container">
              <td className="customers__list__table__element">Floyd Miles</td>
              <td className="customers__list__table__element">Yahoo</td>
              <td className="customers__list__table__element">(205) 555-0100</td>
              <td className="customers__list__table__element">floyd@yahoo.com</td>
              <td className="customers__list__table__element">Kiribati</td>
              <td className="customers__list__table__element__status__inactive">Inactive</td>
            </tr>
            <tr className="customers__list__table__element__container">
              <td className="customers__list__table__element">Floyd Miles</td>
              <td className="customers__list__table__element">Yahoo</td>
              <td className="customers__list__table__element">(205) 555-0100</td>
              <td className="customers__list__table__element">floyd@yahoo.com</td>
              <td className="customers__list__table__element">Kiribati</td>
              <td className="customers__list__table__element__status__active">Active</td>
            </tr>
            <tr className="customers__list__table__element__container">
              <td className="customers__list__table__element">Floyd Miles</td>
              <td className="customers__list__table__element">Yahoo</td>
              <td className="customers__list__table__element">(205) 555-0100</td>
              <td className="customers__list__table__element">floyd@yahoo.com</td>
              <td className="customers__list__table__element">Kiribati</td>
              <td className="customers__list__table__element__status__active">Active</td>
            </tr>
            <tr className="customers__list__table__element__container">
              <td className="customers__list__table__element">Floyd Miles</td>
              <td className="customers__list__table__element">Yahoo</td>
              <td className="customers__list__table__element">(205) 555-0100</td>
              <td className="customers__list__table__element">floyd@yahoo.com</td>
              <td className="customers__list__table__element">Kiribati</td>
              <td className="customers__list__table__element__status__active">Active</td>
            </tr>
            <tr className="customers__list__table__element__container">
              <td className="customers__list__table__element">Jacob Jones</td>
              <td className="customers__list__table__element">Yahoo</td>
              <td className="customers__list__table__element">(208) 555-0112</td>
              <td className="customers__list__table__element">jacob@yahoo.com</td>
              <td className="customers__list__table__element">Brazil</td>
              <td className="customers__list__table__element__status__active">Active</td>
            </tr>
            <tr className="customers__list__table__element__container">
              <td className="customers__list__table__element">Kristin Watson</td>
              <td className="customers__list__table__element">Facebook</td>
              <td className="customers__list__table__element">(704) 555-0127</td>
              <td className="customers__list__table__element">kristin@facebook.com</td>
              <td className="customers__list__table__element">Åland Islands</td>
              <td className="customers__list__table__element__status__inactive">Inactive</td>
            </tr>
          </table>
          <p className="customers__list__numbers__data">Showing data 1 to 8 of  256K entries</p>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Product;