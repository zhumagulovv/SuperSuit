import { create } from "zustand";

import { getProducts } from "../interface";

import { apiRoot } from "../api/config/api";

const initialState: Omit<getProducts, "execute"> = {
  loading: "idle",
  success: false,
  error: null,
  data: [],
};

export const useGetProducts = create<getProducts>((set) => ({
  ...initialState,
  execute: async () => {
    set({ ...initialState, loading: "loading" });

    try {
      const res = await apiRoot.get("/products");

      set({ loading: "success", success: true, error: null, data: res.data });
    } catch (error) {
      let errorMessage = "Unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      set({
        loading: "failed",
        success: false,
        error: errorMessage,
        data: [],
      });
    }
  },
}));
