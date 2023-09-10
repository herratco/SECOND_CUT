import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Image,
	Flex,
} from "@chakra-ui/react";
import { useGoogleLogin } from "@react-oauth/google";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const NavBar = ({ children }) => {
	const [categoryName, setCategoryName] = useState("category");
	const { pathname } = useLocation();

	useEffect(() => {
		if (pathname.startsWith("/category/")) {
			pathname.split("/category/")[1] &&
				setCategoryName(pathname.split("/category/")[1]);
		} else {
			setCategoryName("category");
		}
	}, [pathname]);
	const navigate = useNavigate();

	const login = useGoogleLogin({
		onSuccess: (responseToken) => console.log(responseToken),
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

			<Menu>
				<MenuButton
					as={Button}
					rightIcon={<ChevronDownIcon />}
					sx={categoryStyle}
				>
					{categoryName}
				</MenuButton>
				<MenuList sx={listStyle}>
					<MenuItem
						sx={listsStyle}
						onClick={() => navigate("/category/electronics")}
					>
						Electronics
					</MenuItem>
					<MenuItem
						sx={listsStyle}
						onClick={() => navigate("/category/vehicles")}
					>
						Vehicles
					</MenuItem>
					<MenuItem
						sx={listStyle}
						onClick={() => navigate("/category/books")}
					>
						Books
					</MenuItem>
				</MenuList>
			</Menu>

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

const categoryStyle = {
	bg: "gray.900",
	color: "white",
	textTransform: "capitalize",
	width: "200px",
	":hover": {
		bg: "gray.900",
		color: "white",
		outline: "none",
	},
	":active": {
		bg: "gray.900",
	},
};

const listStyle = {
	bg: "gray.900",
	color: "white",
	outline: "none",
};
const listsStyle = {
	bg: "gray.900",
	alignItems: "center",
	":hover": {
		bg: "gray.700",
		border: "none",
		outline: "none",
	},
};

const loginStyle = {
	bg: "gray.900",
	color: "white",
	":hover": {
		outline: "none",
		bg: "gray.900",
	},
};

NavBar.propTypes = {
	children: PropTypes.function,
};
export default NavBar;
