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

	return (
		<>
			<Hero active={modalActive} setActive={setModalActive} />
			<Features />
			<Consultation />
			<Services />
			<Concept />
			<Consult />
			<Modal
				active={modalActive}
				setActive={setModalActive}
				onClose={() => setModalActive(false)}
			/>
		</>
	);
};

export default Home;
