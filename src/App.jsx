import './App.css'
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillTwitterCircle,AiFillLinkedin,AiFillInstagram,AiFillYoutube} from "react-icons/ai";
import recky from '../public/a.jpg'
function App() {
    return (
        <div>
            <main className="bg-white px-10 font-Poppins">
            <section className={"min-h-screen"}>
                <nav className={"py-10 mb-12 flex justify-between"}>
                    <h1 className={"text-xl font-Poppins"}>Remy Ashimirwe</h1>
                    <ul className={"flex items-center "}>
                        <li><BsFillMoonStarsFill className={"cursor-pointer text-2xl"}/></li>
                        <li>
                            <a className={"bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"} href={"#"}>resume</a>
                        </li>
                    </ul>
                </nav>
                <div className={"text-center p-10"}>
                    <h2 className={"text-5xl py-2 text-blue-700 font-medium"}>Remy Ashimirwe</h2>
                    <h3 className={"text-2xl py-2"}>Developer AND Designer</h3>
                    <p className={"text-md py-5 leading-8 text-gray-800"}>I am a skilled Full Stack Developer with expertise in both front-end and back-end technologies. Proficient in HTML, CSS, and JavaScript, I create engaging user interfaces using frameworks like React. On the back end, I work with Node.js and Python, managing databases like MongoDB and SQL to build robust APIs.</p>
                </div>
                <div className={"text-5xl flex justify-center gap-16 py-3 text-gray-600"}>
                    <AiFillInstagram/>
                    <AiFillLinkedin/>
                    <AiFillTwitterCircle/>
                    <AiFillYoutube/>
                </div>
                <div className={"relative rounded-full mx-auto"}>
                    <img src={recky} alt="recky" className="rounded-full w-80 h-80 mt-20 mx-auto"/>
                </div>
                <section>
                    <div>
                        <h3 className={"text-3xl py-1"}>Service I Offer</h3>
                        <p className={"text-md py-2 leading-8 text-gray-800"}>Build and maintain websites using HTML, CSS, JavaScript, and frameworks like React or Angular. <span className={"text-blue-700"}>Mobile App Development:</span> Create mobile applications for iOS and Android using Swift, Kotlin, or cross-platform frameworks like Flutter or React Native.</p>
                        <p className={"text-md py-2 leading-8 text-gray-800"}>My backend development services include creating server-side applications using languages like Python, Node.js, Ruby, or PHP, along with managing databases like MySQL, PostgreSQL, or MongoDB.</p>
                    </div>
                </section>


            </section>
            </main>
        </div>

    )
}

export default App
