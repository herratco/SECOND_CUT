import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "../ItemListContainer";

export default function Layout() {
	return (
		<ChakraProvider>
			<Box
				display="flex"
				flexDirection="column"
				height="100vh"
				width="100vw"
				mb="100px"
			>
				<NavBar>
					<CartWidget />
				</NavBar>
				<Box
					as="div"
					display="grid"
				>
					<ItemListContainer />
				</Box>
			</Box>
		</ChakraProvider>
	);
}
