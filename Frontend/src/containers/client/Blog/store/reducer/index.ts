import { IBlogsState, DEFAULT_BLOGS_STATE } from './../state';
import { AnyAction } from "redux";
import { getType } from "typesafe-actions";
import { genericRequestReducer } from "../../../../../api";
import {
  actionFetchBlogListRequest,
  actionFetchBlogListFailure,
  actionFetchBlogListSuccess,
  actionFetchBlogListSavedRequest,
  actionFetchBlogListSavedSuccess,
  actionFetchBlogListSavedFailure
} from "../actions";

const fetchBlogListStateReducer = genericRequestReducer(
  actionFetchBlogListRequest,
  actionFetchBlogListSuccess,
  actionFetchBlogListFailure
)

const fetchBlogListSavedStateReducer = genericRequestReducer(
  actionFetchBlogListSavedRequest,
  actionFetchBlogListSavedSuccess,
  actionFetchBlogListSavedFailure
)

export const blogsReducer = (state: IBlogsState = DEFAULT_BLOGS_STATE, action: AnyAction): IBlogsState => {
  switch (action.type) {
    case getType(actionFetchBlogListRequest): {
      return {
        ...state,
        blogListRequestState: fetchBlogListStateReducer(state.blogListRequestState, action)
      }
    }
    case getType(actionFetchBlogListSuccess):
      return {
        ...state,
        blogListRequestState: fetchBlogListStateReducer(state.blogListRequestState, action),
        blogList: action.payload
      };
    case getType(actionFetchBlogListFailure):
      return {
        ...state,
        blogListRequestState: fetchBlogListStateReducer(state.blogListRequestState, action)
      };
    case getType(actionFetchBlogListSavedRequest): {
      return {
        ...state,
        blogListSavedRequestState: fetchBlogListSavedStateReducer(state.blogListSavedRequestState, action)
      }
    }
    case getType(actionFetchBlogListSavedSuccess):
      return {
        ...state,
        blogListSavedRequestState: fetchBlogListSavedStateReducer(state.blogListSavedRequestState, action),
        blogListSaved: action.payload
      };
    case getType(actionFetchBlogListSavedFailure):
      return {
        ...state,
        blogListSavedRequestState: fetchBlogListSavedStateReducer(state.blogListSavedRequestState, action)
      };
    default:
      return state;
  }
}

export const BLOGS_KEY = 'blogs';