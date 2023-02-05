import { ReactComponent as DashboardLogo } from "../img/dashboard_logo.svg";
import { ReactComponent as DashboardNav } from "../img/key-square.svg";
import { ReactComponent as ProductNav } from "../img/3d-square 1.svg";
import { ReactComponent as CustomerNav } from "../img/user-square 1.svg";
import { ReactComponent as IncomeNav } from "../img/wallet-money 2.svg";
import { ReactComponent as PromoteNav } from "../img/discount-shape 1.svg";
import { ReactComponent as HelpNav } from "../img/message-question 1.svg";
import ProfilePic from "../img/profile_pic.png";
import { Link } from "react-router-dom";

const SideMenu = ({ toggleMenu, setToggleMenu }) => {
  const handleCloseMenu = () => {
    setToggleMenu(false);
  };
  
  const handleChange = (e) => {
    handleCloseMenu();
    const menuItems = ["Dashboard", "Product", "Customers", "Income", "Promote", "Help"];
    const choosedEl = e.target.innerHTML;
    if (menuItems.includes(choosedEl)) {
      const buttonsList = e.currentTarget.parentNode.childNodes[1].childNodes;
      console.log(buttonsList, choosedEl);

      buttonsList.forEach(button => {
        const buttonText = button.childNodes[1].innerHTML;
        if (choosedEl === buttonText) {
          button.classList.add("nav__item__active");
        } else {
        button.classList.remove("nav__item__active");
        }
      });
    }
  };

  return ( 
    <section className={toggleMenu ? "SideMenu SideMenu__show" : "SideMenu "}>
      <div className="SideMenu__top">
        <DashboardLogo className="SideMenu__ico" />
        <h2 className='SideMenu__title title'>Dashboard</h2>
        <p className='title__version'>v.01</p>
        <button className="SideMenu__cross" onClick={handleCloseMenu}>X</button>
      </div>
      <ul className="SideMenu__nav nav" onClick={handleChange}>
        <li className="nav__item">
          <DashboardNav className="nav__item__icon" />
          <Link className="nav__item__link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav__item">
          <ProductNav className="nav__item__icon" />
          <Link className="nav__item__link" to="/product">Product</Link>
          <span className="nav__item__link__arrow"></span>
        </li>
        <li className="nav__item">
          <CustomerNav className="nav__item__icon" fill="#9197B3" stroke="#9197B3" />
          <Link className="nav__item__link" to="/customers">Customers</Link>
          <span className="nav__item__link__arrow"></span>
        </li>
        <li className="nav__item">
          <IncomeNav className="nav__item__icon"/>
          <Link className="nav__item__link" to="/income">Income</Link>
          <span className="nav__item__link__arrow"></span>
        </li>
        <li className="nav__item">
          <PromoteNav className="nav__item__icon" />
          <Link className="nav__item__link" to="/promote">Promote</Link>
          <span className="nav__item__link__arrow"></span>
        </li>
        <li className="nav__item">
          <HelpNav className="nav__item__icon" />
          <Link className="nav__item__link" to="/help">Help</Link>
          <span className="nav__item__link__arrow"></span>
        </li>
      </ul>
      <div className="SideMenu__profile profile">
        <img className="profile__pic" src={ProfilePic} alt="" />
        <div className="profile__info">
          <h3 className="profile__info__title">Evano</h3>
          <p className="profile__info__role">Project Manager</p>
        </div>
      </div>


    </section>
     );
};

export default SideMenu;