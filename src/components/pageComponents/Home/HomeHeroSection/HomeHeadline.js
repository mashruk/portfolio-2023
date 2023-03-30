"use client";
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
import {
	motion,
	useMotionValue,
	useTransform,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from "framer-motion";
import { Link } from "@chakra-ui/next-js";
import { GithubIcon, LinkedInIcon, MashIcon } from "@/components/icons";
import AnimatedBubble from "@/components/AnimatedBubble/AnimatedBubble";

// import Image from "next/image";

const headlines = ["UI", "Frontend", "Animation"];

const HomeHeadline = () => {
	const [indexNum, setIndexNum] = React.useState(0);

	React.useEffect(() => {
		let timer = setTimeout(() => {
			setIndexNum((val) => {
				if (val === headlines.length - 1) {
					return 0;
				}
				return val + 1;
			});
		}, 4000);

		return () => {
			clearTimeout(timer);
		};
	}, [indexNum]);
	return (
		<Heading
			as={motion.h1}
			initial={{
				opacity: 0,
				y: 30,
			}}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.2,
				},
			}}
			fontSize={["5xl", , "7xl"]}
			fontWeight="black"
			lineHeight="none"
			maxW={["3xl", , , , "none"]}
		>
			An engineer that happens to be{" "}
			<Box as="span" fontWeight={"light"}>
				decent
			</Box>{" "}
			at{" "}
			<Box as="span" overflow={"hidden"}>
				<AnimatePresence mode="wait">
					{headlines.map((el, index) => {
						if (el === headlines[indexNum]) {
							return (
								<motion.span
									key={index}
									style={{
										display: "inline-block",
									}}
									initial={{
										y: 40,
									}}
									animate={{
										y: 0,
									}}
								>
									{headlines[indexNum]}
								</motion.span>
							);
						}
						return null;
					})}
				</AnimatePresence>
			</Box>
		</Heading>
	);
};

export default HomeHeadline;
