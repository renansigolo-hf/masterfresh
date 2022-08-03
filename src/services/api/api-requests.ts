import { AxiosRequestConfig } from "axios"

export const requests: { [key: string]: AxiosRequestConfig } = {
  getRecipes: {
    url: `/recipes`,
    method: "GET",
  },
  getCardPhotos: {
    url: `/photos`,
    method: "GET",
  },
}
