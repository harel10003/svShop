import React, { useState } from 'react';

function Cart({ totolPrice, list, setList, buy }) {
	// const [show, setShow] = useState(false);
	return (
		<>
			<div></div>
			<div
			// style={{
			// 	display: show ? 'inline' : 'none',
			// }}
			>
				{list.map(({ name }, index) => (
					<div key={index}>{name} </div>
				))}
			</div>
			<div className="cart_totalPrice">total:{totolPrice}$</div>
			<button
				onClick={() => {
					buy();
				}}
			>
				BUY
			</button>
		</>
	);
}

export default Cart;
