import { useCallback, useState } from "react";
import axios from "axios";

export default function useForgetPassWord() {
  const [verificationPass, setVerificationPass] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const URL_FORGET_SEND = "/api/v1/email/forget_password/sendcode";
  const URL_FORGET_VERIFY = "/api/v1/email/forget_password/verify";
  const URL_FORGET_RESET = "/api/v1/email/forget_password/resetaccount";

  const sendEmailCode = useCallback(async (email: string) => {
    setLoading(true);
    try {
      const res = await axios.post(URL_FORGET_SEND, { email: `${email}` });
      // console.log("sendEmail", res.data);
      return res.data;
    } catch (error: any) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  const verifyEmailCode = useCallback(async (email: string, v_code: string) => {
    setLoading(true);
    try {
      const res = await axios.post(URL_FORGET_VERIFY, {
        email: `${email.trim()}`,
        v_code: `${v_code.trim()}`,
      });
      // console.log("verifyEmailCode", res.data);
      setVerificationPass(res.data.code === 200);
      return res;
    } catch (error: any) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  const resetAccount = useCallback(
    async (email: string, code: string, new_password: string) => {
      setLoading(true);
      try {
        const res = await axios.put(URL_FORGET_RESET, {
          email: `${email.trim()}`,
          code: `${code.trim()}`,
          new_password: `${new_password.trim()}`,
        });
        // console.log("resetAccount", res.data);
        return res.data.code === 200;
      } catch (error: any) {
        console.log(error);
      }
      setLoading(false);
    },
    [],
  );

  return {
    verificationPass,
    error,
    loading,
    sendEmailCode,
    resetAccount,
    verifyEmailCode,
  };
}
