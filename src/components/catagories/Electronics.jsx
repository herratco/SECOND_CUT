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

const Books = () => {
	const data = useLoaderData();
	const navigate = useNavigate();
	let items = data.products.filter((item) => item.category === "electronics");
	return (
		<Container
			maxW="6xl"
			pt="40px"
		>
			<Box
				display="grid"
				gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
				gap="30px"
			>
				{items.map((item) => (
					<Card
						key={item.id}
						direction={{ base: "column", sm: "row" }}
						overflow="hidden"
						variant="outline"
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
						padding="30px"
					>
						<Image
							objectFit="cover"
							maxW={{ base: "100%", sm: "200px" }}
							maxHeight="200px"
							src={item.src}
							alt="book not found"
						/>

						<Stack>
							<CardBody>
								<Heading size="md">${item.price}</Heading>
							</CardBody>

							<CardFooter>
								<Button
									variant="solid"
									colorScheme="white"
									color="blue.800"
									onClick={() => navigate(`/item/${item.id}`)}
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

export default Books;
