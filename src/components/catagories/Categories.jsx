import { useLoaderData } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
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

const Categories = () => {
	const { id } = useParams();
	const data = useLoaderData();
	const navigate = useNavigate();
	let items = data.products.filter((item) => item.category === id);
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
				{data.preference} {id}
			</Heading>
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

export default Categories;
