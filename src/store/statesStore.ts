import { create } from 'zustand'

type Store = {
    isLoading: boolean
    searchedFlights: boolean
    setLoading: (isloding: boolean) => void
    setFetchdedFlight: (loading: boolean) => void
}

export const useStore = create<Store>()((set) => ({
    isLoading: false,
    searchedFlights: false,
    setFetchdedFlight: (loading) => set({ searchedFlights: loading }),
    setLoading: (loading) => set({ isLoading: loading }),
}))

