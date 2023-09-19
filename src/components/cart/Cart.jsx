/* eslint-disable react-refresh/only-export-components */
import { Flex, Box, Button } from "@chakra-ui/react";
import CartHeader from "./CartHeader";
import CartItem from "./CartItem";
import { useState } from "react";
import Pagination from "./Pagination";

const Cart = () => {
	let cart = localStorage.getItem("cart");
	cart = (cart && JSON.parse(cart)) || [];

	let total = cart.reduce((acc, item) => acc + parseInt(item.price), 0);

	const deleteItem = (id) => {
		cart = cart.filter((item) => item.id !== id);
		localStorage.setItem("cart", JSON.stringify(cart));
		location.reload();
	};

	const [currentPage, setCurrentPage] = useState(1);
	const [itemPerPage] = useState(10);

	const indexOfLastItem = currentPage * itemPerPage;
	const indexOfFirstItem = indexOfLastItem - itemPerPage;

	const currentItems = cart.slice(indexOfFirstItem, indexOfLastItem);

	return (
		<Flex sx={boxStyle}>
			<CartHeader />

			{currentItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					deleteItem={deleteItem}
				/>
			))}

			<Pagination
				totalItem={cart.length}
				itemPerPage={itemPerPage}
				paginate={(page) => setCurrentPage(page)}
			/>
			<Box
				as="div"
				m="40px"
				p="5px"
				color="gray.900"
				fontSize="30px"
				textDecoration="underline"
				fontWeight="bold"
			>
				total price : ${total}
			</Box>
			<Button
				sx={cart.length > 0 ? buttonStyle : noneStyle}
				onClick={() => {
					localStorage.clear();
					location.reload();
				}}
			>
				Purchase
			</Button>
		</Flex>
	);
};

const boxStyle = {
	flexDirection: "column",
	gap: "5px",
};

const buttonStyle = {
	bg: "gray.700",
	color: "white",
	width: "200px",
	display: "flex",
	margin: "auto",
	":hover": {
		outline: "none",
		bg: "gray.700",
	},
};

const noneStyle = {
	display: "none",
};
// export default withAuth(Cart);
export default Cart;
