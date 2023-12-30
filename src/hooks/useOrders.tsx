import { useCallback, useContext, useState } from "react";
import axios from "axios";

export default function useOrders() {
  const [data, setData] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const ordersURL =
    process.env.NODE_ENV === "development"
      ? "/api/v1/orders"
      : "https://bako.soooul.xyz/api/v1/orders";
  const ordersByUserURL =
    process.env.NODE_ENV === "development"
      ? "/api/v1/orders/by_user"
      : "https://bako.soooul.xyz/api/v1/orders/by_user";

  const getOrders = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(ordersURL);
      setData(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const getOrder = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`${ordersURL}/${id}`);
      setData(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const getUserOrders = useCallback(async (uvid: string, status?: number) => {
    setLoading(true);
    try {
      const res = await axios.get(`${ordersByUserURL}/${uvid}`, {
        params: { status },
      });
      setData(res.data);
      console.log("getUserOrders", res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const updateOrder = useCallback(
    async (
      id: string,
      user_vid: string,
      address_vid: string,
      product_vid: string,
      status: number,
    ) => {
      setLoading(true);
      try {
        const res = await axios.put(`${ordersURL}/${id}`, {
          user_vid,
          address_vid,
          product_vid,
          status,
        });
        setData(res.data);
        setSuccess(true);
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
  const createOrder = useCallback(
    async (user_vid: string, address_vid: string, product_vid: string) => {
      setLoading(true);
      try {
        const res = await axios.post(ordersURL, {
          user_vid,
          address_vid,
          product_vid,
        });
        setData(res.data);
        setSuccess(true);
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
    loading,
    data,
    error,
    success,
    getOrders,
    getOrder,
    getUserOrders,
    updateOrder,
    createOrder,
  };
}
