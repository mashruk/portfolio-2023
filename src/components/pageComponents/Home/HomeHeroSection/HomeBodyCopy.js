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

const HomeBodyCopy = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 30,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				delay: 3 * 0.2,
			}}
			style={{
				maxWidth: "70ch",
			}}
		>
			<Text fontSize={"xl"} lineHeight="1.555">
				Mashrukul is a front-end focused software engineer with 3 years of
				experience where his prime focus has been on incorporating design
				system of User Interface for Web Application Products.
			</Text>
			<Text fontSize={"xl"} lineHeight="1.555" mt="4">
				Accompanied with a strong sense of UI Design Fundamentals, he has
				worked with designers and clients in making their vision consistent
				with the outcomes. His noteworthy role has been working on the
				E-Commerce Web Application for a UK-based CBD Brand{" "}
				<a
					class="font-bold underline"
					href="https://drk-cbd.co.uk/"
					target="_blank"
				>
					{" "}
					DRK CBD{" "}
				</a>{" "}
				, where he worked on the Design System for their web application
				making it accessible to other engineers.
			</Text>
			<Text fontSize={"xl"} lineHeight="1.555" mt="4">
				Having worked over a brand, he has gained valuable insight into how
				a product transitions in several phases of the software lifecycle.
			</Text>
		</motion.div>
	);
};

export default HomeBodyCopy;
