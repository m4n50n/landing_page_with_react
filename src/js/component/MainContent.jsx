import React from "react";
import CardItem from "./CardItem.jsx";

const MainContent = () => {
	const Courses = {
		"Desarrollo e Ingeniería": 477,
		"Diseño y UX": 93,
		Marketing: 106,
		"Negocios y Emprendimiento": 107,
		"Contenido Digital": 58,
		"Habilidades Blandas": 97,
		Startups: 42,
		Inglés: 37,
	};

	const AllCoursesArray = [];
	for (const course in Courses) {
		AllCoursesArray.push(
			<div className="col-12 col-md-4 my-2">
				<CardItem title={course} courses={Courses[course]} />
			</div>
		);
	}

	return (
		<>
			<div className="row mt-5 mb-2">
				<div className="col-12">
					<h3>¿Qué tipo de cursos te interesan?</h3>
				</div>
			</div>
			<div className="row">{AllCoursesArray}</div>
		</>
	);
};

export default MainContent;
