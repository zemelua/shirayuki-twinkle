import { createElement, JSX } from "react";
import { OutlineLevelContext } from "~/contexts/OutlineLevelContext";

export function SRoot<T extends keyof JSX.IntrinsicElements>({ as, children, ...props }: {
	as: T;
	children?: React.ReactNode;
} & JSX.IntrinsicElements[T]): JSX.Element {
	return (
		<OutlineLevelContext.Provider value={0}>
			{createElement(as, props, children)}
		</OutlineLevelContext.Provider>
	);
}
