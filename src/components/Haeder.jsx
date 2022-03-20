import React from 'react';

function haeder({ totolPrice, setShow, show }) {
	return (
		<div className="haeder_container">
			<div className="haeder_icon" onClick={() => setShow(false)}>
				🏠
			</div>
			<div>SV-SHOP</div>
			<div className="haeder_icon" onClick={() => setShow(true)}>
				🛒 {totolPrice}$
			</div>
		</div>
	);
}

export default haeder;
