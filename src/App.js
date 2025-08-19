// rule of thumb, best practice for arrays or data sets in cases like filtering is immunity, which means don't modify the original array if you want to add or remove something, create a new one
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import BackgroundEffects from './components/BackgroundEffects';

/******************************************** Functional component app */
import { useState, useEffect } from 'react'; // this is the equivilant to import components for the classes

const App = () =>{

  const [searchField,setSearchField] = useState(''); // [value,setValue]
  console.log({searchField});
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters,setFilterMonsters]= useState(monsters);

  useEffect (()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( (response)=>response.json())
    .then((users) => setMonsters(users));

  },[]); // notice the empty array here, it's empty cause we don't want ever to trigger the fetch again after the first time, this is to not make the website crash from rendering in infinit loop if I didn't use the useEffect()

  const onSearchChange = (event)=>{
    const searchFieldString = event.target.value.toLocaleLowerCase();        
    setSearchField(searchFieldString);
  }; 

  useEffect( ()=>{
    const newFilteredMonsters = monsters.filter((monster)=>{ // created a new array for immunity
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newFilteredMonsters);
  } ,[monsters,searchField]);
  

  return (
    <div className="App">
        <BackgroundEffects />
        <h1 className='app-title'>Monsters Rodolex</h1>
        <SearchBox className= 'monsters-search-box' onChangeHandler ={onSearchChange} placeholder = 'search monsters'/>
        <CardList monsters={filteredMonsters}/>
        
      </div> 
  )

}

















/******************************************* Class app , this works perfectly */
//import { Component } from 'react';

// what is the order for each component or part of the code to run?
// 1. constructor, this is the first thing that get executed in any and all classes
// 2. render, this run second as it determin what will be displayed to the user
// 3. for this code, the third will be componentDidMount() function 
/*class App extends Component {
  constructor(){ // here, this means when the app is one, this is the first thing that get run
    super();
    // I want to initiate a state
    this.state = {
      monsters: [],
      searchField: ''
      
    };
  }
  // I want to fetch the monsters from a server
  // what I need to think about are three main things:
  // 1. when do I get the list? here I want it to load as soon as the component is mounted(aka displayed for the first time) 
  // 2. where do I put the list? 
  // 3. how do I get the list? 

  //used for the 'when' I want the list to be fetched
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then( (response)=> // notice here I don't have {} after the arrow function
      response.json()).then((users)=>this.setState(()=>{
        return {monsters: users}
      })); // it because not writing it here will make the '.then' function has implicit return, that will returns value without the need to write it
  }

  onSearchChange = (event)=>{
    const searchField = event.target.value.toLocaleLowerCase();        
    this.setState(()=>{
      return {searchField}; // this will trigger a re-render since the state is changing, thus will keep update the page as long as the user is typing different things 
      });
  } 
  render(){

    // to make it more efficient and clean, let's assigne values instead of using this stat
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster)=>{ // created a new array for immunity
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rodolex</h1>
        <SearchBox className= 'monsters-search-box' onChangeHandler ={onSearchChange} placeholder = 'search monsters'/>
        <CardList monsters={filteredMonsters}/> {/* note here that the components I make have to have Capital latter at the beggining*//*}
        
      </div> 
    );
  }
  
} */

export default App;
