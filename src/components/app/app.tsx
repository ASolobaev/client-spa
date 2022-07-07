import {CssBaseline, ThemeProvider} from '@mui/material';
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {Route, Routes} from 'react-router-dom';
import {configureStore} from '@reduxjs/toolkit';
import catalogSlice from '../../store/catalog/catalog.slice';
import {theme} from '../../theme';
import {CatalogPage} from '../../pages/catalog/catalog.page';
import {AppHeader} from '../common/header';

const store = configureStore({
  reducer: {
    catalog: catalogSlice
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <AppHeader />
      <Provider store={store}>
        <Routes>
          <Route path={'/'} element={<CatalogPage />} />
        </Routes>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
