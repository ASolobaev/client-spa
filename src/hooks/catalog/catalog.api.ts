import {AppDispatch} from '../../components/app/app';
import {API} from '../common/api';
import {setGetCategoriesRequestStatus} from '../../store/catalog/catalog.slice';
import {RequestStatuses} from '../../types/common/request-statuses.enum';

export const requestGetCatalogCategories = () => (dispatch: AppDispatch) => {
  dispatch(setGetCategoriesRequestStatus(RequestStatuses.LOADING));
  API
    .request({
      url: '/api/categories/get_categories'
    })
    .then((response) => {
      dispatch(setGetCategoriesRequestStatus(RequestStatuses.SUCCESS));
    })
    .catch((error) => {
      dispatch(setGetCategoriesRequestStatus(RequestStatuses.ERROR));
    });
};
