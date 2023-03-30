import ContentContainer from "@/components/common/Container";
import { Heading } from "@/lib/chakra-ui";

const Footer = () => {
	return (
		<footer id="footer" className="bg-black mt-28 text-gray-200">
			<ContentContainer>
				<div className="h-12 w-12 absolute -translate-y-full bg-black"></div>
				<div className="py-12">
					<Heading
						as="h2"
						fontSize="4xl"
						fontWeight={"black"}
						lineHeight="1"
					>
						MD. MASHRUKUL HUQUE
					</Heading>
					<a
						href="mailto:mashrukul.huque@gmail.com"
						className="mt-1 inline-block"
					>
						mashrukul.huque@gmail.com
					</a>{" "}
					/{" "}
					<a className="mt-1 inline-block" href="tel:+8801553706120">
						+8801553706120
					</a>
					<div className="mt-3 mb-6">
						<a
							className="block font-semibold mt-4"
							href="https://linkedin.com/in/md-mashrukul-huque"
						>
							LinkedIn
						</a>
						<a
							className="block font-semibold "
							href="https://codepen.io/md-mashrukul-huque"
						>
							Codepen
						</a>
					</div>
					<small className="text-gray-400">Copyright @2023</small>
				</div>
			</ContentContainer>
		</footer>
	);
};

export default Footer;
