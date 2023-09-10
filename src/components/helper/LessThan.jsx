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

const LessThan2000 = () => {
	const data = useLoaderData();
	const navigate = useNavigate();
	let items = data.products.filter((item) => item.price <= 2000);

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
				{data.preference}
			</Heading>
			<Box
				display="grid"
				gridTemplateColumns="repeat(auto-fit, minmax(400px, 1fr))"
				gap="30px"
			>
				{items.map((item) => (
					<Card
						direction={{ base: "column", sm: "row" }}
						overflow="hidden"
						variant="outline"
						key={item.id}
					>
						<Image
							objectFit="cover"
							maxW={{ base: "100%", sm: "200px" }}
							src={item.src}
							alt="Caffe Latte"
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

export default LessThan2000;
