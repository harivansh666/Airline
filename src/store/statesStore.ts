import { create } from 'zustand'

type Store = {
    isLoding: boolean
    setLoding: (isloding: boolean) => void
}

export const useStore = create<Store>()((set) => ({
    isLoding: false,
    setLoding: (isloding: boolean) => set({ isLoding: !isloding }),
}))

