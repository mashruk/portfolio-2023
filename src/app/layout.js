import SiteLayout from "@/layout/SiteLayout";
import { ChakraProvider, siteTheme } from "@/lib/chakra-ui";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body>
				<ChakraProvider theme={siteTheme}>
					<SiteLayout>{children}</SiteLayout>
				</ChakraProvider>
			</body>
		</html>
	);
}
