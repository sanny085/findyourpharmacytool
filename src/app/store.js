import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer/counterSlice';
import UserReducer from './UserReducer/UserSlice';

export default configureStore({
    reducer: {
        counter: counterReducer,
        User: UserReducer
    }
});
