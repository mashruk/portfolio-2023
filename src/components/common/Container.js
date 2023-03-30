"use client";

import { Container, Button } from "@/lib/chakra-ui";

const ContentContainer = ({ children }) => {
	return (
		<Container maxW={["none", , "1168px"]} mx="auto" px={[4, , , 6]}>
			{children}
		</Container>
	);
};

export default ContentContainer;
