import './App.css';
import Counter1 from './components/Counter1';
import Fifth from './components/Fifth';
import First from './components/First';
import Fourth from './components/Fourth';
import Message from './components/Message';
import Second from './components/Second.js';
import Third from './components/Third';
import Proexample from './Proexample';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import Eight from './components/Eight';
import Nineth from './components/Nineth';
import Tenth from './components/Tenth';
import Products from './components/Products';
import Eleventh from './components/Eleventh';
import Twelvth from './components/Twelvth';
import Thirteen from './components/Thirteen';
// import TenthProp from './components/TenthProp';
// import imge from './images/6.avif'



function App() {
  return (
    <div className="App">
      <Proexample />
      <h1>Hello World</h1>
      <First ></First>
      <Second />
      <Third 
      name="Esther Michael" 
      title="Frontend Developer" 
      bio='Lorem ipsum dolor sit,  '
      desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima quas, laborum quos iste iusto deserunt reiciendis labore minus quam soluta modi sint nisi earum rerum repudiandae impedit culpa? Eligendi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima quas, laborum quos iste iusto deserunt reiciendis labore minus quam soluta modi sint nisi earum rerum repudiandae impedit culpa? Eligendi.'
      />

      <Third 
      name="Olusegun Okoh"
      title="Full-Stack Developer"
      bio='amet consectetur adipisicing elit.'
      desc='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe minima quas, laborum quos iste iusto deserunt reiciendis labore minus quam soluta modi sint nisi earum rerum repudiandae impedit culpa? Eligendi.Lorem ipsum dolor sit, amet'

      />

      <Fourth />

      <Message />

      <Fifth />

      <Counter1 />

      <Sixth />

      <Seventh />

      <Eight />


      <Nineth />

      <Tenth />


      {/* <div className="card-wrap">
      <TenthProp name="Esther Okoh" title="Fullstack Developer" sex="female" displayImg={imge} />
      <TenthProp name="Esther Okoh" title="Fullstack Developer" sex="female" displayImg={imge} />
      <TenthProp name="Esther Okoh" title="Fullstack Developer" sex="female" displayImg={imge} />
      </div> */}

      <Products />

      <Eleventh />
      <Twelvth />
      <Thirteen />
    </div>
  );
}

export default App;
