/* eslint-disable react/prop-types */
import {
	Card,
	Image,
	Stack,
	CardBody,
	Heading,
	CardFooter,
	Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Item({ item }) {
	const navigate = useNavigate();
	return (
		<Card
			direction={{ base: "column", sm: "row" }}
			overflow="hidden"
			variant="outline"
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
						onClick={() => navigate(`/item/${item.id}`)}
					>
						Show detail
					</Button>
				</CardFooter>
			</Stack>
		</Card>
	);
}
