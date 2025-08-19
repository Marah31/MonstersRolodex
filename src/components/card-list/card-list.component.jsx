import './card-list.styles.css';
import Card from '../cards/cards.component';

/************************ function version of card-list */

const CardList = ({ monsters })=>(
    <div className='card-list'>
        {monsters.map((monster)=>{
            return <Card monster={monster}/>;          
        })}
    </div>
);



/************************ class version of the card-list */
/*
import { Component } from "react";
class CardList extends Component {
    render(){
        const { monsters } = this.props;
        
        return (
            <div className='card-list'>
                {monsters.map((monster)=>{
                return <Card monster={monster}/>;
                    
            })}
            </div>
        );
    }
} */
export default CardList; // this allows the other file to import this component 