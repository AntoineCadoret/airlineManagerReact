import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAirlineName = {airlineName:"Test Airline"};
const initialFleet = {fleet:[]};

const airlineNameSlice = createSlice({
    name: 'airlineName',
    initialState: initialAirlineName,
    reducers: {
        updateAirlineName: (state, action) => {
            state.airlineName = action.payload;
        }
    }
});
const fleetSlice = createSlice({
    name: 'fleet',
    initialState: initialFleet,
    reducers: {
        addAirplane: (state, action) => {
            state.fleet.push(action.payload);
        },
        updateAirplane: (state, action) => {
            const index = action.payload.index;
            state.fleet[index] = action.payload.newAirplane;
        },
        removeAirplane: (state, action) => {
            const index = state.fleet.indexOf(action.payload);
            state.fleet.splice(index, 1);
        }
    }
});

const store = configureStore({
    reducer: {airlineName : airlineNameSlice.reducer, fleet : fleetSlice.reducer}
});

export const airlineNameAction = airlineNameSlice.actions;
export const fleetAction = fleetSlice.actions;

export default store;