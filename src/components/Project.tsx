import chatbot from '../assets/images/chatbot.png';
import enchantioShop from '../assets/images/enchantioShop.png';

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://github.com/syedwajahat01/ChatBuddy" target="_blank" rel="noreferrer">
                        <img src={chatbot} className="zoom height320" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/syedwajahat01/ChatBuddy" target="_blank" rel="noreferrer">
                        <h2>ChatBuddy</h2>
                    </a>

                    <p>Pioneered digital transformation by developing a real-time chatbot with ReactJS, Node.js, MongoDB, Express.js, and OpenAI API.</p>
                    <p>Developed a cutting-edge solution that seamlessly integrated diverse technologies, resulting in a highly advanced chatbot.</p>

                </div>
                <div className="project">
                    <a href="https://github.com/syedwajahat01/FullStack-Ecommerce-WebApp" target="_blank" rel="noreferrer">
                        <img src={enchantioShop} className="zoom height320" alt="thumbnail" width="100%"  />
                    </a>
                    <a href="https://github.com/syedwajahat01/FullStack-Ecommerce-WebApp" target="_blank" rel="noreferrer">
                        <h2>Enchantio Shop</h2>
                    </a>

                    <p>Built a full-stack e-commerce web app with user authentication, using ReactJS, ExpressJS, and MongoDB.</p>
                    <p>Implemented back-end functionalities with ExpressJS and MongoDB, supporting CRUD operations.</p>
                    <p>Integrated Stripe for secure payments, ensuring reliable and protected financial transactions.</p>

                </div>
            </div>
        </div>
    );
}

export default Project;