import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import ContactMe from "@/components/contact-me";
import {
  // ClipboardList,
  Mail,
  Phone,
  Scroll,
  Terminal,
  User,
} from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Portfolio() {
  const skills = [
    "NodeJS",
    "ExpressJS",
    "ReactJS",
    "NextJS",
    "Javascript",
    "HTML",
    "CSS",
    "REST API",
    "Redis",
    "Firebase",
    "Firebase Hosting",
    "Firebase Functions",
    "MongoDB",
    "PostgreSQL",
    "Mongoose",
    "Sequelize",
    "Prisma ORM",
    "Next Auth",
    "Python",
    "Django",
    "Flutter",
    "WhatsApp Business API",
    "GMB API",
    "Git",
    "Github",
    "Docker",
    "Postman",
    "Gemini API",
    "Open AI API",
    "Digital Ocean",
    "Caprover",
  ];

  const projects = [
    {
      name: "Dottt-Hyperlocal",
      description:
        "Manage your GMB at one place. System design and development. User can import or create their GMB. They can check, generate and download various types of analytics on attached GMB. They can manage various type of campaign, manage reviews, check searched keywords, ranking among others GMB in their geographical area, manage FAQ's, automate reviews reply with the help of AI. Get AI assisted recommendation on the basis of their analytics. Dedicated phone number for their GMB with call recording facilities. SMS and email facilities on various events and to various stakeholders. Used Google's generative AI API, Gemini AI to generate and automate reviews reply.",
      url: "https://manage.dotttme.com",
      tech: [
        "NextJS",
        "Material UI",
        "Next Auth",
        "PostgreSQL",
        "Prisma",
        "React Hook Form",
        "Tanstack React Query",
        "Gemini API",
        "Docker",
      ],
    },
    {
      name: "ChatApp Store",
      description:
        "Personalize page for Business and Individual where they can share their Digital Card, Manage their appointments and other things. Individual or business can register themselves and manage their information, like what they want to share with world and how. They can setup and manage their appointment system and setup their small e-commerce booking setup.",
      url: "https://chatapp.store",
      tech: ["NodeJS", "ExpressJS", "EJS", "Javascript", "Bot UI", "Docker"],
    },
    {
      name: "Newsum News App",
      description:
        "User will get positive news over this platform. Created UI and functionalities for fetching the displaying the news in the app. User can register and bookmark the news. Use can view news in different categories. User can search news on the basis of entered keyword. User can share the news over various messaging and social media apps.",
      tech: ["Cordova", "Flutter", "REST API", "Wordpress"],
    },
    {
      name: "Scanner App",
      description:
        "Scan the QR Code of the attendees and mark their presence for that event. Also, shows the attendees data in separate page on day wise.",
      tech: ["Flutter", "NodeJS", "MongoDB"],
    },
    {
      name: "After Market App for Minda",
      description:
        "User can view and check the availability and price of the two wheeler parts via the After Market App. Also user can check and view the nearest Minda dealer and get the direction over Google Map in the app.",
      tech: ["Cordova", "PHP", "MySQL"],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <header className="mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 justify-between">
            <div className="flex flex-col justify-center text-center md:text-left md:flex-1">
              <li className="flex items-center">
                <User size={22} />
                <h1 className="text-4xl font-bold mb-2 mx-1">
                  Aman Kumar Choudhary
                </h1>
              </li>
              <li className="flex items-center">
                <Terminal size={18} />
                <p className="text-xl text-muted-foreground mb-2 mx-1">
                  Full Stack Developer
                </p>
              </li>
              <li className="flex items-center">
                <Mail size={16} />
                <Link
                  href="mailTo:amankch@gmail.com"
                  className="text-sm text-muted-foreground my-1 mx-1"
                >
                  amankch@gmail.com
                </Link>
              </li>
              <li className="flex items-center">
                <Phone size={16} />
                <Link
                  href="tel:+919999004538"
                  className="text-sm text-muted-foreground my-1 mx-1"
                >
                  +919999004538
                </Link>
              </li>
              <li className="flex items-center">
                {/* <ClipboardList size={16} /> */}
                <Scroll size={32} />
                <p className="text-sm my-1 mx-1">
                  Full Stack Developer with 9+ years of experience in designing,
                  developing, and deploying scalable SaaS applications.
                  Proficient in multiple technologies, including ReactJS,
                  NextJS, NodeJS, ExpressJS, MongoDB, PostgreSQL, Firebase,
                  Flutter, and Docker. Adept at developing web and mobile
                  applications from concept to deployment. Proven experience in
                  building SaaS platforms such as Google GMB management,
                  personal pages for individuals and businesses, and news
                  applications in Flutter.
                </p>
              </li>
            </div>
            {/* <div className="text-center md:text-left md:flex-1">
              <h1 className="text-4xl font-bold mb-2">Aman Kumar Choudhary</h1>
              <p className="text-xl text-muted-foreground">
                Full Stack Developer
              </p>
              <Link
                href="mailTo:amankch@gmail.com"
                className="text-sm text-muted-foreground my-1"
              >
                amankch@gmail.com
              </Link>
              <br />
              <Link
                href="tel:+919999004538"
                className="text-sm text-muted-foreground my-1"
              >
                +919999004538
              </Link> 
              <p className="text-sm text-muted-foreground mt-2">
                Full Stack Developer with 9+ years of experience in designing,
                developing, and deploying scalable SaaS applications. Proficient
                in multiple technologies, including ReactJS, NextJS, NodeJS,
                ExpressJS, MongoDB, PostgreSQL, Firebase, Flutter, and Docker.
                Adept at developing web and mobile applications from concept to
                deployment. Proven experience in building SaaS platforms such as
                Google GMB management, personal pages for individuals and
                businesses, and news applications in Flutter.
              </p>
            </div> */}
            <div className="w-full md:w-1/3 aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/aman_03.jpeg?height=300&width=400"
                alt="Aman Kumar Choudhary"
                height={350}
                width={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  {project.url && (
                    <CardDescription>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-blue-400 hover:underline"
                      >
                        {project.url}
                      </a>
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  {project.description && (
                    <p className="text-muted-foreground mb-2">
                      {project.description}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <ContactMe />
      </div>
    </div>
  );
}
