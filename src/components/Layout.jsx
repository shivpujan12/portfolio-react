import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/Layout.scoped.css';

import Header from "./Header";

const Layout = ({children}) => {
    return <div className='layout'>
        <Header/>
        {children}
    </div>
}

export default Layout;