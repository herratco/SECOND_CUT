/* eslint-disable react/prop-types */
import { Box, Image } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

export default function CartItem({ item, deleteItem }) {
	return (
		<Box
			as="div"
			key={item.id}
			display="grid"
			gridTemplateColumns="repeat(6, 1fr)"
			padding=".5vw 2vw"
			textAlign="left"
			background="#eeeeef"
			border="solid 1px #eaeaea"
		>
			<Image
				objectFit="cover"
				maxW={{ base: "100%", sm: "30px" }}
				maxHeight="30px"
				src={item.src}
				alt={`${item.name} not found`}
			/>
			<Box as="span">{item.name}</Box>
			<Box as="span">{item.category}</Box>
			<Box as="span">${item.price}</Box>
			<Box as="span">{item.description}</Box>
			<DeleteIcon
				cursor="pointer"
				onClick={() => deleteItem(item.id)}
			/>
		</Box>
	);
}
