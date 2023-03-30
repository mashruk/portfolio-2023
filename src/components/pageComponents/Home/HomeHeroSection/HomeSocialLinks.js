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

const socialMediaLinks = [
	{
		href: "https://github.com/mashruk",
		icon: <GithubIcon />,
	},
	{
		href: "https://www.linkedin.com/in/md-mashrukul-huque/",
		icon: <LinkedInIcon />,
	},
];

const HomeSocaiLinks = () => {
	return (
		<Flex
			as={motion.div}
			mt="3"
			mb="5"
			gap="1"
			justifyContent={["center", , "flex-start"]}
			initial={{
				opacity: 0,
				y: 30,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 0.3,
			}}
		>
			{socialMediaLinks.map(({ href, icon }) => {
				return (
					<Link
						href={href}
						display="flex"
						alignItems={"center"}
						borderRadius="base"
						p="2"
						outline="none"
						fontWeight={"semibold"}
						_hover={{ color: "blackAlpha.700" }}
						_focus={{
							ring: "2",
							ringColor: "blackAlpha.800",
						}}
					>
						{icon}
					</Link>
				);
			})}
		</Flex>
	);
};

export default HomeSocaiLinks;
