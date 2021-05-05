import React,{Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

class App extends Component {
  render(){
    
  return (
    <div>{
        foods.map((e, i) => {
          return <FoodBox key={i} name={e.name} calories={e.calories} image={e.image}/>
        })
        }
    </div>
  );
}
}
export default App;
