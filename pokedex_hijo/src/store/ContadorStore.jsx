import {create} from 'zustand';
import {persist} from 'zustand/middleware';

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
      listaNumeros: [],
      setCount: (p) => {
        set((state) => {
          const nuevoCount = state.count + p.numero
          return {
            count: nuevoCount,
            listaNumeros: [...state.listaNumeros, nuevoCount],
          }
        })
      },
      eliminarItem: (index) => {
        set((state) => {
          const nuevaLista = state.listaNumeros.filter((_, i) => i !== index)
          return {
            listaNumeros: nuevaLista,
          };
        });
      },
      resetear: () => {
        set(() => ({
          count: 0,
          listaNumeros: [],
        }))
      },
    }),
    {
      name: 'contador-storage',
      getStorage: () => localStorage,
    },
  ),
);
