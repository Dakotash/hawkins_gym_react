import Trainer from "../components/Trainer";
import "../css/trainers-list.css";

const Trainers = () => {
    return (
        <>
            <section id="trainers">
                <div class="container">
                    <h1>MEET OUR CERTIFIED TRAINERS</h1>
                    <div id="trainers-content">
                        <Trainer
                            image="images/arnold-schwarzenegger-portrait-session.jpg"
                            name="Aarnold"
                            cost="$150/session"
                            description="7-time Mr. Olympia and fitness icon, Arnold brings unmatched passion and energy to every session.
                            He focuses on classic bodybuilding, full-body transformations, and mental discipline. Whether
                            you're a beginner or a competitor, Arnold will push you to break barriers and love the process."
                        />

                        <Trainer
                            image="images/Mike-Mentzer.jpg"
                            name="Mike Mentzer"
                            cost="$120/session"
                            description="Creator of Heavy Duty training, Mike helps clients achieve maximum results with minimal time. His HIT method is perfect for those who want serious gains without spending hours in the gym. Expect a no-fluff, science-backed approach to building strength and size."
                        />

                        <Trainer
                            image="images/franco-columbo.png"
                            name="Franco Columbu"
                            cost="$130/session"
                            description="Two-time Mr. Olympia and former chiropractor, Franco combines serious power with injury-smart training. He's the go-to coach for building functional strength and staying healthy. Ideal for lifters who want to grow stronger while training smart."
                        />

                        <Trainer
                            image="images/Dakota.jpeg"
                            name="Dakota Hawkins"
                            cost="$80/session"
                            description="Dakota emphasizes balanced training, proper recovery, and injury prevention. His holistic approach combines strength training with flexibility and cardiovascular health for long-term fitness success."
                        />

                        <Trainer
                            image="images/dorian-yates.webp"
                            name="Dorian Yates"
                            cost="$140/session"
                            description="Six-time Mr. Olympia known for his revolutionary high-intensity training methods. Dorian focuses on quality over quantity, helping clients achieve maximum muscle growth with shorter, more intense workouts. Ideal for busy professionals who want serious results in minimal time."
                        />

                        <Trainer
                            image="images/lou-ferrigno.jpg"
                            name="Lou Ferrigno"
                            cost="$125/session"
                            description="The Incredible Hulk himself! Lou specializes in mass building and strength training for all fitness levels. His motivational approach and decades of bodybuilding experience help clients break through plateaus and achieve their dream physique. Perfect for those looking to add serious size and strength."
                        />

                        <Trainer
                            image="images/ronnie-coleman.jpg"
                            name="Ronnie Coleman"
                            cost="$160/session"
                            description="Eight-time Mr. Olympia known for his incredible work ethic and legendary strength. Ronnie brings unmatched intensity and motivation to help clients push their limits safely. Specializes in powerlifting techniques and building both strength and size. Yeah buddy, lightweight baby!"
                        />

                        <Trainer
                            image="images/frank-zane.png"
                            name="Frank Zane"
                            cost="$160/session"
                            description="Three-time Mr. Olympia known for his aesthetic physique and scientific approach to training. Frank specializes in body symmetry, proportion, and lean muscle development. Perfect for clients focused on achieving a balanced, aesthetic physique rather than just size."
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Trainers;