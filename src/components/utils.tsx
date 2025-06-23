import { JSX } from "react";
import { SContent } from "~/components/SContent";

export function SectionSContent({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["section"]): JSX.Element {
	return (
		<SContent<"section"> as="section" {...props}>
			{children}
		</SContent>
	);
}

export function ArticleSContent({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["article"]): JSX.Element {
	return (
		<SContent<"article"> as="article" {...props}>
			{children}
		</SContent>
	);
}

export function AsideSContent({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["aside"]): JSX.Element {
	return (
		<SContent<"aside"> as="aside" {...props}>
			{children}
		</SContent>
	);
}

export function NavSContent({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["nav"]): JSX.Element {
	return (
		<SContent<"nav"> as="nav" {...props}>
			{children}
		</SContent>
	);
}
