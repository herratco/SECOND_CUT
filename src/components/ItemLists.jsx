import Item from "./Item";
import { useLoaderData } from "react-router-dom";
export default function Items() {
	const data = useLoaderData();
	return (
		<>
			{data.products.map((item) => (
				<Item
					key={item.id}
					item={item}
				/>
			))}
		</>
	);
}
