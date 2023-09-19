import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/layout";
import Item from "./components/ItemDetail";
import util from "./components/util/data.json";
import { json } from "react-router-dom";
import Categories from "./components/catagories";
import Cart from "./components/cart/Cart";
import "./App.css";

import {
	createRoutesFromElements,
	createBrowserRouter,
	Route,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Navbar />}
		>
			<Route
				index
				loader={dataLoader}
				element={<ItemListContainer />}
			/>
			<Route
				path="item/:id"
				loader={dataLoader}
				element={<Item />}
			/>
			<Route
				path="category/:id"
				loader={dataLoader}
				element={<Categories />}
			/>
			<Route
				path="cart"
				element={<Cart />}
			/>
		</Route>
	)
);

function dataLoader() {
	return json(util);
}

export default router;
