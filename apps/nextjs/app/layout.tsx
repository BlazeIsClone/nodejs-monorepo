import { ReactNode } from 'react';

import 'base-styles/global/index.scss';
import './globals.scss';

const Layout = ({ children }: { children: ReactNode }) => (
	<html lang="en">
		<head />
		<body>{children}</body>
	</html>
);

export default Layout;
