import Styles from "./about.module.css";
import Skills from "./Skills";
import imagen from "./ypb.jpeg";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6"; // Social Icons

const Blog = () => {
    return (
        <div className={Styles.About}>
            <div className={Styles.About_box}>
                <div className={Styles.About_box_hero}>
                    {/* Profile Image */}
                    <div className={Styles.About_box_hero_right}>
                        <img src={imagen} alt="Personal Blog" className={Styles.profile_image} />
                    </div>

                    {/* Bio & Social Links */}
                    <div className={Styles.About_box_hero_left}>
                        <h1>👨‍💻 Welcome to My Personal Blog</h1>
                        <h2 className={Styles.name}>Yamil Peréz</h2>
                        <p className={Styles.title}>
                            <strong>Software Developer | Tech Enthusiast | Blogger</strong>
                        </p>
                        <p className={Styles.description}>
                            Hi, I'm <strong>Yamil Peréz</strong>, a senior Computer Science student 
                            at <strong>Lehman College, NYC.</strong> I specialize in building scalable web applications, 
                            problem-solving, and sharing insights on modern web development trends. 🚀
                        </p>

                        {/* 🔥 Social Media Links (Neon Effect) */}
                        <ul className={Styles.Social_links}>
                            <li>
                                <a href="https://twitter.com/elyami600" className={`${Styles.social_link} ${Styles.x_twitter}`} target="_blank" rel="noopener noreferrer">
                                    <FaXTwitter className={Styles.neon_icon} /> 
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/yamil-perez/" className={`${Styles.social_link} ${Styles.linkedin}`} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className={Styles.neon_icon} /> 
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/elyami600" className={`${Styles.social_link} ${Styles.github}`} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className={Styles.neon_icon} /> 
                                </a>
                            </li>            
                        </ul>
                    </div>
                </div>
            </div>

            {/* ✅ Skills Section */}
            <Skills />
        </div>
    );
};

export default Blog;
