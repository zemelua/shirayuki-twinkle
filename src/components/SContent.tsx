import { createElement, JSX, ReactNode } from "react";
import { OutlineLevelContext } from "~/contexts/OutlineLevelContext";
import { useOutlineLevel } from "~/hooks/useOutlineLevel";

export function SContent<T extends keyof JSX.IntrinsicElements>({ as, children, ...props }: {
	as: T;
	children?: ReactNode;
} & JSX.IntrinsicElements[T]): JSX.Element {
	const outlineLevel = useOutlineLevel();

	return (
		<OutlineLevelContext.Provider value={outlineLevel + 1}>
			{createElement(as, props, children)}
		</OutlineLevelContext.Provider>
	);
}
