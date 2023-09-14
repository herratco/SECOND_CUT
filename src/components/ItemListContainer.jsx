import Items from "./Items";
import data from "./util/data.json";
import { Container, Box, Heading } from "@chakra-ui/react";

const ItemListContainer = () => {
	return (
		<Container
			maxW="6xl"
			pt="40px"
		>
			<Heading
				as="h1"
				size="md"
				p="40px 0"
			>
				{data.greeting}
			</Heading>
			<Box
				display="grid"
				gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
				gap="30px"
			>
				<Items />
			</Box>
		</Container>
	);
};

export default ItemListContainer;
