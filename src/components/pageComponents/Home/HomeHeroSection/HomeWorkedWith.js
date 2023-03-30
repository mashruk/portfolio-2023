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

const HomeWorkedWith = () => {
	return (
		<Box
			as={motion.div}
			mt="12"
			initial={{
				opacity: 0,
				y: 30,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					delay: 0.3,
				},
			}}
		>
			<Text fontSize="3xl" fontWeight="extrabold" lineHeight="1">
				Worked with...
			</Text>
			<Grid
				as="ul"
				gridTemplateColumns="repeat(auto-fit, 120px)"
				columnGap={"5"}
			>
				<AspectRatio as="li" ratio={1}>
					<svg viewBox="0 0 208 91">
						<g clip-path="url(#a)" fill="currentColor">
							<path d="M57.53 8.15H40.95v74.52h16.58V8.15ZM79.64 8.15H63.06v74.52h16.58V8.15ZM28.218 85.981c6.455-6.455 6.455-16.922 0-23.377-6.456-6.455-16.922-6.455-23.377 0-6.456 6.455-6.456 16.922 0 23.377 6.455 6.455 16.921 6.455 23.377 0ZM104.89 33.06c9.129 0 16.53-7.4 16.53-16.53S114.019 0 104.89 0c-9.13 0-16.53 7.4-16.53 16.53s7.4 16.53 16.53 16.53ZM207.34 88.55l-42.23-42.23-11.35.09V8.14h-16.57v74.53h16.57V58.41l30.39 30.4 23.19-.26ZM181.96 33.06c9.129 0 16.53-7.4 16.53-16.53S191.089 0 181.96 0c-9.13 0-16.53 7.4-16.53 16.53s7.4 16.53 16.53 16.53Z"></path>
						</g>
						<defs>
							<clipPath id="a">
								<path fill="#fff" d="M0 0h207.34v90.82H0z"></path>
							</clipPath>
						</defs>
					</svg>
				</AspectRatio>
			</Grid>
		</Box>
	);
};

export default HomeWorkedWith;
