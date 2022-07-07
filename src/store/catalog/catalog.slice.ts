import {RequestStatuses} from '../../types/common/request-statuses.enum';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { AppState } from '../../components/app/app';
import {CategoryInterface} from '../../types/catalog/category.interface';

interface CatalogState {
  getCategoriesRequestStatus: RequestStatuses;
  categories: CategoryInterface[];
}

const initialState: CatalogState = {
  getCategoriesRequestStatus: RequestStatuses.IDLE,
  categories: [],
};

export const catalogSlice = createSlice({
  name: 'Catalog',
  initialState,
  reducers: {
    setGetCategoriesRequestStatus: (state: CatalogState, action: PayloadAction<RequestStatuses>) => {
      state.getCategoriesRequestStatus = action.payload;
    },
  },
});

export const {
  setGetCategoriesRequestStatus,
} = catalogSlice.actions;
export const selectGetCategoriesRequestStatus = (state: AppState) => state.catalog.getCategoriesRequestStatus;

export default catalogSlice.reducer;

