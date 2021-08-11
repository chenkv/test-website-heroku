import Head from 'next/head';
import Button from '@material-ui/core/Button';
import AppBar from './AppBar';

// Passes in all elements from the page in {children} and adds a Head, header, and AppBar
const basic = ({ children }) => (
    <div>
        <Head>
            <title>Assurance</title>
        </Head>
        <header>
            {/* header */}
        </header>
        <AppBar/>
        
        {children}

        <footer>footer</footer>
    </div>
)

export default basic;