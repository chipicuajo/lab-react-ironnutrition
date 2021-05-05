import React,{Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddForm from './components/AddForm';
import Search from './components/Search';
import Total from './components/Total';

class App extends Component {

  state ={
    foods: foods,
    filteredFoods:foods,
    showForm:false,
    totalFoods:[]
  }

  handleSearch =(e) => {
    let input = e.target.value
    const {foods} = this.state
    let filteredFoods = foods.filter((e)=>{
      return e.name.toLowerCase().includes(input.toLowerCase())
    })

    this.setState({
      filteredFoods: filteredFoods
    })
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
  handleTotal=(food, quantity)=>{
    let myFood = {...food, quantity}
    this.setState({
      totalFoods:[myFood, ...this.state.totalFoods]
    })
  }

  render(){
    const {showForm, filteredFoods, totalFoods} = this.state
    
    return (
      <div className="columns">
          <div className="column">
            <h2>Foods</h2>
              <Search onSearch={this.handleSearch}/>
              {
                showForm ? <AddForm onSubmit={this.handleSubmit}/> : <button onClick={this.handleShowForm} className="button is-danger">Show Form</button>
              }
              {
                filteredFoods.map((e, i) => {
                  return <FoodBox onTotal={this.handleTotal} onAdd={this.handleAddFood} key={i} name={e.name} calories={e.calories} image={e.image} quantity={e.quantity} />
                })
              }
          </div>
          <div className="comumn">
            <Total totalFoods={totalFoods}/>
          </div>
      </div>
    );
  }
}
export default App;
