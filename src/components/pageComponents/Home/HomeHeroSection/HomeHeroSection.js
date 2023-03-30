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
import HomeNameBlock from "./HomeNameBlock";
import Apollo, { ApolloIcon } from "@/assets/Apollo";

// import Image from "next/image";

export default function Home() {
	return (
		<ContentContainer>
			<Box as="section" pt="8" pb="8">
				<div>
					<HomeHeadline />
					<Grid
						mt="8"
						gridTemplateColumns="repeat(3, minmax(0,1fr))"
						columnGap="6"
						rowGap="10"
					>
						<GridItem colSpan={[3, , 2]} rowStart={[, , 1]}>
							<HomeNameBlock />
							<HomeSocaiLinks />
							<HomeBodyCopy />
						</GridItem>
						<GridItem
							colSpan={[3, , 1]}
							colStart={[1, , 3]}
							rowStart="1"
							width="min(269px,100%)"
							alignSelf={[, , "center"]}
							justifySelf="center"
						>
							<img
								class="border-4 border-solid border-black  object-contain rounded-2xl  grayscale"
								src="/mashruk.jpg"
								alt=""
							/>
						</GridItem>
					</Grid>
				</div>
				<HomeWorkedWith />
			</Box>
		</ContentContainer>
	);
}
