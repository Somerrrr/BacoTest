import { useCallback, useContext, useState } from "react";
import axios from "axios";

export default function useAddress() {
  const [data, setData] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const addressURL =
    process.env.NODE_ENV === "development"
      ? "/api/v1/address"
      : "https://bako.soooul.xyz/api/v1/address";
  const addressByUserURL =
    process.env.NODE_ENV === "development"
      ? "/api/v1/address/by_user"
      : "https://bako.soooul.xyz/api/v1/address/by_user";

  const getAddresses = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(addressURL);
      setData(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const getAddress = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`${addressURL}/${id}`);
      setData(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);
  const getAddressOrders = useCallback(async (uvid: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`${addressByUserURL}/${uvid}`);
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
  const updateAddress = useCallback(
    async (id: string, address: string, status: number) => {
      setLoading(true);
      try {
        const res = await axios.put(`${addressURL}/${id}`, {
          address,
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
  const createAddress = useCallback(async (address: string) => {
    setLoading(true);
    try {
      const res = await axios.post(addressURL, {
        address,
      });
      setData(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    loading,
    data,
    error,
    getAddresses,
    getAddress,
    getAddressOrders,
    updateAddress,
    createAddress,
  };
}
