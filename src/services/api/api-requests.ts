import { AxiosRequestConfig } from "axios"

export const requests: { [key: string]: AxiosRequestConfig } = {
  getCardPhotos: {
    url: `/photos`,
    method: "GET",
  },
}
