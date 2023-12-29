import { useCallback, useContext, useState } from "react";
import axios from "axios";

export default function useRegister() {
  const [resData, setResData] = useState<any>();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const registerURL = "/api/v1/users/register";

  const register = useCallback(
    async (
      account: string,
      password: string,
      first_name: string,
      end_name: string,
      email: string,
    ) => {
      setLoading(true);
      try {
        const res = await axios.post(registerURL, {
          account,
          password,
          first_name,
          end_name,
          email,
        });
        setResData(res.data);
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

  return { resData, error, loading, register };
}
