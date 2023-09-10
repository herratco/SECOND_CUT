import Layout from "./components/layout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetail from "./components/ItemDetail";
import util from "./components/util/data.json";
import { json } from "react-router-dom";
import { LessThan, GreaterThan } from "./components/helper";
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
				path="lessthan2000"
				loader={dataLoader}
				element={<LessThan />}
			/>
			<Route
				path="greaterthan2000"
				loader={dataLoader}
				element={<GreaterThan />}
			/>
		</Route>
	)
);

function dataLoader() {
	return json(util);
}

export default router;
