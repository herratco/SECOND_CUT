import { useParams, useLoaderData } from "react-router-dom";
import {
	Text,
	Card,
	Image,
	Stack,
	CardBody,
	Heading,
	CardFooter,
	Button,
} from "@chakra-ui/react";

export default function ItemDetail() {
	const { id } = useParams();
	const data = useLoaderData();

	let item = data.products.filter((single) => single.id == id);
	item = item[0];
	let cart = JSON.parse(localStorage.getItem("cart")) || [];

	return (
		<Card
			key={item.id}
			direction={{ base: "column", sm: "row" }}
			overflow="hidden"
			variant="outline"
			display="grid"
			gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
			gap="30px"
			width="60vw"
			alignItems="center"
			justifySelf="center"
			m="50px"
		>
			<Image
				objectFit="cover"
				maxW={{ base: "100%", sm: "200px" }}
				src={item.src}
				alt={`${item.name} is not found`}
			/>

			<Stack>
				<CardBody>
					<Heading size="md">The perfect {item.name}</Heading>
					<Heading size="md">${item.price}</Heading>
					<Text py="2">{item.name}</Text>
				</CardBody>

				<CardFooter>
					<Button
						variant="solid"
						colorScheme="orange"
						onClick={() => {
							let currentItem;
							if (cart.find((element) => element.id === item.id)) {
								currentItem = data.products.find((prod) => prod.id === item.id);
								currentItem.id = cart.length + currentItem.id;
							}
							currentItem = data.products.find((prod) => prod.id === item.id);
							cart.push(currentItem);
							//make real json object
							localStorage.setItem("cart", JSON.stringify(cart));
							location.reload();
						}}
					>
						Buy it by single click
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
}
