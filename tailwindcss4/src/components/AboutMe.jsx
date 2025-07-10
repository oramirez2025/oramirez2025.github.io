
import me_maltese from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/me_maltese.gif";
import me_fire_breath from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/me_fire_breath.gif";
import me_cookies_girls from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/me_cookies.gif";
import resume from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/Resume_Ramirez_2025.pdf";
import cv from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/CV_Ramirez_2025.pdf";
import linkedin from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/linkedin-svgrepo-com.svg";
import github from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/github-svgrepo-com.svg";
import email from "/Users/oramirez2025/oramirez2025.github.io/tailwindcss4/public/post-office-svgrepo-com.svg";
function AboutMe() {
  const borders = [me_maltese, me_fire_breath, me_cookies_girls];
  const choose_border = borders[Math.floor(Math.random() * borders.length)];
  return (
    <div className="min-h-screen p-6">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="flex-1 text-left">
          <h1 className="text-3xl mb-4 text-center"> <b>Oswaldo</b> Ramirez</h1>

          <div className="space-y-4">
            <p>
              Hello there! My name is <b>Oswaldo Ramirez</b>. I also go by the nickname <b>Wally</b> 🤖 (all the way from middle school).
              I'm from Chicago, Illinois. 
            </p>

            <p>
              I recently graduated from <b>Carnegie Mellon University</b> with a Bachelor Degree in 
              <b> Computer Science</b>, additional major in <b>Mathematical Sciences</b>, and concentration in <b>Algorithms and Complexity</b>.
            </p>

            <p>
              Right now I'm at the crossroads between academia and industry. However, I'm mainly concerned with learning new things. Therefore, I'm open to any opportunity and I hope to find a job soon!
            </p>
            <p>
              Here's my <a href={resume} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">resume</a> / <a href={cv} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">CV</a>.
            </p>
            <p>I'm thinking of adding more to the website like a hobbies page with music and games. Back in the summer of 2023, I got into music production so I'll probably include my soundcloud (if I build up the courage lol). Also, my friend introduced me to the game of StepMania and I've been playing that frequently.
            </p>
            <p>
              If you find any typos or issues with the website please let me know!
            </p>
          </div>
        </div>
        <div>
            <img
            src={choose_border}
            alt="Picture of Oswaldo holding cookies and jug of milk"
            className="w-86 h-auto object-cover rounded shadow-lg"
            />
            <div className="flex flex-row items-center gap-4 mt-4 justify-center">
                <a href="mailto:oramirez10102@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={email} alt="Email" className="w-8 h-8"/>
                </a>
                <a href="https://github.com/oramirez2025" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="GitHub" className="w-8 h-8"/>
                </a>
                <a href="https://www.linkedin.com/in/oswaldo-ramirez2025/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" className="w-8 h-8"/>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
