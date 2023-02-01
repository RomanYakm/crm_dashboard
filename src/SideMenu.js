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
      <img src={DashboardLogo} alt='Dashboard logo' />
      <h2 className='SideMenu__title title'>Dashboard</h2>
      <span className='title__version'>v.01</span>
      <ul className='SideMenu__nav nav'>
        <li className='nav__item'>
          <img src={DashboardNav} alt="Dashboard" />
          <a href="#">Dashboard</a>
        </li>
        <li className='nav__item'>
          <img src={ProductNav} alt="Product" />
          <a href="#">Product</a>
        </li>
        <li className='nav__item'>
          <img src={CustomerNav} alt="Customers" />
          <a href="#">Customers</a>
        </li>
        <li className='nav__item'>
          <img src={IncomeNav} alt="Income" />
          <a href="#">Income</a>
        </li>
        <li className='nav__item'>
          <img src={PromoteNav} alt="Promote" />
          <a href="#">Promote</a>
        </li>
        <li className='nav__item'>
          <img src={HelpNav} alt="Help" />
          <a href="#">Help</a>
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