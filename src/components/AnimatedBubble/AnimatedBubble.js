import ContentContainer from "@/components/common/Container";
import * as React from "react";

import {
	Text,
	Heading,
	Box,
	Grid,
	GridItem,
	Flex,
	Icon,
	AspectRatio,
} from "@/lib/chakra-ui";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { Link } from "@chakra-ui/next-js";
import { GithubIcon, LinkedInIcon, MashIcon } from "@/components/icons";

const headlines = [
	{
		name: "Square",
		html: <Box w="12" h="12" backgroundColor={"white"} />,
	},
	{
		name: "Circle",
		html: <Box w="12" h="12" backgroundColor={"white"} borderRadius="full" />,
	},
];

const AnimatedBubble = (props) => {
	const [indexNum, setIndexNum] = React.useState(() => {
		return props.startIndex;
	});

	React.useEffect(() => {
		let timer = setTimeout(() => {
			setIndexNum((val) => {
				if (val === headlines.length - 1) {
					return 0;
				}
				return val + 1;
			});
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, [indexNum]);

	return (
		<Flex
			justifyContent={"center"}
			alignItems="center"
			color="white"
			overflowX={"hidden"}
			height="28"
			borderRadius={"lg"}
			backgroundColor="blackAlpha.900"
			{...props.containerOverrides}
		>
			<AnimatePresence mode="wait">
				{headlines.map((el, index) => {
					if (el === headlines[indexNum]) {
						return (
							<Box
								as={motion.div}
								key={index}
								initial={{
									x: -42,
									opacity: 0,
								}}
								animate={{
									x: 0,
									opacity: 1,
									transition: {
										delay: 0.2 * index,
									},
								}}
								exit={{
									x: 42,
									opacity: 0,
								}}
							>
								{headlines[indexNum].html}
							</Box>
						);
					}
					return null;
				})}
			</AnimatePresence>
		</Flex>
	);
};

export default AnimatedBubble;
