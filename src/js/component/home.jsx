import React from "react";
import MainContent from "./MainContent.jsx";
import BannerItem from "./BannerItem.jsx";

import "../../styles/bootstrap.min.css";

const Home = () => {
	return (
		<>
			<div className="container">
				<MainContent />
			</div>

			<BannerItem />
		</>
	);
};

// Exports
export default Home;
