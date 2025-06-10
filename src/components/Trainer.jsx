

const Trainer = (props) => {
    return (
        <div><img src={props.image} alt={props.name}/>
            <div class="trainers-item">
                <h3>{props.name}</h3>
                <p>{props.cost}</p>
                <p>{props.description}
                </p>
            </div>
        </div>
    );
};

export default Trainer;