import Trainer from "../components/Trainer";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/trainers-list.css";


//Server http://localhost:3005/api/houses

const Trainers = () => {

    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const loadTrainers = async () => {
            const response = await axios.get("https://gym-backend-az1z.onrender.com/api/trainers");
            setTrainers(response.data[0]);
        };

        console.log("json loaded");
        loadTrainers();
    }, []);


    return (
        <>
            <section id="trainers">
                <div className="container">
                    <h1>MEET OUR CERTIFIED TRAINERS</h1>
                    <div id="trainers-content">
                        {trainers.map((trainer) => (
                            <Trainer
                                key={trainer._id}
                                image= {trainer.img_name}
                                name={trainer.name}
                                cost={trainer.price}
                                description={trainer.description}
                            />

                        ))};

                    </div>
                </div>
            </section>
        </>
    );
};

export default Trainers;

