import '../App.css';
function Cart({ totolPrice, list, setList, buy }) {
	// const [show, setShow] = useState(false);
	let tempList = list
		.map((p) => p.name)
		.filter((value, index, array) => array.indexOf(value) === index);
	return (
		<>
			<div></div>
			<div>
				<table>
					<tr>
						<th>product</th>
						<th>units</th>
					</tr>

					{tempList.map((name, index) => (
						<tr key={index}>
							<td>{name}</td>{' '}
							<td>
								{list.filter((p) => p.name === name).length}
							</td>
						</tr>
					))}
				</table>
			</div>
			<div className="cart_totalPrice">total: {totolPrice}$</div>
			<button
				style={{ display: list.length === 0 ? 'none' : 'inline' }}
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
