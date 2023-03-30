import { Box } from "@/lib/chakra-ui";

const FramerMotionLogo = (props) => (
	<Box
		as="svg"
		xmlns="http://www.w3.org/2000/svg"
		width="14"
		height="21"
		viewBox="0 0 14 21"
		{...props}
	>
		<g clipPath="url(#a)">
			<path fill="#000" d="M0 0h14v7H7L0 0Zm0 7h7l7 7H7v7l-7-7V7Z" />
		</g>
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h14v21H0z" />
			</clipPath>
		</defs>
	</Box>
);

export default FramerMotionLogo;
