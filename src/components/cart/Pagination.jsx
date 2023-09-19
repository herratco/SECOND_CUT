/* eslint-disable react/prop-types */
import { Box } from "@chakra-ui/react";

export default function Pagination({ totalItem, itemPerPage, paginate }) {
	const pageNumbers = [];

	for (let page = 1; page <= Math.ceil(totalItem / itemPerPage); page++)
		pageNumbers.push(page);

	return (
		<Box
			display="flex"
			justifyContent="center"
			gap="20px"
		>
			<Box
				as="span"
				cursor="pointer"
				fontSize="40px"
				boxShadow="1px 1px 1px #eaeaea"
				color="blue.900"
			>
				Page:
			</Box>
			{pageNumbers.map((page) => (
				<Box
					as="span"
					onClick={() => paginate(page)}
					key={page}
					cursor="pointer"
					fontSize="40px"
					boxShadow="1px 1px 1px #eaeaea"
					color="blue.900"
				>
					{page}
				</Box>
			))}
		</Box>
	);
}
