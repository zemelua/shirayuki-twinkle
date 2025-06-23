import { useContext } from "react";
import { OutlineLevelContext } from "~/contexts/OutlineLevelContext";

export function useOutlineLevel(): number {
	return useContext(OutlineLevelContext);
}
