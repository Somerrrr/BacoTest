import { useCallback, useState } from "react";
import axios from "axios";

export default function useEmail() {
  const [data, setData] = useState<any>();
  const [verificationPass, setVerificationPass] = useState<boolean>(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const URL_EMAIL_SEND = "/api/v1/email/verification_code";
  const URL_EMAIL_VERIFY = "/api/v1/email/verification_code/verify";

  const sendEmailCode = useCallback(async (email: string) => {
    setLoading(true);
    try {
      const res = await axios.post(URL_EMAIL_SEND, { email: `${email}` });
      // console.log("sendEmail", res.data);
    } catch (error: any) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  const verifyEmailCode = useCallback(async (email: string, v_code: string) => {
    setLoading(true);
    try {
      const res = await axios.post(URL_EMAIL_VERIFY, {
        email: `${email.trim()}`,
        v_code: `${v_code.trim()}`,
      });
      // console.log("verifyEmailCode", res.data);
      setVerificationPass(res.data.code === 200);
      return res.data.code === 200;
    } catch (error: any) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  return {
    data,
    verificationPass,
    error,
    loading,
    sendEmailCode,
    verifyEmailCode,
  };
}
