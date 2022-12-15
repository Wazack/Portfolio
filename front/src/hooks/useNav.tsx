import { useContext, useEffect, useRef } from "react";
import { NavContext } from "../context/NavContext";
import useOnScreen from "./useOnScreen";

function useNav(navLinkId: string) {
    const ref = useRef(null)
    const { setActiveLinkId } = useContext(NavContext);

    const isOnScreen = useOnScreen(ref);

    useEffect(() => {
        if (isOnScreen) {
            setActiveLinkId(navLinkId);
        }
    }, [isOnScreen, setActiveLinkId, navLinkId])

    return ref;
}

export default useNav;