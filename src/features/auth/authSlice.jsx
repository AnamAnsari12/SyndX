import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { checkUser, createUser } from './authAPI';

const initialState = {
  loggedInUser: null,
  status: 'idle',
  userError: null
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const createUserAsync = createAsyncThunk(
  'user/createUser',
  async (userData) => {
    const response = await createUser(userData);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const checkUserAsync = createAsyncThunk(
    'user/checkUserAsync',
    async (userData) => {
        const response = await checkUser(userData);
      // The value we return becomes the `fulfilled` action payload
if (response.data) {
      localStorage.setItem("userInfo", JSON.stringify(response.data));
 }
    
      return response.data;
    }
  );

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = 'loading';
      }) 
      .addCase(createUserAsync.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(checkUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(checkUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.userError = action.error;
      });
  },
});

export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectUserError = (state) => state.auth.userError;

export default authSlice.reducer;
