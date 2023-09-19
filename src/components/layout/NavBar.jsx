/* eslint-disable react/prop-types */
import { Button, Image, Flex, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";

const NavBar = ({ children }) => {
	const navigate = useNavigate();
	const login = useGoogleLogin({
		onSuccess: (token) => console.log(token),
	});
	return (
		<Flex
			display="flex"
			alignItems="center"
			padding="2vw"
			justifyContent="space-around"
			gap="5vw"
			background="gray.900"
		>
			<Flex
				minH="48px"
				cursor="pointer"
				onClick={() => navigate("/")}
			>
				<Image
					boxSize="3rem"
					borderRadius="full"
					src="Coffee-cup-clip-art-free-perfect-cup-of-coffee-clipart-3-clipartcow.png"
					alt="Coffee shot not appear"
					mr="12px"
					fallbackSrc="/Coffee-cup-clip-art-free-perfect-cup-of-coffee-clipart-3-clipartcow.png"
				/>
			</Flex>
			<Box
				as="div"
				sx={listStyle}
				onClick={() => navigate("/category/electronics")}
			>
				Electronics
			</Box>
			<Box
				sx={listStyle}
				onClick={() => navigate("/category/vehicles")}
			>
				Vehicles
			</Box>
			<Box
				sx={listStyle}
				onClick={() => navigate("/category/books")}
			>
				Books
			</Box>

			<Button
				sx={loginStyle}
				onClick={() => login()}
			>
				Login
			</Button>

			{children}
		</Flex>
	);
};

const listStyle = {
	bg: "gray.900",
	color: "white",
	cursor: "pointer",
};

const loginStyle = {
	bg: "gray.900",
	color: "white",
	":hover": {
		outline: "none",
		bg: "gray.900",
	},
};

export default NavBar;
