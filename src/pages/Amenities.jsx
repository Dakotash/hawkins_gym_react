import AmenitiesGallery from "../components/AmenitiesGallery";
import Amenity from "../components/Amenity";
import AvailableAmenities from "../components/AvailableAmenities";

const Amenities = () => {
    return (
        <>
            <AmenitiesGallery />
            <div class="amenities-gallery-grid" id="amenities-gallery-grid">
                <Amenity
                    image="images/Training-area.jpg"
                    title="Free Weights Area"
                />

                <Amenity
                    image="images/cardio.jpg"
                    title="Cardio Equipment"
                />

                <Amenity
                    image="images/pool.webp"
                    title="Swimming Pool"
                />

                <Amenity
                    image="images/outdoor-training.jpg"
                    title="Outdoor Training"
                />

                <Amenity
                    image="images/lockerRoom.jpg"
                    title="Locker Rooms"
                />
            </div>

            <AvailableAmenities />
        </>
    );
};

export default Amenities;