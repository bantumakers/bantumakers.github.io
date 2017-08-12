import React from "react";

const Navigation = ({ siteName }) => {
	return (
		<nav className="site navbar navbar-default navbar-fixed-top">
			<section>
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>

					<a href="/" className="navbar-brand">{siteName}</a>
				</div>

				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><a href="/"><i className="fa fa-book"></i> Blog</a></li>
						<li><a href="/about/"><i className="fa fa-user"></i> Sobre</a></li>
						<li><a href="https://twitter.com/BantuMakers"><i className="fa fa-twitter"></i> Twitter</a></li>
					</ul>
				</div>
			</section>
		</nav>
	);
};

module.exports = Navigation;