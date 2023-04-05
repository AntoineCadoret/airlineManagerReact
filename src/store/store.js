import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAirlineName = {airlineName:"Test Airline"};

const airlineNameSlice = createSlice({
    name: 'airlineName',
    initialState: initialAirlineName,
    reducers: {
        updateAirlineName: (state, action) => {
            state.airlineName = action.payload;
        }
    }
});

const store = configureStore({
    reducer: {airlineName : airlineNameSlice.reducer}
});

export const airlineNameAction = airlineNameSlice.actions;

export default store;