import { api } from "./configs/axiosConfigs"
import { defineCancelApiObject } from "./configs/axiosUtils"

export const NoteAPI = {
  get: async function (id, cancel = false) {
    const response = await api.request({
      url: `/notes/:id`,
      method: "GET",
      // retrieving the signal value by using the property name
      signal: cancel ? cancelApiObject[this.get.name].handleRequestCancellation().signal : undefined,
    })

    // returning the note returned by the API
    return response.data.note
  },
  getAll: async function (cancel = false) {
    const response = await api.request({
      url: "/notes/",
      method: "GET",
      signal: cancel ? cancelApiObject[this.getAll.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.notes
  },
  search: async function (name, cancel = false) {
    const response = await api.request({
      url: "/notes/search",
      method: "GET",
      params: {
        name: name,
      },
      signal: cancel ? cancelApiObject[this.search.name].handleRequestCancellation().signal : undefined,
    })

    return response.data.notes
  },
  create: async function (note, cancel = false) {
    await api.request({
      url: `/notes`,
      method: "POST",
      data: note,
      signal: cancel ? cancelApiObject[this.create.name].handleRequestCancellation().signal : undefined,
    })
  },
}

// defining the cancel API object for noteAPI
const cancelApiObject = defineCancelApiObject(NoteAPI)
