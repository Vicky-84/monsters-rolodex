import './card.styles.css';

const Card = (props) => {
    const {id, name , email} = props.monster;

    return (
            <div className="card-container" key={id}>
                <img 
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
                <h2>{name}</h2>
                 <h2>{email}</h2>
            </div>
    )
}

export default Card