import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import axiosInstance from '../../common/axiosInstance';

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  avatar: FileList | string;
}

export interface AuthCreds {
  email: string;
  password: string;
}
export interface ReturnedAuthCreds {
  access_token: string;
}

export const fetchUsers = createAsyncThunk(
  'fetchUsers',

  async () => {
    const response = await axiosInstance.get('/users');
    return response.data;
  }
);

export const authenticateCredentials = createAsyncThunk(
  'authenticateCredentials',
  async (access_token: string) => {
    try {
      const response = await axiosInstance.post('/auth/profile', {
        headers: { Authorization: `Bearer${access_token}` },
      });
      const data: ReturnedAuthCreds = response.data;
      return data;
    } catch (e) {
      const error = e as AxiosError;
      return error;
    }
  }
);

export const loginUser = createAsyncThunk(
  'loginUser ',
  async ({ email, password }: AuthCreds) => {
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      });
      const data: ReturnedAuthCreds = response.data;
      return data;
    } catch (e) {
      const error = e as AxiosError;
      return error;
    }
  }
);

export const registerUser = createAsyncThunk(
  'registerUser',
  async (user: IUserRegister) => {
    try {
      const response = await axiosInstance.post(
        'files/upload',
        {
          file: user.avatar[0],
        },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const url: string = response.data.location;
      const UserResponse = await axiosInstance.post('users', {
        ...user,
        avatar: url,
      });
      const data = UserResponse.data;
      return data;
    } catch (e) {
      const error = e as AxiosError;
      return error;
    }
  }
);

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: FileList | string;
}
export interface UserState {
  userList: [];
  currentUser?: User;
  success: boolean;
}

const initialState: UserState = {
  userList: [],
  success: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(fetchUsers.fulfilled, (state, action) => {
      console.log('categories data is fetched');
      if (action.payload && 'message' in action.payload) {
        return state;
      } else if (!action.payload) {
        return state;
      }
      return action.payload;
    });
    build.addCase(fetchUsers.rejected, (state, action) => {
      console.log('error');
      return state;
    });
    build.addCase(fetchUsers.pending, (state, action) => {
      console.log('loading');
      return state;
    });
    build.addCase(registerUser.fulfilled, (state, action) => {
      console.log('User is registered');
      if (action.payload && 'message' in action.payload) {
        return state;
      } else if (!action.payload) {
        return state;
      }
      return action.payload;
    });
    build.addCase(registerUser.rejected, (state, action) => {
      console.log('error');
      return state;
    });
    build.addCase(registerUser.pending, (state, action) => {
      console.log('loading');
      return state;
    });
  },
});

// export const {} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
