export const fetchCategoryRequest = () => ({
  type: "FETCH_CATEGORY_REQUEST",
});

export const fetchCategorySuccess = (category) => ({
  type: "FETCH_CATEGORY_SUCCESS",
  payload: category,
});

export const fetchCategoryError = (error) => ({
  type: "FETCH_CATEGORY_ERROR",
  payload: error,
});
