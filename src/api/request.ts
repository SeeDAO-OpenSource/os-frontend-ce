import type { AxiosResponse } from "axios";

export async function request<T, D = any>(req: () => Promise<AxiosResponse<T, D>>): Promise<T> {
  try {
    const { data } = await req();
    return data;
  } catch (error) {
    throw error;
  }
}
