import Layout from "./components/layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import util from "./components/util/data.json";
import { json } from "react-router-dom";
import Categories from "./components/catagories";
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
			element={<Layout />}
		>
			<Route
				index
				loader={dataLoader}
				element={<ItemListContainer />}
			/>

			<Route
				path="detail/:id"
				loader={dataLoader}
				element={<ItemDetail />}
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
