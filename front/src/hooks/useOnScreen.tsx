import React, { useState, MutableRefObject, useEffect } from "react";

function useOnScreen(ref: MutableRefObject<any>) {
    const [isOnScreen, setIsOnScreen] = useState(false);
    const observer = new IntersectionObserver((([entry]) => {
        setIsOnScreen(entry.isIntersecting);
    }), {
        threshold: 0.7
    })

    useEffect(() => {
        observer.observe(ref.current);

        return () => observer.disconnect();
    })

    return isOnScreen;
}

export default useOnScreen;