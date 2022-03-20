import './App.css';
import { useState } from 'react';
import Products from './components/Products';
import Cart from './components/Cart';
import Haeder from './components/Haeder';

function App() {
	const products = [
		{ name: 'computer', price: 100 },
		{ name: 'pen', price: 10 },
		{ name: 'paper', price: 1 },
	];
	const [list, setList] = useState([]);
	const [historyList, setHistoryList] = useState([]);
	const [show, setShow] = useState(false);
	const [totolPrice, setTotolPrice] = useState(0);
	const addProduct = (pName, price) => {
		setList([...list, { name: pName, price: price }]);

		toPrice(price);
	};
	const toPrice = (price) => {
		setTotolPrice(totolPrice + price);
	};
	const buy = () => {
		setShow(false);
		setHistoryList([
			...historyList,
			{ list: { ...list }, totolPrice: totolPrice },
		]);

		setList([]);
		setTotolPrice(0);
	};

	return (
		<div className="App">
			<Haeder totolPrice={totolPrice} setShow={setShow} show={show} />
			{/* <button onClick={() => setShow(!show)}>🛒 {totolPrice}$</button> */}
			<div style={{ display: show ? 'inline' : 'none' }}>
				<Cart list={list} totolPrice={totolPrice} buy={buy} />
			</div>
			<div style={{ display: show ? 'none' : 'inline' }}>
				{products.map(({ price, name }, index) => (
					<Products
						key={index}
						title={name}
						price={price}
						addProduct={addProduct}
						setTotolPrice={setTotolPrice}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
