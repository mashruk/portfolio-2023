"use client";

import { extendTheme } from "@chakra-ui/react";
import { Work_Sans } from "@next/font/google";

// Import the weights and subsets, add any other config here as well
const nextFont = Work_Sans({
	subsets: ["latin"],
	variable: true,
});

const siteTheme = extendTheme({
	// Set the fonts like this
	fonts: {
		body: nextFont.style.fontFamily,
		heading: nextFont.style.fontFamily,
	},
});

export { siteTheme };
