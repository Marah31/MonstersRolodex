
import './cards-container.styles.css';

/*************************** app version of card */
const Card = ({monster}) =>{
    const {id, name, email} = monster;
    return (
        <div className='card-container' key={monster.id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
    );
   
};


/*************************** class version of card */

/*
import { Component } from "react";
class Card extends Component{
    render(){
        const {name, email,id} = this.props.monster;
        return (
            <div className='card-container' key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );

    }
}*/
export default Card;