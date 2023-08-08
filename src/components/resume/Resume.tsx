import React from "react"
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import pdf from '../../assets/Slava_Trofimov-Senior_Front_End_Developer.pdf'

interface ResumeProps {
    switchWindow: Function
}

const experience = [
    {
        title: 'Senior Front End Developer',
        company: 'Codepxl - Toronto, ON',
        date: 'January 2019 to Present',
        description: [
            'Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.',
            'Formed a team for a particular project needs, estimated and planned development process close with Product Manager.',
            'Coded using Vue.js/React.js to develop features for both mobile and desktop platforms.',
            'Transformed native applications designs into desktop and mobile-friendly SPA/SSR products.',
            'Produced websites based on Laravel or WordPress compatible with multiple browsers and platforms.',
            'Improved tools to boost user interaction and deliver design versatility.'
        ]
    },
    {
        title: 'Front End Developer',
        company: 'EvolutionInDesignZ - Toronto, ON',
        date: 'May 2018 to December 2018',
        description: [
            'Coded using HTML, CSS/SCSS and JavaScript(Vue.js) to develop features for both mobile and desktop platforms.',
            'Contributed to projects within Scrum project management environments.',
            'Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.',
            'Worked cooperatively with client services, sales and design team in deadline-driven environment.',
            'Designed and updated layouts to meet usability and performance requirements.',
            'Produced websites compatible with multiple browsers.'
        ]
    },
    {
        title: 'Web Developer',
        company: 'Electrolight Enterprises - Toronto, ON',
        date: 'August 2017 to May 2018',
        description: [
            'Provided front-end website development using WordPress, OpenCart, and other editing software.',
            'Coded websites using HTML, CSS, JavaScript, and jQuery languages and libraries.',
            'Implemented content management and security resource tutorials to assist end-user training.',
            'Multi-tasked across multiple functions and roles to meet deadlines and organizational expectations.'
        ]
    },
    {
        title: 'Front End Developer',
        company: 'iMoan.ru - Moscow',
        date: 'August 2015 to July 2017',
        description: [
            'Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.',
            'Researched emerging web technologies and trends for possible incorporation into sites.',
            'Worked cooperatively with client services, sales and design team in deadline-driven environment.',
            'Produced websites compatible with multiple browsers',
            'Tested web-based product functionality and delivered iterations to customer.',
            'Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.'
        ]
    },
    {
        title: 'Lead Front End Developer',
        company: 'Web Solution Ltd. - Moscow',
        date: 'March 2013 to August 2015',
        description: [
            'Coded websites using HTML, CSS, JavaScript, and jQuery languages and libraries.',
            'Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX, and JSON coding.',
            'Implemented changes and integrated requested elements to streamline business operations.',
            'Validated third-party code to comply with internal standards and technical requirements.',
            'Oversaw back-end development using PHP to maintain website integrity.',
            'Developed technical solutions required to accommodate specific user-facing assets'
        ]
    },
    {
        title: 'Front End Developer',
        company: 'Giftery corp. - Moscow',
        date: 'February 2012 to March 2013',
        description: [
            'Coded using HTML, CSS, Python (DjangoFramework) and JavaScript to develop features for both mobile and desktop platforms.',
            'Researched emerging web technologies and trends for possible incorporation into sites.',
            'Produced websites compatible with multiple browsers.'
        ]
    },
    {
        title: 'Front End Developer',
        company: 'Predestination.ru - Moscow',
        date: 'January 2011 to February 2012',
        description: [
            'Coded websites using HTML, CSS, JavaScript, and jQuery languages and libraries.',
            'Provided front-end website development using WordPress.',
            'Oversaw back-end development using PHP to maintain website integrity.',
            'Adhered to SEO best practices while designing sites.',
            'Multi-tasked across multiple functions and roles to meet deadlines and organizational expectations.'
        ]
    }
]
const profile = [
    'HTML & CSS styling',
    'JavaScript / TypeScript w/without frameworks',
    'JavaScript Frameworks and Libraries (Vue.js, Nuxt.js, React.js, jQuery, etc.)',
    'Single Page Applications, Server Side Rendering, Progressive Web Apps',
    'CSS Preprocessors and Template engines (SCSS, PUG, etc.)',
    'Development and interacting with RESTful Services and APIs',
    'Cross-Browser / Cross-Platform Development',
    'Web Accessibility and SEO best practices',
    'PHP development (Laravel, WordPress, Opencart, etc.)',
    'Prototyping and Proof-of-concept development',
    'Git/Version Control, Pull requests and code reviews',
    'Mentoring jr. developers and interns'
]
const education = [
    {
        title: 'Master in Computer Science',
        place: 'Moscow State Open University - Moscow',
        date: '2007 to 2008'
    },
    {
        title: 'Diploma in Computer Science',
        place: 'Moscow Technological University - Moscow',
        date: '2003 to 2007'
    }
]
const skills = [
    'Vue.js / Nuxt.js (5 years)',
    'React.js / Next.js (1 year)',
    'HTML5 / SCSS (8 years)',
    'Bootstrap / Tailwindcss (5 years)',
    'Javascript (8 years)',
    'REST (6 years)',
    'jQuery (7 years)',
    'Laravel / PHP (3 years)',
    'MySQL/ MangoDB (6 years)',
    'Node.js (3 years)',
    'TypeScript (2 years)',
    'Responsive styling (8 years)',
    'Webpack / Vite / Gulp (5 years)',
    'WordPress / OpenCart (8 years)',
    'GitHub (6 years)',
    'Docker (4 years)'
]

class Resume extends React.Component<ResumeProps> {
    render() {
        return (
            <div className="mockup-window border bg-base-300 flex-1 mt-10 mb-5 ml-5 mr-5 drop-shadow-md absolute z-20 show">
                <div className="window-header">
                    <div className="close-window" data-name="desktop" onClick={(event) => this.props.switchWindow(event)}>x</div>
                    <div className="minimize-window" data-name="desktop" onClick={(event) => this.props.switchWindow(event)}>–</div>
                    <div className="maximize-window">□</div>
                </div>
                <div className="flex justify-left px-4 py-6 bg-base-200 terminal-wrapper relative">
                    <PerfectScrollbar>
                        <article className="resume">
                            <h1>Slava Trofimov <span>(<a href={pdf} target="_blank">download PDF</a>)</span></h1>
                            <p><strong>Senior Front End Developer</strong><br/>
                            Richmond Hill, ON<br/>
                            <a href="mailto:slava@trofimov.ca">slava@trofimov.ca</a><br/>
                            <a href="tel:2899808683">+1(289)980-8683</a></p>
                            <section>
                                <p>Working in the web development industry for more than 12 years and am familiar with all aspects of a
                                website/app development cycle, from initial analysis and planning, creating wireframes to production
                                deployment.</p>
                                <p>Have strong JavaScript, Vue.js, REST and HTML5/SCSS skills. For the last several years gained wide
                                experience with Laravel and PHP in general and worked on many Laravel+Vue.js/Nuxt.js projects as a Full
                                stack developer. Have experience with React.js, MySQL, WordPress, Opencart, and Electron.js.
                                Feel confident working with technologies like Git, Docker, Figma, Jira / ClickUp, Slack, etc.
                                Always seeking skill improvement and better practices.</p>
                            </section>

                            <section>
                                <p className="dashed"><strong>Work Profile</strong></p>
                                <ul>
                                    {
                                        profile.map((p, index) => {
                                            return (
                                                <li key={index}>{p}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </section>

                            <section>
                                <p className="dashed"><strong>Work Experience</strong></p>
                                { 
                                    experience.map((e, index) => {
                                        return (
                                            <p key={index}>
                                                <b>{e.title}</b><br/>
                                                <small>{e.company}</small><br/>
                                                <small>{e.date}</small><br/>
                                                {   e.description.map((d, index) => {
                                                        return (
                                                            <p key={index}>{d}</p>
                                                        )
                                                    })
                                                }
                                            </p>
                                        )
                                    })
                                }
                            </section>

                            <section>
                                <p className="dashed"><strong>Education</strong></p>
                                { 
                                    education.map((e, index) => {
                                        return (
                                            <p key={index}>
                                                <b>{e.title}</b><br/>
                                                <small>{e.place}</small><br/>
                                                <small>{e.date}</small><br/>
                                            </p>
                                        )
                                    })
                                }
                            </section>

                            <section>
                                <p className="dashed"><strong>Skills</strong></p>
                                <ul>
                                    {
                                        skills.map((s,index) => {
                                            return (
                                                <li key={index}>
                                                    {s}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </section>

                            <section>
                                <p className="dashed"><strong>Languages</strong></p>
                                <ul>
                                    <li>English - Fluent</li>
                                    <li>Russian - Expert</li>
                                </ul>
                            </section>
                        </article>
                    </PerfectScrollbar>
                </div>
            </div>
        )
    }
}

export default Resume;