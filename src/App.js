import React,{Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';

class App extends Component {

  state ={
    foods: foods,
    filteredFoods:foods,
    showForm:false
  }

  handleAddFood = (newFood) => {
    this.setState({
      foods: [newFood, ...this.state.foods],
      filteredFoods:[newFood, ...this.state.foods]
    })
    
  }

  handleSubmit =(e)=>{
    e.preventDefault()
    const {name,calories,image} = e.target
    let newFood ={
      name: name.value,
      calories: calories.value,
      image: image.value,
    }
    this.setState({showForm:false}, ()=>{
      this.handleAddFood(newFood)
    })
  }
  
  handleShowForm =() => {
    this.setState({showForm:true})
  }

  render(){
    const {showForm, foods} = this.state
    return (
      <div>
          <h2>Foods</h2>
          {
            showForm ? <AddForm onSubmit={this.handleSubmit}/> : <button onClick={this.handleShowForm} className="button is-danger">Show Form</button>
          },
          {
          foods.map((e, i) => {
            return <FoodBox onAdd={this.handleAddFood} key={i} name={e.name} calories={e.calories} image={e.image}/>
          })
          }
      </div>
    );
  }
}
export default App;
