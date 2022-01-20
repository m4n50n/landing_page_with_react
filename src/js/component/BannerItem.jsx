import React from "react";

const BannerItem = () => {
	return (
		<div className="container-fluid mt-4">
			<div className="banner-item row justify-content-center pt-4 text-white">
				<div>
					<div className="row justify-content-evenly">
						<div className="col-12 col-md-4">
							<img src="https://static.platzi.com/static/images/footer/logo.png" />

							<p className="mt-3">Formación especializada</p>
						</div>
						<div className="col-12 col-md-4">
							<ul className="navbar-nav">
								<li key="1" className="nav-item">
									<span className="pe-5">Inglés</span>
									<span>◈</span>
								</li>
								<li key="2" className="nav-item">
									<span className="pe-5">
										Negocios y emprendimiento
									</span>{" "}
									<span>◈</span>
								</li>
								<li key="3" className="nav-item">
									<span className="pe-5">Startups</span>{" "}
									<span>◈</span>
								</li>
								<li key="4" className="nav-item">
									<span className="pe-5">Marketing</span>{" "}
									<span>◈</span>
								</li>
							</ul>
						</div>
						<div className="col-12 col-md-4">
							<p className="mt-3">
								Certificadores oficiales en tecnologías{" "}
								<strong>IBM</strong> y <strong>Unity</strong>
							</p>
						</div>
					</div>
					<p className="mt-4 text-center">
						© 2021 | Todos los derechos reservados.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BannerItem;
