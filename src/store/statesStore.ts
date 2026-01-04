import { create } from 'zustand'

type Store = {
    isLoading: boolean
    searchedFlights: boolean
    setLoading: (isloding: boolean) => void
    setFetchdedFlight: (loading: boolean) => void
    showFlights: boolean
    setShowFlights: (loading: boolean) => void

}

export const useStore = create<Store>()((set) => ({
    isLoading: false,
    showFlights: false,
    searchedFlights: false,
    
    setFetchdedFlight: (loading) => set({ searchedFlights: loading }),
    setLoading: (loading) => set({ isLoading: loading }),
    setShowFlights: (loading) => set({ showFlights: loading }),
}))

