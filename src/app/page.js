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
import HomeHeroSection from "@/components/pageComponents/Home/HomeHeroSection";
import JavaScriptLogo from "@/assets/JavaScript";
import MongoDBLogo from "@/assets/MongoDB";
import ApolloLogo from "@/assets/Apollo";
import FramerMotionLogo from "@/assets/FramerMotion";
import GraphQLLogo from "@/assets/GraphQL";
import NextJSLogo from "@/assets/Next";
import NodeJSLogo from "@/assets/Node";
import ReactLogos from "@/assets/React";
import TailwindLogo from "@/assets/Tailwind";

import Image from "next/image";

export default function Home() {
	return (
		<ContentContainer>
			<HomeHeroSection />
			<Box
				as="section"
				my="12"
				borderTopWidth={4}
				borderTopStyle={"solid"}
				borderTopColor="blackAlpha.800"
				pt="16"
			>
				<Text
					fontSize={"5xl"}
					fontWeight="black"
					lineHeight={"1"}
					maxW="40rem"
					as={motion.h2}
					initial={{
						opacity: 0,
						y: 30,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
					}}
					viewport={{ amount: 0.9, once: true }}
				>
					Churning inner creativity{" "}
					<Box as="span" fontWeight={"light"}>
						to
					</Box>{" "}
					make you stand out
				</Text>

				<Text fontSize={"base"} lineHeight={"1"} mt="8">
					With the domino effect
				</Text>
				<Grid
					mt="6"
					maxWidth={"4xl"}
					gridTemplateColumns="repeat(5, minmax(0,1fr))"
					gap="2"
					color="white"
				>
					<AnimatedBubble
						startIndex={0}
						containerOverrides={{
							gridColumn: "1 / span 2",
						}}
					/>
					<AnimatedBubble
						startIndex={1}
						containerOverrides={{
							gridColumn: "3 / span 1",
						}}
					/>
					<AnimatedBubble
						startIndex={0}
						containerOverrides={{
							gridColumn: "4 / 6",
						}}
					/>
					<AnimatedBubble
						startIndex={1}
						containerOverrides={{
							gridColumn: "1 / span 1",
						}}
					/>
					<AnimatedBubble
						startIndex={0}
						containerOverrides={{
							gridColumn: "2 / 4",
						}}
					/>
					<AnimatedBubble
						startIndex={1}
						containerOverrides={{
							gridColumn: "4 / span 2",
						}}
					/>
					<AnimatedBubble
						startIndex={0}
						containerOverrides={{
							gridColumn: "1 / span 1",
						}}
					/>
					<AnimatedBubble
						startIndex={1}
						containerOverrides={{
							gridColumn: "2 / span 1",
						}}
					/>
					<AnimatedBubble
						startIndex={0}
						containerOverrides={{
							gridColumn: "3 / span 2",
						}}
					/>
					<AnimatedBubble
						startIndex={1}
						containerOverrides={{
							gridColumn: "5 / span 1",
						}}
					/>
				</Grid>

				<BiggerAndBetter1 />
				<BiggerAndBetter2 />
			</Box>
			<CareerInANutShell1 />
		</ContentContainer>
	);
}

const BiggerAndBetter1 = () => {
	const carouselRef = React.useRef();

	const { scrollYProgress } = useScroll({
		target: carouselRef,
	});

	const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1.5]);

	const moveXmobile = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		["0", "-10%", "-17.0097%"]
	);
	const opacityHeading = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);
	const scaleBlack = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		[0.8, 1, 1.87]
	);

	return (
		<>
			<Box
				ref={carouselRef}
				mt="24"
				h="300vh"
				pt="16"
				pb="12"
				borderTopWidth={4}
				borderTopStyle="solid"
				borderTopColor={"blackAlpha.900"}
				overflow="clip"
			>
				<Box
					as={motion.div}
					style={{
						scale: scaleAnim,
						originX: "left",
						originY: "center",
					}}
					position="sticky"
					top="48"
					maxWidth={"40rem"}
					color="white"
					mixBlendMode={"difference"}
					zIndex="4"
				>
					<Text
						style={{
							x: moveXmobile,
							originX: "left",
							originY: "center",
						}}
						fontSize={["5xl", , , "5xl"]}
						className="mix-blend-difference text-white"
						fontWeight="black"
						lineHeight={"1"}
						as={motion.h2}
					>
						<motion.span style={{ opacity: opacityHeading }}>
							Even
						</motion.span>{" "}
						Bigger <Box as="br" display={{ md: "none" }} />
						<Box as="span" fontWeight={"light"}>
							and
						</Box>{" "}
						BETTER
					</Text>
				</Box>
				{/*  */}

				<Box
					style={{
						scaleY: scaleBlack,
					}}
					width={{ base: "12", md: "48" }}
					height="24"
					mt="10"
					ml="auto"
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				{/*  */}
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					mt="12"
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="12"
					ml="auto"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					ml="auto"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					ml="auto"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					ml="auto"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					ml="auto"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
				<Box
					as={motion.div}
					style={{
						scaleY: scaleBlack,
					}}
					mt="8"
					width={{ base: "28", md: "33%" }}
					height={{ base: "72", md: "96" }}
					transform={"auto-gpu"}
					translateY={"50%"}
					backgroundColor="blackAlpha.900"
				></Box>
			</Box>
		</>
	);
};
const BiggerAndBetter2 = () => {
	const carouselRef = React.useRef();

	const { scrollYProgress } = useScroll({
		target: carouselRef,
	});

	const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1.5]);
	const scaleAnim1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 2, 3]);
	const moveX = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		["0", "-200%", "-300%"]
	);
	const moveX2 = useTransform(
		scrollYProgress,
		[0, 0.5, 1],
		["0", "200%", "500%"]
	);
	// const moveXmobile = useTransform(scrollYProgress, [0, 0.5, 1], ["0", "-10%", "-17.0097%"]);
	// const opacityHeading = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);

	return (
		<Box
			ref={carouselRef}
			height="300vh"
			overflow={"clip"}
			borderTopWidth={4}
			borderTopStyle="solid"
			borderTopColor={"blackAlpha.900"}
		>
			<Box
				as={motion.div}
				style={{
					scale: scaleAnim,
					originX: "left",
					originY: "center",
				}}
				position="sticky"
				zIndex="4"
				top="48"
				maxWidth="40rem"
				mixBlendMode={"difference"}
				color="white"
			>
				<Box
					as={motion.div}
					style={{ scale: scaleAnim, x: moveX }}
					position="absolute"
					top="0"
					right="4"
					width="28"
					height="28"
					borderRadius="full"
					backgroundColor={"white"}
					transformOrigin={"top left"}
				></Box>
				<Box
					as={motion.div}
					style={{ scale: scaleAnim1, x: moveX2 }}
					position="absolute"
					mt="8"
					width="28"
					height="28"
					borderRadius="full"
					backgroundColor={"white"}
					transformOrigin={"top left"}
				></Box>
			</Box>

			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				ml="auto"
				mt="10"
				width={{ base: "12", md: "48" }}
				height="24"
				transform={"auto-gpu"}
				transformOrigin="center"
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
				// className=" mt-12 translate-y-1/2 bg-black md:w-1/3 w-28 h-72  lg:h-96"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				ml="auto"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				ml="auto"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				mt="8"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
				style={{
					scaleY: 1.87,
				}}
				// className=" mt-8 s translate-y-1/2      bg-black md:w-1/3 w-28 h-72 lg:h-96"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				ml="auto"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				ml="auto"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				ml="auto"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
			<Box
				as={motion.div}
				style={{
					scaleY: 1.87,
				}}
				mt="8"
				width={{ base: "28", md: "33%" }}
				height={{ base: "72", md: "96" }}
				transform={"auto-gpu"}
				// translateY={"50%"}
				backgroundColor="blackAlpha.900"
			></Box>
		</Box>
	);
};

const points = [
	{
		point: "Co-implemented a custom e-commerce framework based on Next.js, GraphQL and Express.js.  with stock/ inventory management, custom module for designing extensible products (options, variants), and custom CMS module built with Strapi.",
	},
	{
		point: "Developed design system using styled-components following atomic design principles following their brand identity guideline.",
	},
	{
		point: "Brought UI designs and animations to life creating micro-interactions with framer-motion.",
	},
	{
		point: "Migrated client-side state management modules from Redux.js to Apollo Link state, Reactive Vars and custom React Hooks.",
	},
	{
		point: "Improved customer experience including coupon code resulting in discount of the cart system.",
	},
	{
		point: "Shipped guest-checkout feature for conducting payment without having to sign in.",
	},
	{
		point: "Contributed to system integrations for payment processing with REST API and webhooks, and email marketing module with mailgun and CRON-job automation.",
	},
	{
		point: "Created campaign promotional email templates with XHTML with support for major email clients.",
	},
];

const techStacks = [
	{
		name: "JavaScript",
		JSXImage: JavaScriptLogo,
	},
	{
		name: "Node",
		JSXImage: NodeJSLogo,
	},
	{
		name: "React",
		JSXImage: ReactLogos,
	},
	{
		name: "Next",
		JSXImage: NextJSLogo,
	},
	{
		name: "Framer Motion",
		JSXImage: FramerMotionLogo,
	},
	{
		name: "TailwindCSS",
		JSXImage: TailwindLogo,
	},
	{
		name: "MongoDB",
		JSXImage: MongoDBLogo,
	},
	{
		name: "GraphQL",
		JSXImage: GraphQLLogo,
	},
	{
		name: "Apollo",
		JSXImage: ApolloLogo,
	},
];
const CareerInANutShell1 = () => {
	return (
		<Box
			id="about"
			className="scroll-mt-12"
			as="section"
			position="relative"
			zIndex={4}
			mt="24"
			pt="16"
			borderTop={4}
			borderTopStyle="solid"
			borderTopColor={"blackAlpha.800"}
		>
			<Grid
				mb="12"
				templateColumns={{ lg: "repeat(5, minmax(0,1fr))" }}
				gap="6"
			>
				<GridItem gridColumn={"1/span 3"}>
					<Heading
						as="h2"
						fontSize="5xl"
						fontWeight={"black"}
						lineHeight="1"
					>
						MD. MASHRUKUL HUQUE
					</Heading>
					<Text
						mt="2"
						fontSize="lg"
						fontWeight={"medium"}
						textTransform="uppercase"
					>
						Frontend Engineer/Design System/UI-UX
					</Text>

					<Text mt="5" maxWidth={"70ch"} fontSize="xl">
						Delivering delightful web experiences over 3+ years with keen
						focus towards frontend technologies that includes React.js,
						Next.js and general Javascript stack.
					</Text>
					<Text mt="5" maxWidth={"70ch"} fontSize="xl">
						Motivated to build the next big web, with the in-depth
						knowledge I bring to the table in years of experience gathered
						throughout my journey.
					</Text>

					<Text
						as={motion.p}
						initial={{
							opacity: 0,
							y: 30,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
						}}
						viewport={{ amount: 0.9, once: true }}
						mt="6"
						mb="3"
						fontSize="lg"
						fontWeight={"bold"}
						textTransform="uppercase"
					>
						Worked in Stacks
					</Text>
					<Grid
						as={motion.div}
						initial={{
							opacity: 0,
							y: 30,
						}}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: {
								delay: 0.2,
							},
						}}
						once="true"
						viewport={{ amount: 0.9, once: true }}
						gridTemplateColumns="repeat(auto-fit, 60px)"
						gap="4"
					>
						{techStacks.map(({ name, JSXImage }) => {
							return (
								<Box key={name}>
									<AspectRatio ratio={1 / 1}>
										{<JSXImage />}
									</AspectRatio>
									<Box
										display={"flex"}
										fontSize="xs"
										justifyContent={"center"}
									>
										{name}{" "}
									</Box>
								</Box>
							);
						})}
					</Grid>
				</GridItem>
			</Grid>

			{/*  */}
			<Heading fontSize={"5xl"} fontWeight="black" lineHeight={"1"}>
				Career <br />
				<Box as="span" ml="10" display={"inline-block"} fontWeight="light">
					in
				</Box>{" "}
				a Nutshell
			</Heading>
			{/*  */}
			<Box my="12">
				<Flex flexDirection={{ base: "column", md: "row" }} gap="4">
					<Box
						flexShrink={"0"}
						position="relative"
						h="24"
						w="24"
						borderRadius={"full"}
						backgroundColor="blackAlpha.800"
					>
						<Image fill src="/upb8.jpg" />
					</Box>
					<div>
						<Heading as="h2" fontSize={"xl"} fontWeight="bold">
							UpB8
						</Heading>
						<Text>Software Engineer</Text>
						<Box mt="4" maxWidth="50ch" fontSize={"xl"}>
							<Text>
								Upb8 is a collective of carefully picked engineers and
								creatives working together to produce high quality web
								and mobile applications.
							</Text>
							<Text mt="4">
								Worked primarily with design system implementation,
								custom pages and API integration to enable feature with
								stacks involving React.js, Next.js and Apollo GraphQL.
							</Text>
						</Box>
					</div>
				</Flex>
			</Box>
			{/*  */}
			<Box mt="16">
				<Box marginInline="auto" maxW={"70ch"}>
					{/*  */}
					<AspectRatio
						ratio={16 / 9}
						justifyContent={"center"}
						alignItems="center"
						backgroundColor={"blackAlpha.800"}
						color="whitesmoke"
					>
						<Box
							as={motion.div}
							initial={{
								opacity: 0,
								y: 30,
							}}
							whileInView={{
								opacity: 1,
								y: 0,
							}}
							viewport={{ amount: 0.9, once: true }}
							w="120px"
							h="120px"
						>
							<svg className="h-[120px] w-[120px]" viewBox="0 0 208 91">
								<g clip-path="url(#a)" fill="currentColor">
									<path d="M57.53 8.15H40.95v74.52h16.58V8.15ZM79.64 8.15H63.06v74.52h16.58V8.15ZM28.218 85.981c6.455-6.455 6.455-16.922 0-23.377-6.456-6.455-16.922-6.455-23.377 0-6.456 6.455-6.456 16.922 0 23.377 6.455 6.455 16.921 6.455 23.377 0ZM104.89 33.06c9.129 0 16.53-7.4 16.53-16.53S114.019 0 104.89 0c-9.13 0-16.53 7.4-16.53 16.53s7.4 16.53 16.53 16.53ZM207.34 88.55l-42.23-42.23-11.35.09V8.14h-16.57v74.53h16.57V58.41l30.39 30.4 23.19-.26ZM181.96 33.06c9.129 0 16.53-7.4 16.53-16.53S191.089 0 181.96 0c-9.13 0-16.53 7.4-16.53 16.53s7.4 16.53 16.53 16.53Z"></path>
								</g>
								<defs>
									<clipPath id="a">
										<path fill="#fff" d="M0 0h207.34v90.82H0z"></path>
									</clipPath>
								</defs>
							</svg>
						</Box>
					</AspectRatio>
					{/*  */}
					<Box mt="9">
						<Text
							fontSize={"4xl"}
							fontWeight="bold"
							lineHeight={"1"}
							letterSpacing="-0.025em"
						>
							A CBD Brand featured on NHS, Global Health & Pharma
						</Text>

						{points.map(({ point }, index) => {
							return (
								<Flex
									key={index}
									mt="6"
									alignItems={"baseline"}
									columnGap="3"
									fontSize={"xl"}
								>
									<Box
										h="2"
										w="2"
										flexShrink={0}
										backgroundColor="blackAlpha.800"
									/>
									<span>{point}</span>
								</Flex>
							);
						})}
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

// const UseMotionValue = () => {
// 	const scale = useMotionValue(null); // animation gonna start from scale 1
// 	const opacity = useTransform(scale, [1, 2], [1, 0.5]);
// 	// const backgroundColor = useTransform(scale, [1, 2], ["#000", "#d4d4d4"]);
// 	const backgroundColor = useTransform(opacity, [1, 0.5], ["#000", "#a23d45"]);

// 	const [clicked, setClicked] = React.useState(false);
// 	const variants = {
// 		clicked: {
// 			scale: 2,
// 		},
// 		unclicked: {
// 			scale: 1,
// 		},
// 	};

// 	console.log({ scale, opacity });

// 	backgroundColor.on("change", (val) => {
// 		console.log({ val });
// 	});

// 	const handleClick = () => {
// 		setClicked((c) => !c);
// 	};

// 	return (
// 		<motion.div
// 			style={{
// 				scale,
// 				opacity,
// 				backgroundColor,
// 			}}
// 			onClick={handleClick}
// 			variants={variants}
// 			// initial={false}
// 			animate={clicked ? "clicked" : "unclicked"}
// 			className="w-12 h-12 bg-black"
// 		></motion.div>
// 	);
// };
