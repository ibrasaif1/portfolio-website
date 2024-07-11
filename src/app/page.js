import { Separator } from '@radix-ui/react-separator';
import CollapsibleCard from '../components/CollapsibleCard';
import Image from 'next/image';
import ImageCarousel from '../components/ImageCarousel'; // Import the ImageCarousel component
import './globals.css';
import Head from 'next/head';



export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section id="about" className="my-8 scroll-mt-16">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <div className="bg-sky-100 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-64 h-64 md:w-48 md:h-auto rounded-3xl overflow-hidden shadow-lg flex-shrink-0">
                <Image
                  src="/headshot.jpg"
                  alt="Ibrahim Saifullah headshot"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                  layout="responsive"
                />
              </div>
              <div className="flex-grow space-y-4">
                <p className="text-lg">
                  Hello! My name is Ibrahim Saifullah, and I recently graduated Magna Cum Laude with
                  a degree in Computer Science.
                </p>
                <p className="text-lg">
                  I've completed software engineering internships at Foundation Medicine and Principal Financial Group.
                </p>
                <p className="text-lg">
                  I've also done a few projects. I constructed a full-stack interface for Ruiz Foods as my senior project, I created an AI-enabled predictive artist lyric Twitter bot Lyric Learner, and I developed a React front-end and wrote Python Flask endpoints for a simple bug tracking website in one of my courses.
                </p>
              </div>
            </div>
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
            Foundation Medicine conducts genomic profiling tests, which gives doctors and patients detailed insights into the genetic makeup of their cancer. 
            They can use these insights for more targeted, rather than general, treatment options. 
            Here, I worked on the EMR Integrations team. We were responsible for the test ordering system on hospital software, which was enabled by Kafka.
            My duties included:
            • Completing tickets add features or fix bugs in our JavaScript codebase
            • Add unit tests to be ran by Jenkins in CI/CD pipeline to ensure that my changes were thoroughly validated
            • Program Node.js scripts to speed up developer processes, like encoding/decoding base64 all on the CLI
            `}
          skills={["JavaScript", "Node.js", "Unit Testing", "Jenkins", "Kafka", "Git"]}
        />
        <CollapsibleCard
          id="principal-financial-group"
          company="Principal Financial Group"
          role="Software Engineer Intern"
          description={`
            I worked on the Insider Risk team, tasked with completing a summer project to notify our Security Operations Center of potential bad actors within the company.
            To do this, I created an AWS architecture that:
            • Used a Python Lambda with an SQL query filtering employees by seemingly suspicious behavior (like mass downloading sensitive documents to a USB)
            • Deployed API Gateway to call this Lambda and send response to SOC
            We also had a brief intern hackathon within the company, in which I:
            • Collaborated with a group to create a React website for non-engineering employees to post engineering problems they had so that company engineers can solve them
            • Hosted this website on AWS Amplify with Cognito authentication
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
            Ruiz Foods sells frozen Mexican food under the El Monterey brand in grocery stores and under the Tornados brand to convenience stores for their roller grills.
            They store pallets of products and ingredients in large, frozen warehouses at -10°F and heights up to 50 feet.
            Sometimes, pallets aren't placed perfectly, and they tip. A tipped pallet can end up falling over which causes product loss, time loss to fix it, and even potentially injury.
            To address this problem, Ruiz Foods wanted to implement a solution involving a drone that would fly to and upload a picture of each pallet location.
            The drone part was left out of our scope, to be completed in another phase. My group focused on creating an interface and ML model to deduce whether a picture of a pallet was deemed risky or not.
            To complete this project, I:
            • Served as Point-of-Contact with company representatives to translate business needs into app features
            • Developed React web app for interface
            • Deployed PostgreSQL database on AWS RDS
            • Created REST API endpoints with Node.js and Express
            `}
          skills={["React.js", "Node.js", "Express", "REST APIs", "PostgreSQL"]}
        />
        <CollapsibleCard
          id="lyric-learner"
          company="Lyric Learner"
          role="AI-enabled Twitter bot"
          description="Lyric Learner parses artist lyrics via Genius' REST API in Python, interprets the lyrics and generates new lyrics via a Java program written within the Maven framework, then uses Twitter's REST API to send out tweets."
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
                { src: '/cooking/Sushi/sushi1.jpg', alt: 'Sushi 1' },
                { src: '/cooking/Sushi/sushi2.jpg', alt: 'Sushi 2' },
                { src: '/cooking/Sushi/sushi3.jpg', alt: 'Sushi 3' },
                { src: '/cooking/Sushi/sushi4.jpg', alt: 'Sushi 4' },
                { src: '/cooking/Sushi/sushi5.jpg', alt: 'Sushi 5' },
              ]}
              caption="Sushi"
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
              caption="Broccoli Fritters"
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
              <div className="caption p-2 text-center text-lg bg-sky-100">Spicy Fried Chicken</div>
          </div>
          <div className="col-span-1 rounded-lg border border-gray-300 overflow-hidden shadow-lg">
              <Image
                src="/cooking/Smashburger.jpg"
                alt="Smashburger"
                width={500}
                height={500}
                className="object-cover"
              />
              <div className="caption p-2 text-center text-lg bg-sky-100">Smashburger</div>
          </div>
        </div>
      </section>
      {/* Adding blank space at the bottom */}
      <div className="h-32"></div>
    </div>
  );
}