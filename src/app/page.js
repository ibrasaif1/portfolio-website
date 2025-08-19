import { Separator } from '@radix-ui/react-separator';
import CollapsibleCard from '../components/CollapsibleCard';
import Image from 'next/image';
import ImageCarousel from '../components/ImageCarousel'; // Import the ImageCarousel component
import './globals.css';
import Head from 'next/head';



export default function Home() {
  return (
    <div>
      <div className="container mx-auto px-4">
      <section id="about" className="my-8 scroll-mt-16">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="bg-white/80 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 flex flex-col items-center justify-center space-y-4">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/selfie.png"
                  alt="Ibrahim Saifullah headshot"
                  width={200}
                  height={200}
                  className="object-cover object-top w-full h-full"
                  layout="responsive"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">Ibrahim Saifullah</h3>
                <p className="text-gray-600">Software Engineer</p>
                <p className="text-sm text-gray-500 mt-1">@ Pushnami</p>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Hello!</h4>
                <p className="text-sm text-gray-600">
                  I'm a full-stack developer passionate about creating clean and intuitive interfaces backed by smooth systems.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Key Highlights</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Backend experience with microservice architecture</li>
                  <li>• Eye and passion for UI/UX design</li>
                  <li>• Scalable systems & cloud infrastructure</li>
                  <li>• Passionate home cook</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-100 text-cyan-800 border-cyan-200 text-xs font-medium px-2.5 py-1 rounded-full border">React.js</span>
                  <span className="bg-green-100 text-green-800 border-green-200 text-xs font-medium px-2.5 py-1 rounded-full border">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 border-blue-200 text-xs font-medium px-2.5 py-1 rounded-full border">Go</span>
                  <span className="bg-purple-100 text-purple-800 border-purple-200 text-xs font-medium px-2.5 py-1 rounded-full border">Terraform</span>
                  <span className="bg-gray-100 text-gray-800 border-gray-200 text-xs font-medium px-2.5 py-1 rounded-full border">CI/CD</span>
                  <span className="bg-yellow-100 text-yellow-800 border-yellow-200 text-xs font-medium px-2.5 py-1 rounded-full border">Python</span>
                  <span className="bg-orange-100 text-orange-800 border-orange-200 text-xs font-medium px-2.5 py-1 rounded-full border">AWS</span>
                  <span className="bg-indigo-100 text-indigo-800 border-indigo-200 text-xs font-medium px-2.5 py-1 rounded-full border">SQL</span>
                  <span className="bg-emerald-100 text-emerald-800 border-emerald-200 text-xs font-medium px-2.5 py-1 rounded-full border">NoSQL</span>
                  <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-purple-800 border-purple-300 text-xs font-medium px-2.5 py-1 rounded-full border">NLP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="work-experience" className="my-8 scroll-mt-16">
        <h2 className="text-3xl font-bold">Work Experience</h2>
        <CollapsibleCard
          id="pushnami"
          company="Pushnami"
          role="Software Engineer"
          description={`
            
            `}
          skills={["Go", "React.js", "Node.js", "Terraform", "CI/CD", "NoSQL", "SQL", "AWS"]}
        />
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
          skills={["Node.js"]}
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
          role="Senior Project"
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
          skills={["React.js", "Node.js", "SQL"]}
        />
        <CollapsibleCard
          id="lyric-learner"
          company="Lyric Learner"
          role="AI-enabled Twitter bot"
          description={`
            Lyric Learner parses artist lyrics via Genius' RESTful API in Python, interprets the lyrics and generates new lyrics via a Java program written within the Maven Framework, then uses Twitter's RESTful API to send out Tweets.
            For Lyric Generation, the program utilizes Markov Chains to come up with a lyric based on all of the artist's past lyrics. A Markov Chain is a concept similar to predictive text on iMessage in which suggested words are chosen based on a weighted average of the words that most commonly follow it.
            `}
          skills={["Python", "NLP"]}
        />
        <CollapsibleCard
          id="bug-watch"
          company="Bug Watch"
          role="Bug tracking website for school project"
          description="I used React to create the display for a bug tracking website and used Flask in Python to create REST API endpoints for creating or editing bug or user data."
          skills={["Python", "React.js"]}
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
          <div className="col-span-1 rounded-xl border border-white/20 bg-white/80 backdrop-blur-lg overflow-hidden shadow-2xl">
              <Image
                src="/cooking/spicy-fried-chicken.jpg"
                alt="Spicy Fried Chicken"
                width={500}
                height={500}
                className="object-cover"
              />
              <div className="caption p-2 text-center text-lg bg-white/90 backdrop-blur-sm">Spicy Fried Chicken</div>
          </div>
          <div className="col-span-1 rounded-xl border border-white/20 bg-white/80 backdrop-blur-lg overflow-hidden shadow-2xl">
              <Image
                src="/cooking/Smashburger.jpg"
                alt="Smashburger"
                width={500}
                height={500}
                className="object-cover"
              />
              <div className="caption p-2 text-center text-lg bg-white/90 backdrop-blur-sm">Smashburger</div>
          </div>
        </div>
      </section>
      {/* Adding blank space at the bottom */}
      <div className="h-32"></div>
      </div>
    </div>
  );
}