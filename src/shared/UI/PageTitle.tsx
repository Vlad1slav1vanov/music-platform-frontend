import {Typography} from '@mui/material';
import React from 'react';

type PageTitleProps = {
	children: React.ReactNode;
};

const PageTitle: React.FC<PageTitleProps> = ({children}) => (
	<Typography variant='h4'>{children}</Typography>
);

export default PageTitle;
