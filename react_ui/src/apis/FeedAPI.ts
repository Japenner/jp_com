import { api } from "./configs/axiosConfigs";
import { defineCancelApiObject } from "./configs/axiosUtils";

export type Feed = {
  id: string;
  description: string;
  tags: string[];
  title: string;
  created_at: string;
  updated_at: string;
};

export const FeedAPI = {
  get: async (id: string, cancel = false) => {
    const response = await api.request({
      url: `/feeds/${id}`,
      method: "GET",
      signal: cancel
        ? cancelApiObject[FeedAPI.get.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.feed;
  },
  getAll: async (cancel = false) => {
    const response = await api.request({
      url: "/feeds/",
      method: "GET",
      signal: cancel
        ? cancelApiObject[FeedAPI.getAll.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.feeds;
  },
  search: async (name: string, cancel = false) => {
    const response = await api.request({
      url: "/feeds/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel
        ? cancelApiObject[FeedAPI.search.name].handleRequestCancellation().signal
        : undefined,
    });

    return response.data.feeds;
  },
  create: async (feed: Feed, cancel = false) => {
    await api.request({
      url: `/feeds`,
      method: "POST",
      data: feed,
      signal: cancel
        ? cancelApiObject[FeedAPI.create.name].handleRequestCancellation().signal
        : undefined,
    });
  },
};

const cancelApiObject = defineCancelApiObject(FeedAPI);
