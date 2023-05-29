import { useAlertStore } from "@/stores/alerts";
import type { AuthToken } from "@/types";
import jwt_decode from "jwt-decode";

export const validateToken = (token: any) => {
  const now = Math.round(new Date().getTime() / 1000)
  let isValid = false;
  const alerts = useAlertStore();
  try {
    const decodedToken = jwt_decode(token) as AuthToken;
    isValid = decodedToken && now < decodedToken.exp;
  } catch (err: any) {
    alerts.error(err.message);
  }

  return isValid;
}
