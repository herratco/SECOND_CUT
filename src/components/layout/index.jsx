import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import { ChakraProvider } from "@chakra-ui/react";

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
					{<Outlet />}
				</Box>
			</Box>
		</ChakraProvider>
	);
}
