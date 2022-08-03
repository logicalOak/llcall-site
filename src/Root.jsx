import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Header, Home } from './components';

/**
 * @description - Root Component
 * @returns {JSX.Element}
 * @constructor
 */
const Root = () => (
	<Router>
		{/* Wrapper */}
		<div className=''>
			{/* Header */}
			<Header />
			{/* Content */}
			<main className=''>
				{/* Pages */}
				<Routes>
					<Route path='/' exact element={<Home />} />
				</Routes>
			</main>
			{/* Footer */}
			<Footer />
		</div>
	</Router>
);

export default Root;
