import Concept from '../Concept/Concept';
import Consult from '../Consult/Consult';
import Features from '../Features/Features';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Consultation from '../Consultation/Consultation';

/**
 * @description - Home Page Component
 * @returns {JSX.Element}
 * @constructor
 */
const Home = () => (
	<div className=''>
		<Hero />
		<Features />
		<Consultation />
		<Services />
		<Concept />
		<Consult />
	</div>
);

export default Home;
