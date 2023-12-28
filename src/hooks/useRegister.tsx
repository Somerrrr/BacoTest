import { useCallback, useContext, useState } from "react";
import axios from "axios";

export default function useRegister() {
  const [resData, setResData] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const registerURL = "/api/v1/users/register";

  const register = useCallback(async (account: string, password: string) => {
    setLoading(true);
    try {
      const res = await axios.post(registerURL, {
        account: account,
        password: password,
      });
      setResData(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { resData, error, loading, register };
}
