import React from "react";
import Button from "react-bootstrap/Button";

const BannerItem = () => {
	return (
		<div className="container-fluid">
			<div className="banner-item row justify-content-center pt-5 pb-3 text-white">
				<div>
					<h1 className="mb-4">
						No son solo cursos, es tu plan de
						<br />
						estudio personal
					</h1>
					<h5>
						Con más de 800 cursos, te guiamos a encontrar la ruta
						que te hará crecer como profesional
					</h5>
					<Button
						size="lg"
						className="action-button mt-4 text-white fw-bold border-0 shadow-sm px-5">
						Quiero iniciar mi plan
					</Button>{" "}
				</div>
			</div>
		</div>
	);
};

export default BannerItem;
