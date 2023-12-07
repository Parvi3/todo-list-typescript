import { RefObject, useEffect } from "react";

interface IClickOutside {
    element: RefObject<HTMLElement> | null;
    callback: () => void;
}

export const useClickOutside = ({ element, callback }: IClickOutside) => {
    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (
                !element?.current ||
                element.current.contains(event.target as HTMLElement)
            ) {

                return;
            }

            callback();
        };

        window.addEventListener("click", handler);

        return () => window.removeEventListener("click", handler);
    }, [callback, element]);
}