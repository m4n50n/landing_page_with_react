import React from "react";
import MainContent from "./MainContent.jsx";
import BannerItem from "./BannerItem.jsx";

import "../../styles/bootstrap.min.css";

const Home = () => {
	return (
		<>
			<BannerItem />

			<div className="container">
				<MainContent />
			</div>
		</>
	);
};

// Exports
export default Home;
