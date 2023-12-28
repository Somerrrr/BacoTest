import { useCallback, useContext, useState } from "react";
import axios from "axios";

export default function useLogin() {
  const [loginStatus, setLoginStatus] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const loginURL = "/api/v1/users/login";

  const login = useCallback(async (account: string, password: string) => {
    setLoading(true);
    try {
      const res = await axios.post(loginURL, {
        account: account,
        password: password,
      });
      setLoginStatus(res.data);
      return res.data;
    } catch (error: any) {
      setError(error);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return { loginStatus, error, loading, login };
}
