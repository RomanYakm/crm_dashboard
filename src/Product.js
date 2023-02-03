import { useState } from "react";

const Product = () => {
  const [data, setData] = useState(null);
  const [pageCounter, setPageCounter] = useState(0);
  let pages = 0;

  const getData = () => {
    fetch("./CustomersList.json")
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        setData(myJson);
      });
  };

  getData();

  if (data) {
    pages = Math.ceil(data.length / 8);
  }

  const nextPage = () => {
    setPageCounter(pageCounter + 8);
  };

  const prevPage = () => {
    setPageCounter(pageCounter - 8);
  };
  
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
            <tbody>
              <tr className="customers__list__table__top">
                <th className="customers__list__table__heading">Customer Name</th>
                <th className="customers__list__table__heading">Company</th>
                <th className="customers__list__table__heading">Phone Number</th>
                <th className="customers__list__table__heading">Email</th>
                <th className="customers__list__table__heading">Country</th>
                <th className="customers__list__table__heading__status">Status</th>
              </tr>
              {data && data.slice(pageCounter, pageCounter + 8).map((item) => 
                <tr className="customers__list__table__element__container" key={item.id}>
                <td className="customers__list__table__element">{item.customerName}</td>
                <td className="customers__list__table__element">{item.company}</td>
                <td className="customers__list__table__element">{item.phoneNumber}</td>
                <td className="customers__list__table__element">{item.email}</td>
                <td className="customers__list__table__element">{item.country}</td>
                {item.status === "Active" &&
                <td className="customers__list__table__element__status__active">{item.status}</td>}
                {item.status === "Inactive" &&
                <td className="customers__list__table__element__status__inactive">{item.status}</td>}
              </tr>
              )}
            </tbody>
          </table>
          <p className="customers__list__numbers__data">Showing data 1 to 8 of {data && data.length} entries</p>
          <div>
            <button onClick={prevPage}>Prev Page</button>
            {pages}
            <button onClick={nextPage}>Next Page</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;