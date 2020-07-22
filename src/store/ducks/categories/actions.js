import { getCategory } from '../../../services/triviaAPI';
import { REQUEST_CATEGORY, RECEIVE_CATEGORY_SUCCESS, RECEIVE_CATEGORY_FAILURE } from './types';

const requestCategories = () => ({
  type: REQUEST_CATEGORY,
});

const requestCategoriesSuccess = (data) => ({
  type: RECEIVE_CATEGORY_SUCCESS,
  payload: data,
});

const receiveCategoriesFailure = (error) => ({
  type: RECEIVE_CATEGORY_FAILURE,
  payload: error,
});

export default function fetchCategories() {
  return (dispatch) => {
    dispatch(requestCategories());
    return getCategory()
      .then(
        (data) => dispatch(requestCategoriesSuccess(data)),
        (error) => dispatch(receiveCategoriesFailure(error.message)),
      );
  };
}
