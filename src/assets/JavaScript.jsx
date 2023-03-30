import { Box } from "@/lib/chakra-ui";

const JavaScriptLogo = (props) => (
	<Box as="svg" viewBox="0 0 100 100" fill="none" {...props}>
		<g clip-path="url(#a)">
			<path
				fill="#000"
				d="M91.816 76.15c-.732-4.563-3.708-8.393-12.52-11.968-3.06-1.406-6.473-2.414-7.49-4.733-.361-1.35-.409-2.11-.18-2.928.655-2.652 3.82-3.48 6.33-2.719 1.616.542 3.147 1.788 4.069 3.774 4.315-2.794 4.306-2.776 7.319-4.696-1.103-1.71-1.692-2.5-2.414-3.232-2.596-2.899-6.132-4.391-11.788-4.277-.979.123-1.967.256-2.946.38-2.823.713-5.514 2.196-7.091 4.183-4.734 5.37-3.385 14.771 2.376 18.64 5.675 4.259 14.011 5.228 15.076 9.211 1.036 4.877-3.584 6.455-8.175 5.894-3.384-.704-5.266-2.424-7.3-5.552-3.745 2.168-3.745 2.168-7.595 4.383.912 1.996 1.872 2.899 3.403 4.629 7.243 7.348 25.37 6.987 28.621-4.135.133-.38 1.008-2.928.305-6.854ZM54.362 45.96h-9.354c0 8.08-.038 16.103-.038 24.183 0 5.142.267 9.857-.57 11.302-1.369 2.842-4.914 2.49-6.53 1.939-1.645-.808-2.481-1.958-3.45-3.584-.267-.465-.467-.827-.533-.855-2.538 1.55-5.067 3.108-7.605 4.658 1.265 2.595 3.128 4.848 5.514 6.311 3.564 2.14 8.355 2.795 13.365 1.645 3.26-.95 6.074-2.918 7.547-5.913 2.13-3.925 1.673-8.678 1.654-13.935.048-8.574 0-17.148 0-25.75Z"
			/>
		</g>
		<path stroke="#000" stroke-width="2" d="M1 1h98v98H1z" />
		<defs>
			<clipPath id="a">
				<path fill="#fff" d="M0 0h100v100H0z" />
			</clipPath>
		</defs>
	</Box>
);

export default JavaScriptLogo;
