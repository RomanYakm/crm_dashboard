import DashboardLogo from "./img/dashboard_logo.svg";
import DashboardNav from "./img/key-square.svg";
import ProductNav from "./img/3d-square 1.svg";
import CustomerNav from "./img/user-square 1.svg";
import IncomeNav from "./img/wallet-money 2.svg";
import PromoteNav from "./img/discount-shape 1.svg";
import HelpNav from "./img/message-question 1.svg";
import ProfilePic from "./img/profile_pic.png";

const SideMenu = () => {
  return ( 
    <section className='SideMenu'>
      <div className="SideMenu__top">
        <img className="SideMenu__ico" src={DashboardLogo} alt='Dashboard logo' />
        <h2 className='SideMenu__title title'>Dashboard</h2>
        <p className='title__version'>v.01</p>
      </div>
      <ul className='SideMenu__nav nav'>
        <li className='nav__item'>
          <img className="nav__item__icon" src={DashboardNav} alt="Dashboard" />
          <a className="nav__item__link" href="#">Dashboard</a>
        </li>
        <li className='nav__item'>
          <img className="nav__item__icon" src={ProductNav} alt="Product" />
          <a className="nav__item__link" href="#">Product</a>
        </li>
        <li className='nav__item'>
          <img className="nav__item__icon" src={CustomerNav} alt="Customers" />
          <a className="nav__item__link" href="#">Customers</a>
        </li>
        <li className='nav__item'>
          <img className="nav__item__icon" src={IncomeNav} alt="Income" />
          <a className="nav__item__link" href="#">Income</a>
        </li>
        <li className='nav__item'>
          <img className="nav__item__icon" src={PromoteNav} alt="Promote" />
          <a className="nav__item__link" href="#">Promote</a>
        </li>
        <li className='nav__item'>
          <img className="nav__item__icon" src={HelpNav} alt="Help" />
          <a className="nav__item__link" href="#">Help</a>
        </li>
      </ul>
      <div >
        <img src={ProfilePic} alt="" />
        <h3>Evano</h3>
        <p>Project Manager</p>
      </div>


    </section>
     );
};

export default SideMenu;