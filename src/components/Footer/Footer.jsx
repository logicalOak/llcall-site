const Footer = () => (
	<footer className='footer' id='footer'>
		<div className=' footer-wrapper container'>
			{/* row */}
			<div className='footer__row row-top'>
				<a className='footer-logo logo' href='#header'>
					<img src='../../../assets/images/logo.svg' alt='logo' />
				</a>
				<ul className='footer-socials'>
					<li className='footer-socials__item'>
						<a className='footer-socials__link' href='#'>
							<img src='../../../assets/images/tg.svg' alt='telegram' />
						</a>
					</li>
					<li className='footer-socials__item'>
						<a className='footer-socials__link' href='#'>
							<img src='../../../assets/images/whatsapp.svg' alt='whatsapp' />
						</a>
					</li>
				</ul>
			</div>
			{/* row */}
			<div className='footer__row row-middle'>
				<a className='footer__number' href='tel:'>
					89999999999
				</a>
				<a href='mailto:info@llcall.ru' className='footer__mail'>
					info@llcall.ru
				</a>
				<p className='footer__address'>Волгоград ул. Невская, д. 4а, офис 6</p>
			</div>
		</div>

		{/* bottom */}
		<div className='footer-bottom'>
			<p className='footer-bottom__copyright'>
				Copyright &copy; {new Date().getFullYear()} by Llcall
			</p>
			<a className='footer-bottom__dev' href='https://portfolio-ivory-beta.vercel.app'>
				Разработано logicalOak
			</a>
		</div>
	</footer>
);

export default Footer;
