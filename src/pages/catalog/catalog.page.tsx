import {Box, Typography} from '@mui/material';
import {requestGetCatalogCategories} from '../../hooks/catalog/catalog.api';
import {useEffect} from 'react';

interface CatalogPageProps {
  isTrue?: boolean;
}

export function CatalogPage(props: CatalogPageProps) {
  useEffect(() => {
    requestGetCatalogCategories();
  });
  return (
    <Box>
      <Typography>Hello World {props.isTrue ? 'true' : 'undefined'}</Typography>
    </Box>
  );
}
