
import './App.css';
import MenuList from './components/MenuList';
import { foodItems } from './data/data';



export default const App = () => {
  return (
    <article>
      <h1>Wild Restaurant Menu</h1>
      {/* pass the variable foodItems as props to MenuList component */}
      <MenuList listFood={foodItems} />
    </article>
  );
};

