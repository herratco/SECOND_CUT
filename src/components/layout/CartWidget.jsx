import { AiOutlineShoppingCart } from "react-icons/ai";
import { Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CartWidget = () => {
	const navigate = useNavigate();

	let count = !localStorage.getItem("cart")
		? 0
		: JSON.parse(localStorage.getItem("cart")).length;

	return (
		<Box
			display="flex"
			gap="5px"
			justifySelf="flex-end"
			cursor="pointer"
			onClick={() => navigate("/cart")}
		>
			<AiOutlineShoppingCart
				size="30px"
				color="white"
			/>
			<Text
				fontSize="md"
				color="white"
			>
				{count}
			</Text>
		</Box>
	);
};

export default CartWidget;
