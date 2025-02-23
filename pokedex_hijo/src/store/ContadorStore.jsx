import {create} from 'zustand';
import {persist} from 'zustand/middleware/persist';

//export const useContadorStore = create((set) => ({
//  count: 0,
//  setCount: () => set((state) => ({
//    count: state.count + 1,
//  })),
//}));

/* Las llaves permiten que se ejecute mas de una funcion */
export const useContadorStore = create(
  persist(
    (set, get) => ({
      count: 0,
      setCount: (parametro) => {
        set((state) => ({count: state.count + parametro.numero}))
      },
    }),
    {
      name: 'loca-storage-contador',
      storage: () => localStorage,
    },
  ),
);
