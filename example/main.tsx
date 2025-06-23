import React from "react";
import ReactDOM from "react-dom/client";
import { H } from "~/components/H";
import { SectionSContent } from "~/components/utils";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SectionSContent>
			<H>Hello, World! This is the level 1 heading.</H>

			<SectionSContent>
				<H>Hello, World! This is the level 2 heading.</H>
			</SectionSContent>
		</SectionSContent>
	</React.StrictMode>
);
