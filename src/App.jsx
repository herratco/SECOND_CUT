import ItemListContainer from "./components/layout";
import Item from "./components/ItemDetail";
import util from "./components/util/data.json";
import { json } from "react-router-dom";
import Categories from "./components/catagories";
import Items from "./components/Items";
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
			element={<ItemListContainer />}
		>
			<Route
				index
				loader={dataLoader}
				element={<Items />}
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
		</Route>
	)
);

function dataLoader() {
	return json(util);
}

export default router;
