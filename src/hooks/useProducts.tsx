import { useCallback, useContext, useState } from "react";
import axios from "axios";

export default function useProducts() {
  const [data, setData] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const productsURL =
    process.env.NODE_ENV === "development"
      ? "/api/v1/products"
      : "https://bako.soooul.xyz/api/v1/products";

  const getProducts = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(productsURL);
      setData(res.data);
      console.log("getProducts", res.data.data.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getProduct = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`${productsURL}/${id}`);
      setData(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const updateProduct = useCallback(
    async (
      id: string,
      title: string,
      detail: string,
      specifications: string,
      imgs: string,
      price: number,
      status: number,
    ) => {
      setLoading(true);
      try {
        const res = await axios.put(`${productsURL}/${id}`, {
          imgs,
          specifications,
          detail,
          title,
          price,
          status,
        });
        setData(res.data);
        return res.data;
      } catch (error: any) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );
  const createProduct = useCallback(
    async (
      title: string,
      detail: string,
      specifications: string,
      imgs: string,
      price: number,
    ) => {
      setLoading(true);
      try {
        const res = await axios.post(productsURL, {
          imgs,
          specifications,
          detail,
          title,
          price,
        });
        setData(res.data);
        return res.data;
      } catch (error: any) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return {
    getProducts,
    getProduct,
    updateProduct,
    createProduct,
    data,
    error,
    loading,
  };
}
