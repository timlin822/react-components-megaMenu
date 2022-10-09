import {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaTimes,FaBars} from 'react-icons/fa';

import logo from 'images/logo.png';

import './Navbar.css';

const Navbar=()=>{
    const [megaMenuIsShow,setMegaMenuIsShow]=useState(false);
	const [navbarIsOpen,setNavbarIsOpen]=useState(false);

	const navbarClickHandler=()=>{
		setNavbarIsOpen(!navbarIsOpen);
	};
	const navbarCloseHandler=()=>{
		setNavbarIsOpen(false);
	};

    const mouseEnterHandler=()=>{
		setMegaMenuIsShow(true);
	};
    const mouseLeaveHandler=()=>{
		setMegaMenuIsShow(false);
	};

    return (
		<header className="navbar">
			<nav className="container navbar-menu">
				<Link to="/" className="logo" onClick={navbarCloseHandler}><img src={logo} alt="logo" /></Link>
				<div className={navbarIsOpen?"main-navbar main-navbar-open":"main-navbar"}>
					<Link to="/" className="btn-link" onClick={navbarCloseHandler}>首頁</Link>
                    <div className="btn-link" onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>產品
						<div className={megaMenuIsShow?"mega-menu mega-menu-open":"mega-menu"}>
							<ul className="mega-menu-column">
								<h2 className="mega-menu-title">飲品</h2>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>紅茶系列</Link></li>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>綠茶系列</Link></li>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>奶茶系列</Link></li>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>咖啡系列</Link></li>
							</ul>
							<ul className="mega-menu-column">
								<h2 className="mega-menu-title">甜點</h2>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>千層派系列</Link></li>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>提拉米蘇系列</Link></li>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>蛋糕系列</Link></li>
							</ul>
							<ul className="mega-menu-column">
								<h2 className="mega-menu-title">炸物</h2>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>黃金脆薯</Link></li>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>薯餅</Link></li>
								<li><Link to="/" className="btn-mega-menu-link" onClick={navbarCloseHandler}>甜甜圈</Link></li>
							</ul>
						</div>
                    </div>
                    <Link to="/contact" className="btn-link" onClick={navbarCloseHandler}>聯繫</Link>
					<Link to="/feature" className="btn-link" onClick={navbarCloseHandler}>特色</Link>
					<Link to="/service" className="btn-link" onClick={navbarCloseHandler}>服務</Link>
                    <Link to="/login" className="btn-login" onClick={navbarCloseHandler}>登入</Link>
				</div>
				<span className="btn-toggle" onClick={navbarClickHandler}>{navbarIsOpen?<FaTimes />:<FaBars />}</span>
			</nav>
		</header>
    );
}

export default Navbar;