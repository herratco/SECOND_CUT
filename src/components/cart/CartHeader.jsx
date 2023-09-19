import { Box } from "@chakra-ui/react";

export default function CartHeader() {
	return (
		<Box
			as="div"
			display="grid"
			gridTemplateColumns="repeat(6, 1fr)"
			padding="2vw"
			textAlign="left"
			fontWeight="bold"
			textDecoration="underline"
		>
			<Box as="span">Product</Box>
			<Box as="span">Product Name</Box>
			<Box as="span">Product Category</Box>
			<Box as="span">Price</Box>
			<Box as="span">Description</Box>
			<Box as="span">Action</Box>
		</Box>
	);
}
