import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';

interface AppState {
  batteryLevel: number | null;
}

const initialState: AppState = {
  batteryLevel: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setBatteryLevel(state, action: PayloadAction<number>) {
      state.batteryLevel = action.payload;
    },
  },
});

export const {setBatteryLevel} = appSlice.actions;

export const rootReducer = combineReducers({
  app: appSlice.reducer,
});
