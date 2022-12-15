import { createContext, useState } from "react";

export const NavContext = createContext<{
    activeLinkId: string | null,
    setActiveLinkId: (newValue: string) => void
  }>({
    activeLinkId: null,
    setActiveLinkId: () => undefined
  })


function NavProvider({ children }: any) {
    const [activeLinkId, setActiveLinkId] = useState<string | null>(null);

    const providerValue = {
        activeLinkId,
        setActiveLinkId
    }

    return (
        <NavContext.Provider value={providerValue}>
            {children}
        </NavContext.Provider>
    )
}

export default NavProvider;