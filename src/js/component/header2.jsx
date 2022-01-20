import React from "react";

import "../../styles/header2.css";

function Header2() {
	return (
		<>
			<div className="container-fluid">
				<div className="row rowheader">
					<div className="col-1"></div>
					<div className="col-6 textheader">
						<h2>
							No son solo cursos, es tu plan de estudio personal
						</h2>
						<br></br>
						<p>
							Con más de 800 cursos, te guíamos a encontrar la
							ruta que te hará crecer como profesional.
						</p>
						<br></br>
						<button className="buttonheader">
							Quiero iniciar mi plan
						</button>
					</div>
					<div class="col-5">
						<iframe
							className="videoheader"
							width="560"
							height="315"
							src="https://www.youtube.com/embed/U9hq83ryFj0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen></iframe>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header2;
