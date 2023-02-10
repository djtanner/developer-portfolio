import emoji from "react-easy-emoji";

export const greetings = {
	name: "Zhila Shariat",
	title: "Hi, I'm Zhila!",
	description:
		"I'm a software engineer with experience in creating web applications with Javascript, Python, Django, Flask, React.js, and Node.js and have a passion for creating games and applications that utilize Artificial Intelligence.",
	resumeLink: "",
};

export const openSource = {
	githubUserName: "djtanner",
};

export const contact = {};

export const socialLinks = {
	linkedin: "https://www.linkedin.com/in/zhilashariat/",
	github: "https://github.com/djtanner",
	twitter: "https://twitter.com/zhilacodes"
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK SOFTWARE ENGINEER",
	data: [
		{
			title: "Full Stack Development",
			lottieAnimationFile: "/lottie/girl.json", // Path of Lottie Animation JSON File
			skills: [

				"⚡ Building responsive Single-Page-Apps with Python, Flask, Django, and React.js"
				,
				"⚡ Building AI and ML projects using Python and TensorFlow",

				"⚡ Building Fullstack applications using the MERN stack"
				,
			],
			softwareSkills: [
				{
					skillName: "HTML-5",
					fontAwesomeClassname: "vscode-icons:file-type-html",
				},
				{
					skillName: "CSS-3",
					fontAwesomeClassname: "vscode-icons:file-type-css",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Reactjs",
					fontAwesomeClassname: "vscode-icons:file-type-reactjs",
				},
				{
					skillName: "Nodejs",
					fontAwesomeClassname: "vscode-icons:file-type-node",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
				{
					skillName: "Flask",
					fontAwesomeClassname: "logos:flask",
				},
				{
					skillName: "NPM",
					fontAwesomeClassname: "logos:npm-icon",
				},
				{
					skillName: "Yarn",
					fontAwesomeClassname: "logos:yarn",
				},

			],
		},

	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "Columbia Business School",
		subHeader: "Master of Business Administration",
		duration: "2006 - 2008",
		desc: "",
		grade: "MBA",
		descBullets: [

		],
	},
	{
		schoolName: "Oklahoma State University",
		subHeader: "Bachelor of Science in Mechanical Engineering",
		duration: "1999 - 2003",
		desc: "",
		grade: "BS",
		descBullets: [

		],
	},
	{
		schoolName: "Harvard University",
		subHeader: "CS50x - Introduction to Computer Science",
		duration: "2021 - 2022",
		desc: "Languages include C, Python, and SQL plus HTML, CSS, and JavaScript",
		grade: "Certificate",
		descBullets: [
			"Topics include abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web programming.",

		],
	},
	{
		schoolName: "Harvard University",
		subHeader: "CS50 - Web Programming with Python and Javascript",
		duration: "2022",
		desc: "Implementation of web apps using Python, JavaScript, and SQL using frameworks like Django, React, and Bootstrap.",
		grade: "Certificate",
		descBullets: [
			"Write and use APIs, create interactive UIs, and leverage cloud services like GitHub and Heroku. Topics include database design, scalability, security, and user experience. "

		],
	},

	{
		schoolName: "Harvard University",
		subHeader: "CS50 - Introduction to Game Development",
		duration: "2022",
		desc: "Languages include Lua and C#",
		grade: "Certificate",
		descBullets: [
			"Explores principles of 2D and 3D graphics, animation, sound, and collision detection using Unity and LÖVE 2D frameworks.",

		],
	},

	{
		schoolName: "Harvard University",
		subHeader: "CS50 - Introduction to AI with Python",
		duration: "2022",
		desc: "Python and Tensor Flow",
		grade: "Certificate",
		descBullets: [
			"Topics include graph search algorithms, classification, optimization, reinforcement learning, neural networks, NLP.",

		],
	},



];

export const experience = [
	{
		role: "Volunteer",
		company: "Women in Tech Dubai",
		companylogo: "/img/icons/common/womenintech.jpeg",
		date: "2020 - present",
		desc: "Women In Tech Dubai is a UAE based professional group that is focused on creating a safe space and community for women working in the tech field or are interested learning more about the field. I co-lead a Data Structures and Algorithms study group and organize events."
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Head of Product",
		company: "Matic",
		companylogo: "/img/icons/common/matic.jpeg",
		date: "2018 - 2020",
		desc: "I managed a UI/UX team of 5, owning multiple B2B and B2C products and platforms. I was also the product manager for the Matic mobile app and website, and I led the redesign of the iOS and Android app. The iOS app was featured by Apple on the App Store."
		// descBullets: [
		// 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
		// 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
		// ],
	},
	{
		role: "Head of Retail",
		company: "Careem (acquired by Uber)",
		companylogo: "/img/icons/common/careem.png",
		date: "2016 - 2018",
		desc: "I was responsible for the conceptualization, design, and launch of the organization's e-commerce and retail vertical, Dukkan Careem. I led the strategy, marketing, creative direction, and business development for Dukkan Careem, and was owner of the P&L. We were featured in Vogue Arabia, Grazia, CNN, and Arabian Business.",
	},
	{
		role: "Product Manager",
		company: "ooVoo",
		companylogo: "/img/icons/common/oovoo.png",
		date: "2012 - 2016",
		desc: "I was the product manager for ooVoo for Mac, which was featured by Apple on the Mac App Store, consistently ranked #1 in the Social Networking category, and consistently in the top 15 in Top Free Apps. I was also the product manager for ooVoo for Windows Phone, which I led from conceptualization to launch and was featured by Microsoft on the Windows Phone Store.",
	},
];

export const projects = [
	{
		name: "Dice Game",
		desc: "Created a fullstack web application for playing a dice rolling game. Included development of multiple APIs and cookie storage for registering and logging in users, getting and setting high scores, and sending dice rolls from the server side. Used MongoDB for data storage.",
		github: "https://github.com/djtanner/dice-app",
		link: "",
		image: "/img/icons/common/dice.png",
		descBullets: ["MONGODB", "EXPRESS", "REACTJS", "NODE", "JAVASCRIPT", "HTML", "CSS"],

	},
	{
		name: "Computer Vision for Traffic Signs",
		desc: "Used Tensor Flow to build a neural network to classify road signs based on images from the GTSRB dataset. Resulted in 97% accuracy.",
		//github: "https://github.com/djtanner/traffic",
		link: "",
		image: "/img/icons/common/traffic.gif",
		descBullets: ["python", "Tensor Flow"],

	},

	{
		name: "Tic-Tac-Toe Artificial Intelligence",
		desc: "Used the Minimax algorithm to create an AI that plays Tic-Tac-Toe optimally.",
		github: "",
		link: "",
		image: "/img/icons/common/tic.gif",
		descBullets: ["python"]
	},
	{
		name: "Mochi the Digger",
		desc: "Created a 2D game using Lua and Love2D. Levels were created using procedural level generation. Implemented quad generation for sprite sheets, collision detection, path finding, and a game state machine. Published the game on itch.io.",
		github: "https://github.com/djtanner/digger",
		link: "https://zhila.itch.io/mochi",
		image: "/img/icons/common/mochi.gif",
		descBullets: ["Lua"]

	},

	{
		name: "Meme Generator",
		desc: "Used ReactJS and fetched data from imgflip API to create a random meme generator.",
		github: "",
		link: "",
		image: "/img/icons/common/meme.gif",
		descBullets: ["ReactJS", "Javascript", "Fullstack"]
	},

	{
		name: "Hydration Tracker",
		desc: "Used ReactJS to create a water consumption tracking app, integrated with Firebase for user authentication, and deployed with Vercel.",
		github: "",
		link: "",
		image: "/img/icons/common/water.gif",
		descBullets: ["ReactJS", "Javascript", "Fullstack"]
	},

	{
		name: "Wordle Clone",
		desc: "Created a wordle clone using Reactjs and integrated with RapidAPI to fetch data from a random word API.",
		github: "",
		link: "",
		image: "/img/icons/common/wordle.gif",
		descBullets: ["ReactJS", "Javascript", "Fullstack"]

	},

	{
		name: "Parser",
		desc: "Wrote an AI to parse sentences and extract noun phrases using the Natural Language Toolkit NLTK Python library. ",
		github: "",
		link: "",
		image: "/img/icons/common/parser.gif",
		descBullets: ["python"]
	},
	{
		name: "Web Application for Booking Home Services",
		desc: "Built a single page web application to allow users to book home services, utilizing Django and Javascript. Included integration with email.",
		//github: "https://github.com/djtanner/capstone",
		image: "/img/icons/common/home.gif",
		github: "https://github.com/djtanner/booking",
		descBullets: ["Django", "Python", "Fullstack"]

	},
	{
		name: "The Massachusetts Platform for Legislative Engagement (MAPLE)",
		desc: "Open Source contributor for bug fixes and new features. Worked on Frontend.",
		github: "https://github.com/codeforboston/maple",
		link: "https://mapletestimony.org/",
		descBullets: ["NEXTJS", "Javascript"]
	},

	{
		name: "Question and Answer AI",
		desc: "Implemented a TF-IDF function to answer questions based on ranking documents and words using the Natural Language Toolkit NLTK library in Python.",
		github: "",
		link: "",
		image: "/img/icons/common/questions.gif",
		descBullets: ["python"]
	},
	{
		name: "Rubber Duck Debuggify",
		desc: "Integrated with Spotify Web Playback SDK for user login and playback of Spotify music. Used Lottie animation that pauses and animates with the music player controls. Implemented dark and light themes.",
		github: "",
		link: "",
		image: "/img/icons/common/spotify.gif",
		descBullets: ["REACTJS", "JAVASCRIPT"]
	},


];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];

// option to hide or show the ContactUs component
export const showContactUs = false;

// See object prototype on SEO.jsx page
export const seoData = {
	title: "Zhila Shariat",
	description:
		"Software Engineer",
	author: "Zhila Shariat",
	image: "",
	url: "",
	keywords: [
		"Zhila",
		"Zhila Shariat",
		"Portfolio",
		"Zhila Portfolio ",
		"Zhila Shariat Portfolio",
	],
}
