import arnoldSch from "../images/arnold-schwarzenegger-portrait-session.jpg"
import mike from "../images/Mike-Mentzer.jpg"
import franco from "../images/franco-columbo.png"
import dakota from "../images/Dakota.jpeg"
import dorian from "../images/dorian-yates.webp"
import lou from "../images/lou-ferrigno.jpg"
import ronnie from "../images/ronnie-coleman.jpg"
import frank from "../images/frank-zane.png"
import "../css/trainers-list.css";


const TrainersList = () => {
    return (
        <section id="trainers">
            <div class="container">
                <h1>MEET OUR CERTIFIED TRAINERS</h1>
                <div id="trainers-content">

                    <div><img src={arnoldSch} alt="Arnold Schwarzenegger"/>
                        <div class="trainers-item">
                            <h3>Arnold Schwarzenegger</h3>
                            <p>$150/session</p>
                            <p>7-time Mr. Olympia and fitness icon, Arnold brings unmatched passion and energy to every session.
                                He focuses on classic bodybuilding, full-body transformations, and mental discipline. Whether
                                you're a beginner or a competitor, Arnold will push you to break barriers and love the process.
                            </p>
                        </div>
                    </div>
                    <div><img src={mike} alt="Mike Mentzer"/>
                        <div class="trainers-item">
                            <h3>Mike Mentzer</h3>
                            <p>$120/session</p>
                            <p>Creator of Heavy Duty training, Mike helps clients achieve maximum results with minimal time. His
                                HIT method is perfect for those who want serious gains without spending hours in the gym. Expect
                                a no-fluff, science-backed approach to building strength and size.</p>
                        </div>
                    </div>
                    <div><img src={franco} alt="Franco Columbu"/>
                        <div class="trainers-item">
                            <h3>Franco Columbu</h3>
                            <p>$130/session</p>
                            <p>Two-time Mr. Olympia and former chiropractor, Franco combines serious power with injury-smart
                                training. He's the go-to coach for building functional strength and staying healthy. Ideal for
                                lifters who want to grow stronger while training smart.</p>
                        </div>
                    </div>
                    <div><img src={dakota} alt="Dakota Hawkins"/>
                        <div class="trainers-item">
                            <h3>Dakota Hawkins</h3>
                            <p>$80/session</p>
                            <p>Dakota emphasizes balanced training, proper recovery, and injury prevention. His holistic
                                approach combines strength training with flexibility and cardiovascular health for long-term
                                fitness success.</p>
                        </div>
                    </div>
                    <div><img src={dorian} alt="Dorian Yates"/>
                        <div class="trainers-item">
                            <h3>Dorian Yates</h3>
                            <p>$140/session</p>
                            <p>Six-time Mr. Olympia known for his revolutionary high-intensity training methods. Dorian focuses
                                on quality over quantity, helping clients achieve maximum muscle growth with shorter, more
                                intense workouts. Ideal for busy professionals who want serious results in minimal time.</p>
                        </div>
                    </div>
                    <div><img src={lou} alt="Lou Ferrigno"/>
                        <div class="trainers-item">
                            <h3>Lou Ferrigno</h3>
                            <p>$125/session</p>
                            <p>The Incredible Hulk himself! Lou specializes in mass building and strength training for all
                                fitness levels. His motivational approach and decades of bodybuilding experience help clients
                                break through plateaus and achieve their dream physique. Perfect for those looking to add
                                serious size and strength.</p>
                        </div>
                    </div>
                    <div><img src={ronnie} alt="Ronnie Coleman"/>
                        <div class="trainers-item">
                            <h3>Ronnie Coleman</h3>
                            <p>$160/session</p>
                            <p>Eight-time Mr. Olympia known for his incredible work ethic and legendary strength. Ronnie brings
                                unmatched intensity and motivation to help clients push their limits safely. Specializes in
                                powerlifting techniques and building both strength and size. "Yeah buddy, lightweight baby!"</p>
                        </div>
                    </div>
                    <div><img src={frank} alt="Frank Zane"/>
                        <div class="trainers-item">
                            <h3>Frank Zane</h3>
                            <p>$135/session</p>
                            <p>Three-time Mr. Olympia known for his aesthetic physique and scientific approach to training.
                                Frank specializes in body symmetry, proportion, and lean muscle development. Perfect for clients
                                focused on achieving a balanced, aesthetic physique rather than just size.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default TrainersList;











