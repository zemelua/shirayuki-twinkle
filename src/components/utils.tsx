import { JSX } from "react";
import { SContent } from "~/components/SContent";
import { SRoot } from "~/components/SRoot";

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

export function BlockquoteSRoot({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["blockquote"]): JSX.Element {
	return (
		<SRoot<"blockquote"> as="blockquote" {...props}>
			{children}
		</SRoot>
	);
}

export function BodySRoot({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["body"]): JSX.Element {
	return (
		<SRoot<"body"> as="body" {...props}>
			{children}
		</SRoot>
	);
}

export function DetailsSRoot({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["details"]): JSX.Element {
	return (
		<SRoot<"details"> as="details" {...props}>
			{children}
		</SRoot>
	);
}

export function DialogSRoot({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["dialog"]): JSX.Element {
	return (
		<SRoot<"dialog"> as="dialog" {...props}>
			{children}
		</SRoot>
	);
}

export function FieldsetSRoot({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["fieldset"]): JSX.Element {
	return (
		<SRoot<"fieldset"> as="fieldset" {...props}>
			{children}
		</SRoot>
	);
}

export function FigureSRoot({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["figure"]): JSX.Element {
	return (
		<SRoot<"figure"> as="figure" {...props}>
			{children}
		</SRoot>
	);
}

export function TdSRoot({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["td"]): JSX.Element {
	return (
		<SRoot<"td"> as="td" {...props}>
			{children}
		</SRoot>
	);
}
