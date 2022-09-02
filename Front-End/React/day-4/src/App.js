import './App.css';
import CartCounter from './components/CartCounter';
import CartCounterFunc from './components/CartCounterFunc';
import { image } from './mock/image'

function App() {
  return (
    // <CartCounter />
    <div className='d-flex flex-wrap'>
      {image.map((image, index) => {
        return (
          <CartCounterFunc key={index} imageUrl={image} />
        )
      })}
    </div>
  );
}

export default App;
