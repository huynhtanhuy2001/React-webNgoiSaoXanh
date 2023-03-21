import styles from './styles';
import {Router, Route} from 'react-router-dom'

import { Navbar, Header, Gioithieu, Footer } from './components';


const App = () => (
  <div id='top' className="w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
       <Navbar />
      </div>
    </div>

    <div id='main'>
      <div>
        <Header /> 
      </div>
   </div>

   <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Gioithieu /> 
      </div>
   </div>

   <div className={`bg-blue ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
       <Footer />
      </div>
   </div>
  </div>
);


export default App