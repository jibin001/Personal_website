import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Hospital Admin Assistant",
        description: "This project was developed using Google's latest Agent Development Kit (ADK), enabling the creation of an intelligent Healthcare Operations Automation Assistant that streamlines hospital administration workflows. The system allows staff to interact conversationally with operational data and receive real-time actions and responses regarding room status, OT schedules, patient information, and task updates.",
        image: "/projects/project1.jpg",
        tags: ["Python", "Google-ADK",],
        githubLink: "https://github.com/jibin001/Patient-Workflow---Operations-Assistant--Hospital-Admin-Agent-.git",

    },
    {
        id: 2,
        title: "Login Authentication System",
        description: "Created a Login Authentication System using Flask, implementing secure user registration, encrypted password handling, form validation, protected routes, and structured error management. While building this project, I focused on applying strong authentication practices and clean backend logic to ensure both functionality and security.",
        image: "/projects/project3.png",
        tags: ["Python", "HTML", "CSS", "Flask"],
        githubLink: "https://github.com/jibin001/Password_project.git",
    },
    {
        id: 3,
        title: "Ecommerece Website",
        description: "Engineered a feature-rich E-commerce application, significantly focused on transforming the codebase to use modern React with TypeScript for enhanced maintainability and type safety. The project began with a Vite setup and included converting the application structure to utilize TypeScript, reducing potential runtime errors.",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS", "React"],
        githubLink: "https://github.com/jibin001/react-course.git",
    },
    {
        id: 4,
        title: "Walmart Sales Data Analysis",
        description: "Conducted comprehensive sales data analysis on Walmart's multi-branch transactional dataset to identify high-performing product lines and customer behavior patterns.Performed end- to - end analysis including data cleaning, exploratory data analysis, and feature engineering by creating time - based variables and categorical classifications.",
        image: "/projects/sql_project.jpg",
        tags: ["SQL"],
        githubLink: "https://github.com/jibin001/Walmart_Sales_Data_Analysis.git",
    },
    {
        id: 5,
        title: "Chatbot Project",
        description: "I developed a ChatBot website to put my learning into practice. This project strengthened my understanding of core React concepts such as components, state management, hooks (useState, useEffect), and event handling. The website allows users to interact with a responsive ChatBot that can currently handle simple queries like getting today's date, flipping a coin, or rolling a dice. ",
        image: "/projects/chat.png",
        tags: ["HTML", "CSS", "React"],
        githubLink: "https://github.com/jibin001/Chatbot.git",
    },
    {
        id: 6,
        title: "Youtube Clone",
        description: "successfully built a YouTube frontend clone as my project! This project helped me strengthen my understanding of web development fundamentals — especially HTML structure, CSS Flexbox, Grid, and responsive design. I recreated YouTube's homepage layout, including the navbar, sidebar, and video grid, focusing on achieving a clean and realistic user interface.",
        image: "/projects/yt.png",
        tags: ["HTML", "CSS"],
        githubLink: "https://github.com/jibin001/html-css.git",
    },
]




export const ProjectSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent works that showcase my skills and creativity in art and design.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            className="text-foreground/80 hover:text-primary transition-colours duration-300"
                                            target="_blank">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubLink}
                                            className="text-foreground/80 hover:text-primary transition-colours duration-300"
                                            target="_blank">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/jibin001">
                        Check My GitHub <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </section>
    )
}