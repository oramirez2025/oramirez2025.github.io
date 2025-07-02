import Navigation from '../components/Navigation';
import FIReVision from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/FIReVision.gif";
import Sparsifier from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/15_851_Final_Project_Paper.pdf";
export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <h1 className="text-4xl font-bold">Research Experience</h1>

        {/* FIReVision Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">FIReVision</h2>
          <p className="text-lg font-medium text-gray-700">
            Robotics Institute AirLab, <strong>Spring 2023 – Fall 2023</strong>
          </p>
          <p className="text-lg leading-relaxed text-gray-800 mt-2">
            Through CMU’s HURAY program, I collaborated with Andrew Jong to develop a
            realistic wildfire simulation in <strong>Unreal Engine 5</strong> for drone-based
            training and algorithm development.
          </p>
          <ul className="list-disc list-inside text-lg space-y-1 mt-2 text-gray-800">
            <li>Developed thermal imaging visualization using dynamic materials and gradient bases.</li>
            <li>Created a black-and-white gradient base to simulate thermal visuals.</li>
            <li>Added blurriness effects to mimic characteristics of real infrared footage.</li>
            <li>Implemented PSNR and SSIM analysis tools to calibrate simulation against real-world data.</li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-800 mt-4">
            Below is a demo of a drone flying through the simulation with the thermal imaging overlay:
          </p>
          <img
            src={FIReVision}
            alt="Drone flying through wildfire with lenses at the bottom of screen"
            className="w-86 h-auto object-cover rounded shadow-lg center"
          />
          <p className="text-lg leading-relaxed text-gray-800">
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
        </section>

        {/* Trochoids Section */}
        <section className="my-8">
        <h2 className="text-2xl font-semibold mb-4">Trochoids</h2>
        <p className="text-lg font-medium text-gray-700">
        Robotics Institute AirLab, <strong>Fall 2023 – Present</strong>
        </p>
        <p className="text-lg leading-relaxed text-gray-800">
            Starting in Fall 2023, I transitioned to a new project led by Brady Moon and Sagar, focusing on determining optimal flight paths between points in a wind field.
        </p>
        <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
            <li>
            Created an animated visualization using <strong>Manim</strong> to clearly illustrate trochoid curves.
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
        </section>
        <p> The manim video: </p>
        <div className="my-4 rounded-lg overflow-hidden shadow-md">
        <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/qOU5gI7JshI"
            title="Trochoids animation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
        </div>
        <p>Crazyflie we're trying to flyyyyy: </p>
        GitHub:{' '}
        <a
            href="https://github.com/oramirez2025/trochoids"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
        >
            trochoids
        </a>

        {/* Directed Cut Sparsifiers Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Directed Cut Sparsifiers Characterized by Balance</h2>
          <p className="text-lg font-medium text-gray-700">
            CMU, <strong>Spring 2025 – Present</strong>
          </p>
          <p className="text-lg leading-relaxed text-gray-800">
            {/* Add description of your cut sparsifiers research here */}
            In my last semester, I took 15-851 Algorithms for Big Data which had a project componnet. My partner and I decided to learn about cut sparsifiers and particularly directed cut sparsifiers.
            Sparisifers are useful in the realm of large graphs (e.g., social networks) to help us preserve properties with small graphs. We had a <a href={Sparsifier} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">writeup</a> covering state of the art as well as research questions we would embark on, one of which we solved during the course. Through the guidance of Honghao Lin, I am tackling the other
            two research questions.
          </p>
          <p>
            Examples of sparsifiers: 
          </p>
        </section>
      </div>
    </div>
  );
}
