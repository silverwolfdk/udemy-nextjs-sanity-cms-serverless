import { library, config } from '@fortawesome/fontawesome-svg-core';
import { faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(faList, faBorderAll);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/darcula.css'
import 'styles/index.scss';


export default function MyApp({Component, pageProps}) {
 return (
    <Component {...pageProps} />
 );
}