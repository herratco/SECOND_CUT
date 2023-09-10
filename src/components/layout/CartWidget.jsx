import { AiOutlineShoppingCart } from "react-icons/ai";
import { Text, Box } from "@chakra-ui/react";
const CartWidget = () => {
	const count = localStorage.getItem("count") || 0;
	localStorage.setItem("count", count);
	return (
		<Box
			display="flex"
			gap="5px"
		>
			<AiOutlineShoppingCart size="30px" />
			<Text fontSize="md">{count}</Text>
		</Box>
	);
};

export default CartWidget;
