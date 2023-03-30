"use client";
import { Flex, Box } from "@/lib/chakra-ui";
import Footer from "./Footer";
import Header from "./Header";

const SiteLayout = ({ children }) => {
	return (
		<Flex
			letterSpacing={`-0.025em`}
			className="antialiased"
			bg="#F9F5EB"
			color="blackAlpha.8s00"
			flexDir={"column"}
			justifyContent="space-between"
			minH="100vh"
			background="linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)"
		>
			<Header />
			<Box as="main" flexGrow={"1"}>
				{children}
			</Box>
			<Footer />
		</Flex>
	);
};

export default SiteLayout;
