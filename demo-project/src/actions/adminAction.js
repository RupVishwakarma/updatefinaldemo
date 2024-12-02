import axiosInstance from "../utlis/axios";
import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  ALL_CHATS_REQUEST,
  ALL_CHATS_SUCCESS,
  ALL_CHATS_FAIL,
  ALL_POSTS_REQUEST,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_FAIL,
  ALL_MESSAGES_REQUEST,
  ALL_MESSAGES_SUCCESS,
  ALL_MESSAGES_FAIL,
  CLEAR_ERRORS,
} from '../constant/adminConstant';

// Admin Login Action
export const adminLogin = (secretKey) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const config = {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axiosInstance.post('/admin/login', { secretKey }, config);

    dispatch({
      type: ADMIN_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload: error.response?.data?.message || 'An error occurred during login',
    });
  }
};

// Fetch All Users
export const fetchAdminAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USERS_REQUEST });

    const { data } = await axiosInstance.get('/admin/users');

    dispatch({
      type: ALL_USERS_SUCCESS,
      payload: data.users, // Adjust based on actual API structure
    });
  } catch (error) {
    dispatch({
      type: ALL_USERS_FAIL,
      payload: error.response?.data?.message || 'An error occurred while fetching users',
    });
  }
};

// Fetch All Chats
export const fetchAdminAllChats = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CHATS_REQUEST });

    const { data } = await axiosInstance.get('/admin/chats');

    dispatch({
      type: ALL_CHATS_SUCCESS,
      payload: data.transformedChats, // Adjust based on actual API structure
    });
  } catch (error) {
    dispatch({
      type: ALL_CHATS_FAIL,
      payload: error.response?.data?.message || 'An error occurred while fetching chats',
    });
  }
};

// Fetch All Posts
export const fetchAdminAllPosts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POSTS_REQUEST });

    const { data } = await axiosInstance.get('/admin/posts');

    dispatch({
      type: ALL_POSTS_SUCCESS,
      payload: data.posts, // Adjust based on actual API structure
    });
  } catch (error) {
    dispatch({
      type: ALL_POSTS_FAIL,
      payload: error.response?.data?.message || 'An error occurred while fetching posts',
    });
  }
};

// Fetch All Messages
export const fetchAdminAllMessages = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_MESSAGES_REQUEST });

    const { data } = await axiosInstance.get('/admin/messages');

    dispatch({
      type: ALL_MESSAGES_SUCCESS,
      payload: data.transformedMessages, // Adjust based on actual API structure
    });
  } catch (error) {
    dispatch({
      type: ALL_MESSAGES_FAIL,
      payload: error.response?.data?.message || 'An error occurred while fetching messages',
    });
  }
};

// Clear Errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
