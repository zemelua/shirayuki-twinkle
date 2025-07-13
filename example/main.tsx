import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { H } from "~/components/H";
import { ArticleSContent, SectionSContent } from "~/components/utils";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<SectionSContent>
			<H>Hello, Twinkle ✨️ This is the level 1 heading.</H>

			<Card />

			<SectionSContent>
				<H>Hello, Twinkle ✨️ This is the level 2 heading.</H>

				<Card>
					<p>This is the inner card!</p>
				</Card>

				<SectionSContent>
					<H>Hello, Twinkle ✨️ This is the level 3 heading.</H>

					<SectionSContent>
						<H>Hello, Twinkle ✨️ This is the level 4 heading.</H>

						<SectionSContent>
							<H>Hello, Twinkle ✨️ This is the level 5 heading.</H>

							<SectionSContent>
								<H>Hello, Twinkle ✨️ This is the level 6 heading.</H>

								<SectionSContent>
									<H>Hello, Twinkle ✨️ This is the level 7 heading and the tag is <code>h6</code></H>
								</SectionSContent>
							</SectionSContent>
						</SectionSContent>
					</SectionSContent>
				</SectionSContent>
			</SectionSContent>
		</SectionSContent>
	</React.StrictMode>
);

function Card({ children }: { children?: React.ReactNode }) {
	const hRef = React.useRef<HTMLHeadingElement>(null);
	const [tagName, setTagName] = useState<string | null>(null);

	useEffect(() => {
		if (hRef.current) {
			setTagName(hRef.current.tagName.toLowerCase());
		}
	}, []);

	return (
		<ArticleSContent style={{ border: "1px solid #ccc", padding: "16px", margin: "16px 0" }}>
			<H ref={hRef}>
				{`This is Card title. the tag is: ${tagName?.toLowerCase()}`}
			</H>
			{children}
		</ArticleSContent>
	);
}
