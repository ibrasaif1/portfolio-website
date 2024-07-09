import { Separator } from '@radix-ui/react-separator';
import CollapsibleCard from '../components/CollapsibleCard';
import Image from 'next/image';
import ImageCarousel from '../components/ImageCarousel'; // Import the ImageCarousel component
import './globals.css';
import Head from 'next/head';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Ibrahim Saifullah</title>
      </Head>
      <div className="container mx-auto px-4">
        <section id="about" className="my-8 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="w-100 md:w-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/headshot.jpg"
                alt="Ibrahim Saifullah headshot"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left md:ml-6 space-y-4">
              <p className="text-lg">
                Hello! My name is Ibrahim Saifullah, and I recently graduated Magna Cum Laude with
                a degree in Computer Science.
              </p>
              <p className="text-lg">
                I've completed software engineering internships at Foundation Medicine and Principal Financial Group.
              </p>
              <p className="text-lg">
                I've also done a few projects. I did a senior project with Ruiz Foods as part of my coursework, I have a personal project Lyric Learner, and I worked on a simple bug tracking website in one of my courses.
              </p>
            </div>
          </div>
        </section>
        <section id="internships" className="my-8 scroll-mt-16">
          <h2 className="text-3xl font-bold">Internships</h2>
          <CollapsibleCard
            id="foundation-medicine"
            company="Foundation Medicine"
            role="Software Engineer Intern"
            description={`
              At Foundation Medicine, my time was split into work with the EMR Integrations team and work with the tech intern team.\n\n

              Foundation Medicine conducts genomic profiling tests, giving patients and doctors detailed insights into the genetic makeup of cancers. This enables more precise and targeted treatment options, which can improve treatment efficacy and potentially extend patient life expectancies.\n

              The EMR Integrations team at Foundation Medicine is responsible for facilitating genomic profiling test orders through hospital software like Epic, Ellkay, and more. They use Kafka to enable real-time, reliable, and scalable transmission between the company and hospitals for these test orders.

              With the EMR Integrations team, I completed tickets to add features or fix bugs in our codebase. With each change I made, I updated or added unit tests to ensure that my changes were thoroughly validated. These tests were then ran by Jenkins in our CI/CD pipeline to ensure the stability of the codebase. I also added Node.js scripts to our codebase to speed up some developer processes like decoding and encoding base64. \n
              `}
            skills={["JavaScript", "Node.js", "Unit Testing", "Jenkins", "Kafka", "Git"]}
          />
          <CollapsibleCard
            id="principal-financial-group"
            company="Principal Financial Group"
            role="Software Engineer Intern"
            description={`
              At Principal Financial Group, I worked on the Insider Risk team. I was tasked with completing a summer project to notify the Security Operations Center of any potential bad actors within the company.
              To solve this problem, I came up with an AWS architecture that used a Python Lambda with an SQL query identifying suspicious behavior by employees. I used API Gateway and Route 53 to name the endpoint so the SOC could call it and be given these people.
              We also had a brief intern hackathon within the company, in which I collaborated with a group to create a React website hosted on AWS Amplify with Cognito authentication for non-engineering employees to post engineering problems they had so that company engineers can solve them.
              `}
            skills={["Python", "AWS", "React.js"]}
          />
        </section>
        <section id="projects" className="my-8 scroll-mt-16">
          <h2 className="text-3xl font-bold">Projects</h2>
          <CollapsibleCard
            id="ruiz-foods"
            company="Freezer Pallet Drone Inspection"
            role="Ruiz Foods"
            description={`
              I worked with Ruiz Foods for my senior project as part of my CS degree. Ruiz Foods sells frozen Mexican food under the El Monterey brand in grocery stores and under the Tornados brand to convenience stores for their roller grills.
              Ruiz Foods stores pallets of products and ingredients in large frozen warehouses throughout the country. These warehouses are very high, with up to 6 levels of pallets, and very cold, at -10°F.
              Sometimes, pallets aren't placed perfectly, and they tip. A tipped pallet can end up falling over which causes product loss, time loss to fix it, and even potentially injury.
              To address this problem, Ruiz Foods wanted to implement a drone solution, with the vision that it would fly around, taking pictures of each pallet location, and uploading these pictures to an interface along with the risk level of that pallet based on an ML model.
              My group doesn't have any experience with drones so this wasn't in the scope of our project. It will be Phase 2 for another group to complete.
              In this project, I served as Point-of-Contact from the group to the company representatives and I developed the React web app to serve as the interface. I also developed and deployed a PostgreSQL database on AWS RDS, and created REST API endpoints in Node.js with Express to display database data on the website. 
              `}
            skills={["React.js", "Node.js", "Express", "REST APIs", "PostgreSQL"]}
          />
          <CollapsibleCard
            id="lyric-learner"
            company="Lyric Learner"
            role="AI-enabled Twitter bot"
            description="Here, I..."
            skills={["REST APIs", "NLP", "Python"]}
          />
          <CollapsibleCard
            id="bug-watch"
            company="Bug Watch"
            role="Bug tracking website for school project"
            description="I used React to create the display for a bug tracking website and used Flask in Python to create REST API endpoints for creating or editing bug or user data."
            skills={["Flask", "REST APIs", "Python", "React.js"]}
          />
        </section>
        <section id="cooking" className="my-8 scroll-mt-16">
          <h2 className="text-3xl font-bold mb-6">Cooking</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <ImageCarousel
                images={[
                  { src: '/cooking/Sticky Toffee Cheesecake/stc1.jpg', alt: 'Sticky Toffee Cheesecake 1' },
                  { src: '/cooking/Sticky Toffee Cheesecake/stc2.jpg', alt: 'Sticky Toffee Cheesecake 2' },
                  { src: '/cooking/Sticky Toffee Cheesecake/stc3.jpg', alt: 'Sticky Toffee Cheesecake 3' },
                  { src: '/cooking/Sticky Toffee Cheesecake/stc4.jpg', alt: 'Sticky Toffee Cheesecake 4' },
                  { src: '/cooking/Sticky Toffee Cheesecake/stc5.jpg', alt: 'Sticky Toffee Cheesecake 5' },
                ]}
                caption="Sticky Toffee Cheesecake"
              />
            </div>
            <div className="col-span-1">
              <ImageCarousel
                images={[
                  { src: '/cooking/Lemon Raspberry Cheesecake Bars/lrcb1.jpg', alt: 'Lemon Raspberry Cheesecake Bars 1' },
                  { src: '/cooking/Lemon Raspberry Cheesecake Bars/lrcb2.jpg', alt: 'Lemon Raspberry Cheesecake Bars 2' },
                  { src: '/cooking/Lemon Raspberry Cheesecake Bars/lrcb3.jpg', alt: 'Lemon Raspberry Cheesecake Bars 3' },
                  { src: '/cooking/Lemon Raspberry Cheesecake Bars/lrcb4.jpg', alt: 'Lemon Raspberry Cheesecake Bars 4' },
                  { src: '/cooking/Lemon Raspberry Cheesecake Bars/lrcb5.jpg', alt: 'Lemon Raspberry Cheesecake Bars 5' },
                  { src: '/cooking/Lemon Raspberry Cheesecake Bars/lrcb6.jpg', alt: 'Lemon Raspberry Cheesecake Bars 6' },
                  { src: '/cooking/Lemon Raspberry Cheesecake Bars/lrcb7.jpg', alt: 'Lemon Raspberry Cheesecake Bars 7' },
                  { src: '/cooking/Lemon Raspberry Cheesecake Bars/lrcb8.jpg', alt: 'Lemon Raspberry Cheesecake Bars 8' },
                ]}
                caption="Lemon Raspberry Cheesecake Bars"
              />
            </div>
            <div className="col-span-1">
              <ImageCarousel
                images={[
                  { src: '/cooking/Gougères/g1.jpg', alt: 'Gougères 1' },
                  { src: '/cooking/Gougères/g2.jpg', alt: 'Gougères 2' },
                  { src: '/cooking/Gougères/g3.jpg', alt: 'Gougères 3' },
                  { src: '/cooking/Gougères/g4.jpg', alt: 'Gougères 4' },
                  { src: '/cooking/Gougères/g5.jpg', alt: 'Gougères 5' },
                  { src: '/cooking/Gougères/g6.jpg', alt: 'Gougères 6' },
                ]}
                caption="Gougères"
              />
            </div>
            <div className="col-span-1">
              <ImageCarousel
                images={[
                  { src: '/cooking/Crunchy Broccoli Fritters/cbf1.jpg', alt: 'Crunchy Broccoli Fritters 1' },
                  { src: '/cooking/Crunchy Broccoli Fritters/cbf2.jpg', alt: 'Crunchy Broccoli Fritters 2' },
                  { src: '/cooking/Crunchy Broccoli Fritters/cbf3.jpg', alt: 'Crunchy Broccoli Fritters 3' },
                  { src: '/cooking/Crunchy Broccoli Fritters/cbf4.jpg', alt: 'Crunchy Broccoli Fritters 4' },
                  { src: '/cooking/Crunchy Broccoli Fritters/cbf5.jpg', alt: 'Crunchy Broccoli Fritters 5' },
                  { src: '/cooking/Crunchy Broccoli Fritters/cbf6.jpg', alt: 'Crunchy Broccoli Fritters 6' },
                ]}
                caption="Crunchy Broccoli Fritters"
              />
            </div>
            <div className="col-span-1">
              <ImageCarousel
                images={[
                  { src: '/cooking/Million Layer Potatoes/mlp1.jpg', alt: 'Million Layer Potatoes 1' },
                  { src: '/cooking/Million Layer Potatoes/mlp2.jpg', alt: 'Million Layer Potatoes 2' },
                  { src: '/cooking/Million Layer Potatoes/mlp3.jpg', alt: 'Million Layer Potatoes 3' },
                  { src: '/cooking/Million Layer Potatoes/mlp4.jpg', alt: 'Million Layer Potatoes 4' },
                  { src: '/cooking/Million Layer Potatoes/mlp5.jpg', alt: 'Million Layer Potatoes 5' },
                  { src: '/cooking/Million Layer Potatoes/mlp6.jpg', alt: 'Million Layer Potatoes 6' },
                ]}
                caption="Million Layer Potatoes"
              />
            </div>
            <div className="col-span-1">
              <ImageCarousel
                images={[
                  { src: '/cooking/Shakshuka/s1.jpg', alt: 'Shakshuka 1' },
                  { src: '/cooking/Shakshuka/s2.jpg', alt: 'Shakshuka 2' },
                  { src: '/cooking/Shakshuka/s3.jpg', alt: 'Shakshuka 3' },
                  { src: '/cooking/Shakshuka/s4.jpg', alt: 'Shakshuka 4' },
                  { src: '/cooking/Shakshuka/s5.jpg', alt: 'Shakshuka 5' },
                  { src: '/cooking/Shakshuka/s6.jpg', alt: 'Shakshuka 6' },
                  { src: '/cooking/Shakshuka/s7.jpg', alt: 'Shakshuka 7' },
                  { src: '/cooking/Shakshuka/s8.jpg', alt: 'Shakshuka 8' },
                ]}
                caption="Shakshuka"
              />
            </div>
            <div className="col-span-1 rounded-lg border border-gray-300 overflow-hidden shadow-lg">
                <Image
                  src="/cooking/spicy-fried-chicken.jpg"
                  alt="Spicy Fried Chicken"
                  width={500}
                  height={500}
                  className="object-cover"
                />
                <div className="caption p-2 text-center text-lg">Spicy Fried Chicken</div>
            </div>
          </div>
        </section>
        {/* Adding blank space at the bottom */}
        <div className="h-32"></div>
      </div>
    </div>
  );
}