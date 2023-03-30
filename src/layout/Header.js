"use client";
import * as React from "react";
import { useState, useEffect, useRef } from "react";

import AnchorLink from "next/link";
import { motion, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { Text, Box, Icon, IconButton } from "@/lib/chakra-ui";

import ContentContainer from "@/components/common/Container";

const links = [
	{ path: "/", name: "Home" },
	{ path: "#about", name: "About" },
	{ path: "#footer", name: "Contact" },
	// { path: "/contact", name: "#" },
];

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [scrollUp, setScrollUp] = useState(false);

	const { scrollY } = useScroll();

	const toggleMenu = () => {
		const mediaWatcher = window.matchMedia("(min-width: 768px)");
		if (mediaWatcher.matches) return;

		setOpenMenu((state) => !state);
	};

	useEffect(() => {
		if (openMenu) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [openMenu]);

	useEffect(() => {
		const unsubscribe = scrollY.on("change", () => {
			const current = scrollY.get();
			const prev = scrollY.getPrevious();
			const shouldScrollUp = current > 200 && prev < current;
			setScrollUp(shouldScrollUp);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<Box
			as="header"
			pos={"sticky"}
			top="0"
			bg="#fdfbfb"
			zIndex={"docked"}
			borderBottomWidth={4}
			borderBottomColor="blackAlpha.900"
			transform="auto-gpu"
			transition="transform 0.6s ease-out"
			translateY={scrollUp ? "-100%" : "none"}
		>
			<ContentContainer>
				<Box
					py="2"
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Text
						color={"blackAlpha.900"}
						fontSize={["xl", , "2xl"]}
						letterSpacing={"tighter"}
						fontWeight="bold"
						lineHeight={1}
					>
						MH
					</Text>
					<IconButton
						onClick={toggleMenu}
						display={["block", , "none"]}
						h="auto"
						p="2"
						bg="transparent"
						borderRadius={"md"}
						borderColor="transparent"
						borderWidth={1}
						transition="box-shadow 0.2s ease-in-out"
						_hover={{
							ring: "2",
							ringColor: "blackAlpha.900",
						}}
						_focus={{
							ring: "4",
							ringColor: "blackAlpha.900",
						}}
						_active={{
							ring: "1",
							ringColor: "blackAlpha.900",
						}}
						icon={<HamburgerIcon width={6} height={6} />}
					/>
					<NavList onToggleMenu={toggleMenu} openMenu={openMenu} />
				</Box>
			</ContentContainer>
		</Box>
	);
};

export default Header;

const HamburgerIcon = (props) => {
	return (
		<Icon
			fill="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="2"
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</Icon>
	);
};

const CloseIcon = (props) => {
	return (
		<Icon
			fill="none"
			viewBox="0 0 24 24"
			strokeWidth={2}
			stroke="currentColor"
			{...props}
		>
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M6 18L18 6M6 6l12 12"
			/>
		</Icon>
	);
};

const openMenuNavStyles = {
	visibility: "visible",
	opacity: 1,
	pointerEvents: "all",
	transition: "opacity 120ms ease-out",
};
const closedMenuNavStyles = {
	visibility: ["hidden", , "visible"],
	opacity: [0, , 1],
	pointerEvents: ["none", , "auto"],
	transition: "visibility 120ms ease-out, opacity 60ms ease-out",
};

const NavList = ({ onToggleMenu, openMenu }) => {
	const nav = useRef();

	const path = usePathname();

	const onNavClick = (event) => {
		if (event.target === nav.current) {
			onToggleMenu();
		}
	};

	return (
		<Box
			onClick={onNavClick}
			as="nav"
			ref={nav}
			_before={{
				content: '""',
				position: ["fixed", , "static"],
				inset: [0, , "auto"],
				bg: "rgba(0,0,0,0.7)",
				zIndex: "-1",
				display: [, , "none"],
				backdropFilter: "blur(6px)",
			}}
			position={["fixed", , "static"]}
			top={["6", , "auto"]}
			left={["4", , "auto"]}
			right={["4", , "auto"]}
			bottom="auto"
			zIndex="4"
			t
			{...(openMenu ? openMenuNavStyles : closedMenuNavStyles)}
		>
			<IconButton
				onClick={onToggleMenu}
				display={["block", , "none"]}
				h="auto"
				p="2"
				mb="-6"
				backgroundColor="white"
				borderRadius={"md"}
				borderColor="blackAlpha.900"
				borderWidth={1}
				transition="box-shadow 0.2s ease-in-out"
				outline={"2px solid"}
				marginLeft="auto"
				_hover={{
					ring: "2",
					ringColor: "blackAlpha.900",
				}}
				_focus={{
					ring: "4",
					ringColor: "blackAlpha.900",
				}}
				_active={{
					ring: "1",
					ringColor: "blackAlpha.900",
				}}
				icon={<CloseIcon width={6} height={6} />}
			/>

			<Box
				as="ul"
				display="flex"
				flexDirection={["column", , "row"]}
				gap="2"
				py={[8, , 0]}
				px={[4, , 0]}
				rounded="sm"
				listStyleType={"none"}
				backgroundColor={["white", , "transparent"]}
				pointerEvents={"auto"}
				borderWidth={["medium", , "0"]}
				borderColor={["blackAlpha.900", , "transparent"]}
				borderStyle={["solid", , "none"]}
			>
				{links.map((aLink) => {
					return (
						<WebsiteLink
							key={aLink.name}
							onToggleMenu={onToggleMenu}
							link={aLink.path}
							name={aLink.name}
							pathMatches={path === aLink.path}
						/>
					);
				})}
			</Box>
		</Box>
	);
};

const webLinkHoverStyle = {
	outlineColor: "blackAlpha.900",
	outline: "2px solid",
	boxShadow: "inset 0px -4px 0px 0px  rgba(0, 0, 0, 1)",
	borderRadius: "md",
};
const WebsiteLink = ({ link, name, pathMatches, onToggleMenu }) => {
	return (
		<Box
			as={motion.li}
			marginX={[2, , 0]}
			borderRadius={"md"}
			textAlign={"center"}
			position="relative"
		>
			<a href={link} onClick={onToggleMenu}>
				<Box
					as="div"
					px={[2, , 3]}
					display="block"
					py="4"
					fontSize={"lg"}
					fontWeight={"bold"}
					_hover={webLinkHoverStyle}
					{...(pathMatches ? webLinkHoverStyle : {})}
				>
					{name}
				</Box>
			</a>
			{/* {pathMatches && <Box as={motion.div} layoutId="a" pos="absolute" inset="0" outline={"2px solid"} outlineColor="gray.700" borderRadius={"md"} pointerEvents="none" />}
			{pathMatches && <Box as={motion.div} layoutId="b" position={"absolute"} bottom="0" bg="black" insetX="0" h="1" borderRadius={"md"} />} */}
		</Box>
	);
};
