import Concept from '../Concept/Concept';
import Consult from '../Consult/Consult';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Consultation from '../Consultation/Consultation';
import Modal from '../Modal/Modal';
import { useState } from 'react';

/**
 * @description - Home Page Component
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => {
	const [modalActive, setModalActive] = useState(false);
	let windowOffset = 0;

	const modalOpenHandler = () => {
		setModalActive(true);
		windowOffset = window.scrollY;
		document.body.setAttribute(
			'style',
			`position: fixed; top: -${windowOffset}px; left: 0; right: 0;`,
		);
	};

	const modalCloseHandler = () => {
		setModalActive(false);
		document.body.setAttribute('style', '');
		window.scrollTo(0, windowOffset);
	};

	return (
		<>
			<Hero active={modalActive} onOpen={modalOpenHandler} />
			<Features />
			<Consultation />
			<Services />
			<Concept />
			<Consult />
			<Modal active={modalActive} setActive={setModalActive} onClose={modalCloseHandler} />
		</>
	);
};

export default Home;
