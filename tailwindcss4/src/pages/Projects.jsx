import NavigationBar from "../components/Navigation";
import Pells from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Pell's_equation.png";
import PellsWriteup from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/21_441_Pell_Equations_Project.pdf";
import PellsPresentation from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/21_441_Pell_Equations_Presentation.pdf";
import HopfsWriteup from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/21_360_Covering_and_Homotopy.pdf";
import HITS from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/21_241_Project_2.pdf";
import SparsifiersWriteup from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/15_851_Final_Project_Paper.pdf";
import SparsifiersPresentation from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Big Data Final Presentation.pdf";
import DirectedGraph from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/directedGraph.jpg";
import Homotopy from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Homotopy_curves.png";
import GraphSparsifier from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/sparsifier.png";
import Binding from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Binding.mp4";
import Tshirt from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/tshirts.png";
import Discord from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/discordBot.jpg";
import Flappy from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Flappy4x.mp4";

function Projects() {
  return (
    <div>
      <NavigationBar/>
      <div className="min-h-screen p-6">
        {/* Page title */}
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        {/* Preface */}
        <p className="mb-8 text-lg leading-relaxed">
            Coming from CMU, all the programming assignments seemed like they could be classified as a project (in fact, some of those very assignemnts are called projects lol). Therefore, I won't
            include everything because it seems excessive; although, I did enjoy the minesweeper solver from the games lab in 15-150 Functional progrmaming. 
        </p>
        <p className="mb-8 text-lg leading-relaxed">
          Furthermore, in the summer of 2022, I attended UIUC's Summer of Side Projects, where I did a few cool things there. We would learn new concepts and then put them into practice via projects. They were small enough so I grouped them together.
        </p>

        {/* Mathematics Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mathematics Projects</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Pell’s Equation </h3>
            <p className="text-lg leading-relaxed">
              Explored solutions to the <strong>Diophantine equation</strong> <code>x² - Dy² = 1</code> via <strong>continued fractions</strong>, wrote a formal paper, and delivered a presentation.
            </p>
            <img src={Pells} className="rounded shadow"/>
            <p className="text-lg leading-relaxed text-gray-800">
              <a
                href={PellsWriteup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Writeup
              </a>{' '}
              | {' '}
              <a
                href={PellsPresentation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Presentation
              </a>
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Proving Hopf’s Umlaufsatz Theorem</h3>
            <p className="text-lg leading-relaxed">
              Reviwed the necessary concepts from Algebraic Topology such as <strong>Covering Spaces</strong> and <strong>Homotopy Lifting</strong> to fill in the gap of the proof of <strong>Hopf's Umlaufsatz Theorem</strong> presented in class.
            </p>
            <img src={Homotopy} className="w-full rounded shadow"/>
            <p className="text-lg leading-relaxed text-gray-800">
              <a
                href={HopfsWriteup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Writeup
              </a>
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold">PageRank and HITS algorithm</h3>
            <p className="text-lg leading-relaxed">
              Implemented <strong>PageRank</strong> and <strong>HITS</strong> algorithm and tested on large graphs supplied by Stanford Large Network Dataset Collection. Additionally, we experimented with <strong>damping factors</strong> and <strong>sink states</strong>. 
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              <a
                href={HITS}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Writeup
              </a>
            </p>
            <img src={DirectedGraph} className="rounded shadow"/>
          </div>
        </section>

        {/* Computer Science Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Computer Science Projects</h2>
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Cut Sparsifiers</h3>
            <p className="text-lg leading-relaxed">
              Reviewed state of the art <strong>cut sparsifiers</strong> algorithms in the undirected setting with research directions.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              <a
                href={SparsifiersWriteup}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Writeup
              </a>{' '}
              | {' '}
              <a
                href={SparsifiersPresentation}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Presentation
              </a>
            </p>
            <img src={GraphSparsifier} className="rounded shadow"/>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Bitcoin Miner</h3>
            <p className="text-lg leading-relaxed">
              For distributed systems, we built a <strong>key-value server and client</strong> with various features such as <strong>heartbeat</strong> and <strong>windows</strong>. Then, in the second part we implemented bitcoin miners where we chunked jobs and greedily assigned them to available miners.

              We programmed in <strong>GoLang</strong> (very goofy mascot). I can't share any code but trust me lol.
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold">T-shirt Website &amp; Music Discord Bot</h3>
            <p className="text-lg leading-relaxed">
              For UIUC SOSP 2022, I built a toy t-shirt <strong>website</strong> using <strong>HTML</strong> and <strong>Flask framework</strong> and Discord music bot using <strong>Python</strong> and <strong>Discord API</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <img src={Tshirt} className="rounded shadow"/>
                <a
                  href="https://github.com/oramirez2025/T-web"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Github
                </a>
              </div>
              <div>
                <img src={Discord} className="rounded shadow"/>
                <a
                  href="https://github.com/oramirez2025/musicBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Flappy Bird Reinforcement Learning</h3>
            <p className="text-lg leading-relaxed">
              For my neural computation course, I implemented a flappy bird agent with <strong> Q-learning</strong>.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              <a
                href="https://github.com/oramirez2025/Binding-of-Isaac-Replica/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Github
              </a>
              <video className="h-150 w-full rounded-lg" controls width="1280">
                <source src={Flappy} type="video/mp4"/>
              </video>
            </p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold">Binding of Isaac Replica</h3>
            <p className="text-lg leading-relaxed">
              For my introductory CS course, I built a replica of an old game Binding of Isaac with interesting features such as <strong>A* algorithm</strong> and <strong>graphics</strong>.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              <a
                href="https://github.com/oramirez2025/Binding-of-Isaac-Replica/tree/main"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Github
              </a>
              <video className="h-150 w-full rounded-lg" controls width="1280">
                <source src={Binding} type="video/mp4"/>
              </video>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
