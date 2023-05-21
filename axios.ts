import router from "@/router";
import { SystemPath } from "@/store";
import { message } from "ant-design-vue";
import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosRequestHeaders,
} from "axios";

const TOKEN_KEY = `${process.env.VUE_APP_TK}`;

const appAxios = axios.create({});

const openNotificationWithIcon = (
  type: "error" | "info",

  description: string
) => {
  // messager: string | number,
  message[type](description ? description : "มีบางอย่างผิดพลาด ลองอีกครั้ง!");
};

const handleError = async (error: AxiosError) => {
  const { response } = error;
  const { statusCode, message } = response?.data;
  if (statusCode === 401 && message === "Unauthorized") {
    import("@/_composables/auth").then(({ useAuth }) => {
      const { logOut } = useAuth();
      logOut();
      router?.replace({ name: SystemPath.login.name, query: undefined });
    });
  } else {
    // statusCode
    openNotificationWithIcon("error", message);
  }
  return Promise.reject(error);
};

appAxios.interceptors.response.use((response: AxiosResponse) => {
  return response;
}, handleError);
appAxios.interceptors.request.use((config: AxiosRequestConfig) => {
  const currentToken = localStorage.getItem(TOKEN_KEY);
  if (currentToken) {
    (
      config.headers as AxiosRequestHeaders
    ).Authorization = `Bearer ${currentToken}`;
  }
  return config;
});

export default appAxios;
