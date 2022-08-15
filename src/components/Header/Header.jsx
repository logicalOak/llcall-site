import { Link } from 'react-router-dom';
import burger from '../../../assets/images/burger.svg';
import { useState } from 'react';

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);

	const burgerHandler = () => {
		setOpenMenu((prev) => !prev);
		document.body.style.overflowY = !openMenu ? 'hidden' : 'unset';
	};

	const overlayHandler = (e) => {
		setOpenMenu(!e.target.classList.contains('header__overlay'));
		document.body.style.overflowY = !openMenu ? 'hidden' : 'unset';
	};

	const menuHandler = (e) => {
		setOpenMenu((prev) => !prev);
		document.body.style.overflowY = !openMenu ? 'hidden' : 'unset';
	};

	const scrollHandler = () => {
		setTimeout(() => {
			history.pushState('', document.title, window.location.pathname);
		}, 1000);
	};
	return (
		<header className='header' id='header'>
			<nav className='header__nav container'>
				<a className='header__logo logo' href='#'>
					<img src='../../../assets/images/logo.svg' alt='llcall' />
				</a>
				<button className='header__burger' onClick={() => burgerHandler()}>
					<img src={burger} alt='open menu' className='header__burger-ico' />
				</button>
				{/* desktop */}
				<div className='header__desktop'>
					<ul className='header__desktop-list'>
						<li className='header__desktop-item'>
							<a onClick={() => scrollHandler()} className='header__desktop-link' href='#services'>
								Услуги
							</a>
						</li>
						<li className='header__desktop-item'>
							<a onClick={() => scrollHandler()} className='header__desktop-link' href='#concept'>
								О нас
							</a>
						</li>
						<li className='header__desktop-item'>
							<a onClick={() => scrollHandler()} className='header__desktop-link' href='#footer'>
								Контакты
							</a>
						</li>
					</ul>
				</div>
				{/* mobile */}
				<div
					onClick={(e) => overlayHandler(e)}
					className={`header__mobile header__overlay ${
						openMenu === true ? 'header__overlay--is-open' : ''
					}`}>
					<div className='header__side'>
						<div className='header__side-row'>
							<ul className='header__menu'>
								<li className='header__menu-item'>
									<a href='#services' className='header__menu-link' onClick={() => scrollHandler()}>
										Услуги
									</a>
								</li>
								<li className='header__menu-item'>
									<a href='#concept' className='header__menu-link' onClick={() => scrollHandler()}>
										О нас
									</a>
								</li>
								<li className='header__menu-item'>
									<a href='#footer' className='header__menu-link' onClick={() => scrollHandler()}>
										Контакты
									</a>
								</li>
							</ul>
						</div>
						<div className='header__side-row'>
							<ul className='header__social social'>
								<li>
									<a href=''>
										<img
											className='social-ico'
											src='../../../assets/images/tg.svg'
											alt='telegram'
										/>
									</a>
								</li>
								<li>
									<a href=''>
										<img
											className='social-ico'
											src='../../../assets/images/whatsapp.svg'
											alt='whatsapp'
										/>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
