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
import HomeHeadline from "./HomeHeadline";
import HomeSocaiLinks from "./HomeSocialLinks";
import HomeWorkedWith from "./HomeWorkedWith";
import HomeBodyCopy from "./HomeBodyCopy";

const HomeNameBlock = () => {
	return (
		<Heading
			initial={{
				width: "0",
			}}
			animate={{
				width: "fit-content",
				transition: {
					delay: 1 * 0.2,
					// duration: 0.5,
				},
			}}
			as={motion.h2}
			marginX={["auto", , "0"]}
			transform="auto"
			overflow={"hidden"}
			skewX="-6deg"
			bg="blackAlpha.800"
			fontSize="xl"
			fontWeight={"bold"}
			textTransform="uppercase"
			color={"#ffffff"}
		>
			<Box px="2" py="4" whiteSpace="nowrap">
				Md. Mashrukul Huque
			</Box>
		</Heading>
	);
};

export default HomeNameBlock;
