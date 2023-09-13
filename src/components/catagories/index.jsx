import Books from "./Books";
import Electronics from "./Electronics";
import Vehicles from "./Vehicles";
import { useLocation } from "react-router-dom";

export default function Category() {
	const { pathname } = useLocation();

	switch (pathname) {
		case "/category/books":
			return <Books />;
		case "/category/vehicles":
			return <Vehicles />;
		case "/category/electronics":
			return <Electronics />;
	}
}
