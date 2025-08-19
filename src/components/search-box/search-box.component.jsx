
import './search-box.styles.css';


/*************************** function version of search box */

const SearchBox = ({searchBoxName, placeholder,onChangeHandler}) =>{
  return (<input
    className={`search-box ${searchBoxName}`}
    type='search' 
    placeholder={placeholder} 
    onChange={onChangeHandler}
  />)
  
};




/*************************** class verion of search box */

/*
import { Component } from "react";
class SearchBox extends Component{
    render(){
        return (<input
          className={`search-box ${this.props.className}`}
          type='search' 
          placeholder={this.props.placeholder} 
          onChange={this.props.onChangeHandler}
        />)
    }
}*/
export default SearchBox;