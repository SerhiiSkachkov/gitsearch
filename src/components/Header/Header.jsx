import React from 'react';
import logo from '../../assets/logo.svg';
import './Header.sass';

const Header = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="row justify-content-between align-items-center">
					<div className="col-auto">
						<a className="header_logo" href="https://github.com/" target="_blank" >
							<img src={logo} alt="logo" />
						</a>
					</div>
					<div className="col-auto">
						<a className="header_dev" href="https://github.com/SerhiiSkachkov" target="_blank" >
							by Serhii Skachkov
						</a>
					</div>
				</div>
			</div>
		</header>
	)
}
export default Header;
