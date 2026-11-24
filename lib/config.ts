const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000").replace(/\/+$/, "");

export const APP_LOGIN_URL = `${appUrl}/login`;
