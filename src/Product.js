import { useEffect, useState } from "react";

const Product = () => {
  const [data, setData] = useState(null);
  const [pageCounter, setPageCounter] = useState(0);
  let pages = 0;

  useEffect(() => {
    const getData = async () => {
      await fetch("./CustomersList.json")
        .then(response => {
          return response.json();
        })
        .then(myJson => {
          setData(myJson);
        });
    };

    getData();
  }, []);

  if (data) {
    pages = Math.ceil(data.length / 8);
  }

  const nextPage = () => {
    if (pageCounter + 8 > data.length) {
      return false;
    } else {
      setPageCounter(pageCounter + 8);
    }
  };

  const prevPage = () => {
    if (pageCounter === 0) {
      return false;
    } else {
      setPageCounter(pageCounter - 8);
    }
  };


  let pageNumberChoosen = pageCounter;

  console.log(pageCounter, pageNumberChoosen, "PAGENUMBER");

  const pageSelect = (page) => {
    if (pageNumberChoosen % 4 === 0 || pageNumberChoosen < 48) {
      const pageNumber = page.target.innerHTML;
      setPageCounter(pageCounter + +pageNumber);
      console.log(pageNumber, pageCounter * +pageNumber);
    }

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
                <td className="customers__list__table__element">{item.customerName} {item.id}</td>
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
          <div className="customers__list__numbers">
            <p className="customers__list__numbers__data">Showing data 1 to 8 of {data && data.length} entries</p>
            <div className="customers__list__numbers__control">
              <button className="customers__list__numbers__control__button" onClick={prevPage}>&#60;</button>
              {pages && [...Array(pages).keys()].map((e, i) => {
                if (e === 0) {
                  return <button className="customers__list__numbers__control__button__page__active" key={i} onClick={pageSelect}>{e + 1}</button>;
                } else {
                  return <button className="customers__list__numbers__control__button__page" key={i} onClick={pageSelect}>{e + 1}</button>;
                }
              }) }
              <button className="customers__list__numbers__control__button" onClick={nextPage}>&#62;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;