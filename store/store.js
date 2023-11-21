import { atom } from 'jotai'
import create from 'zustand'

 const TabStore = create((set) => ({
    activeTab: '',
  setActiveTab: (x) => set((state) => ({ activeTab: x})),

}))

export default TabStore



export const modal = atom(false)