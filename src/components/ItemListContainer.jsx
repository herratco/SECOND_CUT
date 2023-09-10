import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
	Container,
	Card,
	Image,
	Stack,
	CardBody,
	Heading,
	CardFooter,
	Button,
	Box,
} from "@chakra-ui/react";

const ItemListContainer = () => {
	const data = useLoaderData();
	const navigate = useNavigate();
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
				gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))"
				gap="30px"
			>
				{data.products.map((item) => (
					<Card
						direction={{ base: "column", sm: "row" }}
						overflow="hidden"
						variant="outline"
						key={item.id}
						p="30px"
						display="flex"
						flexDirection="column"
						alignItems="center"
						justifyContent="space-between"
					>
						<Heading
							as="h4"
							size="sm"
						>
							{item.name}
						</Heading>
						<Image
							objectFit="cover"
							maxW={{ base: "100%", sm: "200px" }}
							maxHeight="200px"
							src={item.src}
							alt={`${item.name} not found`}
						/>

						<Stack>
							<CardBody>
								<Heading size="md">${item.price}</Heading>
								<Heading
									as="h4"
									size="sm"
								>
									available stock {item.stock}
								</Heading>
							</CardBody>

							<CardFooter>
								<Button
									variant="solid"
									colorScheme="white"
									color="blue.800"
									onClick={() => navigate(`/detail/${item.id}`)}
								>
									Show detail
								</Button>
							</CardFooter>
						</Stack>
					</Card>
				))}
			</Box>
		</Container>
	);
};

export default ItemListContainer;
