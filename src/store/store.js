import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import commonSlice from './commonSlice';


// Persist configuration
const persistConfig = {
    key: 'auth',
    storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
    reducer: {
        auth: persistedReducer,
        common: commonSlice,
    },
});

const persistor = persistStore(store);

export { store, persistor };