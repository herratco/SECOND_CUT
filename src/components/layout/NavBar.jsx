import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Button,
	Image,
	Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NavBar = ({ children }) => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			padding="2vw"
			gap="5vw"
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
			{pathname == "/" && (
				<Menu>
					<MenuButton
						as={Button}
						rightIcon={<ChevronDownIcon />}
					>
						Price range
					</MenuButton>
					<MenuList>
						<MenuItem onClick={() => navigate("/lessthan2000")}>
							{"<="} $2000
						</MenuItem>
						<MenuItem onClick={() => navigate("/greaterthan2000")}>
							{">"} $2000
						</MenuItem>
					</MenuList>
				</Menu>
			)}
			{children}
		</Flex>
	);
};

NavBar.propTypes = {
	children: PropTypes.function,
};
export default NavBar;
