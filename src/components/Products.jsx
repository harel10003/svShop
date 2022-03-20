import React from 'react';
import '../App.css';

function Products({ title, price, addProduct }) {
	return (
		<div className="products_container">
			<div className="products_product">
				{title}-{price}$
				<button
					className="products_btnAdd"
					onClick={() => addProduct(title, price)}
				>
					+
				</button>
			</div>
		</div>
	);
}

export default Products;
