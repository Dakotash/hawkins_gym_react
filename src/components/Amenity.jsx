
const Amenity = (props) => {
    return (
        <div className="gallery-item">
            <img src={props.image} alt={props.title} />
            <h3 className="image-overlay-title">{props.title}</h3>
        </div>

    );
};

export default Amenity;