import { useCallback, useContext, useState } from "react";
import axios from "axios";

export default function useUser() {
  const [loginStatus, setLoginStatus] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const usersURL = "/api/v1/users";

  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(usersURL);
      setLoginStatus(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const getUser = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const res = await axios.get(`${usersURL}/${id}`);
      setLoginStatus(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateUser = useCallback(
    async (
      id: string,
      first_name: string,
      end_name: string,
      email: string,
      avatar: string,
      status: number,
    ) => {
      setLoading(true);
      try {
        const res = await axios.put(`${usersURL}/${id}`, {
          first_name,
          end_name,
          email,
          avatar,
          status,
        });
        setLoginStatus(res.data);
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

  return { getUser, loading, updateUser, getUsers, loginStatus, error };
}
