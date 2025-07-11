import NavigationBar from '../components/Navigation';
import FIReVision from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/FIReVision.gif";
import Sparsifier from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/15_851_Final_Project_Paper.pdf";
import Crazyflie from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/crazyfliefly.mp4"
import GraphSparsifier from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/sparsifier.png"

export default function ResearchPage() {
  return (
    <div>
      <NavigationBar/>
      <div className="min-h-screen p-6">
        <div>
          <h1 className="text-3xl font-bold mb-6">Research</h1>

          {/* FIReVision Section */}
          <div className="mb-20 border-gray-300 rounded-2xl shadow-md bg-red-100 p-4">
            <h2 className="text-3xl font-semibold">FIReVision</h2>
            <p className="text-lg font-medium text-gray-700">
              Robotics Institute AirLab, <strong>Spring 2023 – Fall 2023</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-800 pb-4">
              Through CMU’s HURAY program, I collaborated with Andrew Jong to develop a
              realistic wildfire simulation in <strong>Unreal Engine 5</strong> for drone-based
              training and algorithm development.
            </p>
            <h2 className="text-3xl font-semibold">Contributions:</h2>
            <ul className="list-disc list-inside text-lg space-y-1 text-gray-800">
              <li>Developed thermal imaging visualization using <strong>dynamic materials</strong> and <strong>gradient bases</strong>.</li>
              <li>Created a black-and-white gradient base to simulate thermal visuals.</li>
              <li>Added blurriness effects to mimic characteristics of real infrared footage.</li>
              <li>Implemented <strong>PSNR</strong> and <strong>SSIM</strong> analysis tools to calibrate simulation against real-world data.</li>
            </ul>
            <p className="text-lg leading-relaxed text-gray-800 mt-4">
              Below is a demo of a drone flying through the simulation with the thermal imaging overlay:
            </p>
            <div className="flex justify-center">
              <img
                src={FIReVision}
                alt="Drone flying through wildfire with lenses at the bottom of screen"
                className="w-150 rounded-lg"
              />
            </div>
            <p className="text-lg leading-relaxed text-gray-800 pt-4">
              Project website:{' '}
              <a
                href="https://theairlab.org/firevision_sim/home.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                theairlab.org/firevision_sim
              </a>{' '}
              | GitHub:{' '}
              <a
                href="https://github.com/castacks/firevision_sim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                castacks/firevision_sim
              </a>
            </p>
          </div>

          {/* Trochoids Section */}
          <div className="mb-20 border-gray-300 rounded-2xl shadow-md bg-green-100 p-4">
            <div>
              <h2 className="text-3xl font-semibold">Trochoids</h2>
              <p className="text-lg font-medium text-gray-700">
              Robotics Institute AirLab, <strong>Fall 2023 – Present</strong>
              </p>
              <p className="text-lg leading-relaxed text-gray-800 pb-4">
                  Starting in Fall 2023, I transitioned to a new project led by Brady Moon and Sagar Sachdev, focusing on determining optimal flight paths between points in a wind field.
              </p>
              <h2 className="text-3xl font-semibold">Contributions:</h2>
              <ul className="list-disc list-inside text-lg space-y-1 text-gray-800">
                  <li>
                  Created an animated visualization using <strong>Manim</strong> to clearly illustrate trochoid curves (video below).
                  </li>
                  <li>
                  Optimized the pathfinding algorithm by significantly reducing the runtime of a root-finding step within a complex equation, achieving a <strong>100x speedup</strong> in computation.
                  </li>
                  <li>
                  Developed an efficient solver for the curve-curve-curve trochoid path problem utilizing a <strong>2D Newton-Raphson method</strong>.
                  </li>
                  <li>
                  Currently developing a live demonstration featuring a <strong>Crazyflie quadrotor</strong> integrated with ROS, Raspberry Pi, and the Crazyswarm2 package to showcase real-time execution of the trochoid path algorithm.
                  </li>
              </ul>
            </div>
            <div className="flex justify-center my-4 overflow-hidden">
              <iframe
                  className="w-150 rounded-lg aspect-video"
                  src="https://www.youtube.com/embed/qOU5gI7JshI"
                  title="Trochoids animation"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>
            <p>Crazyflie we're trying to flyyyyy; he crashed unfortunately :( </p>
            <div className="flex justify-center">
              <video className="h-150 w-150 rounded-lg" controls width="1400">
                <source src={Crazyflie} type="video/mp4"/>
              </video>
            </div>
            <p className="text-lg leading-relaxed text-gray-800 pt-4">
              GitHub:{' '}
              <a
                href="https://github.com/castacks/firevision_sim"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                trochoids
              </a>
            </p>
          </div>

          {/* Directed Cut Sparsifiers Section */}
          <div className="mb-20 border-gray-300 rounded-2xl shadow-md bg-blue-100 p-4">
            <h2 className="text-3xl font-semibold mb-2">Directed Cut Sparsifiers Characterized by Balance</h2>
            <p className="text-lg font-medium text-gray-700">
              CMU, <strong>Spring 2025 – Present</strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              {/* Add description of your cut sparsifiers research here */}
              In my last semester, I took 15-851 Algorithms for Big Data which had a project componnet. My partner and I decided to learn about cut sparsifiers and particularly directed cut sparsifiers.
              Sparisifers are useful in the realm of large graphs (e.g., social networks) to help us preserve properties with small graphs. We had a <a href={Sparsifier} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">writeup</a> covering state of the art as well as research questions we would embark on, one of which we solved during the course. Through the guidance of Honghao Lin, I am tackling the other
              two research questions.
            </p>
            <p className="text-lg leading-relaxed text-gray-800 mt-4">
              Examples of graph sparsifiers: 
            </p>
            <div className="flex justify-center p-4">
              <img src={GraphSparsifier} alt="Contact Component" className="w-150 rounded shadow"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
