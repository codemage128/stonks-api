import { createSlice } from "@reduxjs/toolkit";
import { eventsAPI } from "../api/event";

const initialState = {
  events: [],
  savedEvents: [],
};

const slice = createSlice({
  name: "event",
  initialState,
  reducers: {
    getEvents(state, action) {
      state.events = action.payload;
    },
    saveEvent(state, action) {
      state.savedEvents.push(action.payload);
    },
  },
});

export const getEvents = () => async (dispatch) => {
  const data = await eventsAPI.getEvents();
  dispatch(slice.actions.getEvents(data));
};
export const saveEvent = (eventId) => async (dispatch) => {
  dispatch(slice.actions.saveEvent(eventId));
};

export const { reducer } = slice;
