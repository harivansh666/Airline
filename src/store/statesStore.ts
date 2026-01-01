import { create } from 'zustand'

type Store = {
    isLoading: boolean
    setLoading: (isloding: boolean) => void
}

export const useStore = create<Store>()((set) => ({
    isLoading: false,
    setLoading: (loading) => set({ isLoading: loading }),
}))

