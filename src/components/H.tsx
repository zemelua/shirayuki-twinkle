import { JSX } from "react";
import { useOutlineLevel } from "~/hooks/useOutlineLevel";

export function H({ children, ...props }: { children?: React.ReactNode; } & JSX.IntrinsicElements["h1" | "h2" | "h3" | "h4" | "h5" | "h6"]): JSX.Element {
	const level = useOutlineLevel();

	const Tag = `h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	
	return <Tag {...props}>{children}</Tag>;
}
