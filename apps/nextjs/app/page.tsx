import { Button } from 'base-elements';
import Image from 'next/image';
import Link from 'next/link';

import styles from './page.module.scss';

const Home = () => (
	<div className={styles.main}>
		<div>
			<Image
				className={styles.logo}
				src={'/nextjs.svg'}
				alt={'NextJS logo'}
				width={'805'}
				height={'650'}
			/>
		</div>
		<h1>NextJS 13 + React 18</h1>
		<Link href="https://beta.nextjs.org/docs" target={'_blank'}>
			<Button type="contained">Read Docs</Button>
		</Link>
	</div>
);

export default Home;
