import NavigationBar from "../components/Navigation";

function Projects() {
  return (
    <div>
      <NavigationBar />
      <div className="min-h-screen p-6">
        {/* Page title */}
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        {/* Preface */}
        <p className="mb-8 text-lg leading-relaxed">
            Coming from CMU, all the programming assignments seemed like they could be classified as a project (in fact, some of those very assignemnts are called projects lol). Therefore, I won't
            include everything because it seems like cheating; although, I did enjoy the minesweeper solver from the games lab in 15-150 Functional progrmaming. Furthermore, in the summer of 2022, 
            I attended UIUC's Summer of Side Projects, where I did a few cool things there. 
        </p>

        {/* Mathematics Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mathematics Projects</h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold">Pell’s Equation (Write-up &amp; Presentation)</h3>
            <p className="text-lg leading-relaxed">
              Explored solutions to the Diophantine equation <code>x² - D y² = 1</code> via continued fractions, wrote a formal paper, and delivered a seminar-style presentation.
            </p>
            <p className="mt-1 italic">
              <strong>What I learned:</strong> Deepened my understanding of algebraic number theory, mastered LaTeX for rigorous write-ups, and improved my ability to communicate complex proofs to a peer audience.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">Proving Hopf’s Umlaufsatz Theorem</h3>
            <p className="text-lg leading-relaxed">
              Developed a self-contained proof of the Umlaufsatz (turning-number theorem) for smooth closed curves in the plane, culminating in an illustrated proof document.
            </p>
            <p className="mt-1 italic">
              <strong>What I learned:</strong> Refined my skills in differential geometry and topology, practiced constructing clear, step-by-step arguments, and incorporated diagrams to illuminate geometric intuition.
            </p>
          </div>
        </section>

        {/* Computer Science Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Computer Science Projects</h2>

          <ol className="list-decimal list-inside space-y-8">
            <li>
              <h3 className="text-xl font-semibold">15-112 “Binding of Isaac” Project</h3>
              <p className="text-lg leading-relaxed">
                Recreated core mechanics from the course’s “Binding of Isaac” assignment in Python, implementing object-oriented game entities, collision detection, and state management.
              </p>
              <p className="mt-1 italic">
                <strong>Skills:</strong> Object-oriented design, event-driven programming, and debugging real-time simulations.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold">T-Shirt E-Commerce Website &amp; Discord Bot</h3>
              <p className="text-lg leading-relaxed">
                Built a full-stack MERN web app for designing and ordering custom T-shirts, complete with user authentication, payment integration (Stripe), and inventory management. Developed a companion Discord bot in Node.js to fetch order status and send restock alerts on demand.
              </p>
              <p className="mt-1 italic">
                <strong>Skills:</strong> React + Tailwind CSS front-end, Express.js back-end, REST APIs, and bot development.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold">PageRank Algorithm Implementation</h3>
              <p className="text-lg leading-relaxed">
                Implemented the original PageRank algorithm from scratch on a set of real-world web graphs, experimenting with damping factors and convergence thresholds. Visualized rank distributions and compared performance against NetworkX’s built-in routines.
              </p>
              <p className="mt-1 italic">
                <strong>Skills:</strong> Graph data structures, numerical linear algebra, convergence analysis, and data visualization.
              </p>
            </li>

            <li>
              <h3 className="text-xl font-semibold">Flappy Bird Reinforcement Learning</h3>
              <p className="text-lg leading-relaxed">
                Trained a neural-network agent using Deep Q-Learning to play Flappy Bird, including state representation, reward shaping, and experience replay. Achieved stable flight with an average score above 20 after 50,000 training episodes.
              </p>
              <p className="mt-1 italic">
                <strong>Skills:</strong> Python with TensorFlow/PyTorch, RL algorithms (DQN), hyperparameter tuning, and performance monitoring.
              </p>
            </li>
            <li>
              <h3 className="text-xl font-semibold">Bitcoin Miner</h3>
              <p className="text-lg leading-relaxed">
                Built a C++ application that distributes hashing work among worker threads, searches for low-hash nonces over a given range, and returns the best candidate. Integrated dynamic worker management to handle connections and disconnections in real-time.
              </p>
              <p className="mt-1 italic">
                <strong>Skills:</strong> C++17 multithreading, hash functions, real-time distributed task management, and performance optimization.
              </p>
            </li>
          </ol>
        </section>
      </div>
    </div>
  );
}

export default Projects;
