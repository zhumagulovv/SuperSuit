import { create } from "zustand";
import { apiRoot } from "../api/config/api";
import { getProduct } from "../interface";

const initialState: Omit<getProduct, "execute"> = {
  loading: "idle",
  success: false,
  error: null,
  data: null,
};

export const useGetProductById = create<getProduct>((set) => ({
  ...initialState,
  execute: async (id: string) => {
    set({ ...initialState, loading: "loading" });

    try {
      const res = await apiRoot.get(`/products/${id}`);

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
        data: null,
      });
    }
  },
}));
