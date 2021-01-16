import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Personal Portfolio</h1>
      </div>
      <div className="App-sub-header">
        <h3>Hi, my name is Jheovanny Camacho.</h3>
        <p>
          I am a recent Computer Science graduate. <br/>
          I'm currently looking for work as a software engineer or a similar position.
        </p>
      </div>

      <div className="App-section-header">
        <h3>Personal Info</h3>
      </div>
      <div className="App-body">
        <p>Here you can view my contact info and professional profiles:</p>
        <ul>
          <li><a href="mailto:jheocamacho@gmail.com"><img height="32" width="32" src="./images/gmail.svg" />Email: jheocamacho@gmail.com</a></li>
          <li><a href="https://www.linkedin.com/in/jheovanny-camacho/"><img height="32" width="32" src="./images/linkedin.svg" />LinkedIn</a></li>
          <li><a href="https://github.com/jheocamacho"><img height="32" width="32" src="./images/github.svg" />GitHub</a></li>
          <li><img height="32" width="32" src="./images/portfolio.svg" />Resume</li>
        </ul>
        <iframe src="https://drive.google.com/file/d/1_3waQc1T9IkgqY39YK8oQFXHyS4yXBvA/preview" width="100%" height="400px" frameBorder="0"></iframe>
      </div>
      
      <div className="App-section-header">
        <h3>Projects</h3>
      </div>
      <div className="App-body">
        <div>
          <ul>
            <li><a href="#mymovielist">MyMovieList</a></li>
            <li><a href="#imagerater">ImageRater</a></li>
            <li><a href="#duckthatdiabetes">Duck That Diabetes</a></li>
            <li><a href="#sorting-algorithm-testbench">Sorting Algorithm Testbench</a></li>
            <li><a href="#mips-simulator">MIPS Simulator</a></li>
          </ul>
        </div>
        <div id="mymovielist" className="App-card">
          <h2 className="card-title">MyMovieList</h2>
          <p>
            A social media website for movie lovers. Search for, rate and review movies.
            You can also recommend them to others and join public dicussions.
            This is a university group project worked on by four people total. 
            I was in charge of discussion board and post functionality.
            This was crafted with the Laravel Framework with the backend written in PHP.
          </p>
          <div className="badge-container">
            <div className="badge html">HTML</div>
            <div className="badge css">CSS</div>
            <div className="badge javascript">JavaScript</div>
            <div className="badge php">PHP</div>
          </div>
          <div className="container">
            <a href="https://github.com/FresnoState-CSCI152/CSCI-152-MyMovieList"><button>GitHub</button></a>
            <a href="https://mymovielistcsci150.herokuapp.com/"><button>Demo</button></a>
          </div>
          <div>
            <img className="minor-shadow wide-image" src="./images/mymovielist_screencap_1.png" alt="mymovielist screencap 1"/>
            <img className="minor-shadow" src="./images/mymovielist_screencap_2.png" alt="mymovielist screencap 2" />
          </div>
        </div>
        <div id="imagerater" className="App-card">
          <h2 className="card-title">ImageRater</h2>
          <p>
            A cross-platform app for the user to upload an image, either from their camera or library, then label and categorize them. 
            Images can then be browsed through and rated. A university project worked on by two people total. This was crafted using the Xamarin framework.
            I was in charge of UI/UX as well as image taking/uploading and location/mapping functionalities. 
            I also made sure that the project structure conformed to Model-View-ViewModel guidelines.
          </p>
          <div className="badge-container">
            <div className="badge csharp">C#</div>
            <div className="badge xaml">XAML</div>
          </div>
          <div className="container">
            <a href="https://github.com/jheocamacho/CSCI-191T-ImageRater-Project"><button>GitHub</button></a>
            <a href="https://drive.google.com/open?id=17byxnvHDvEMAHx_5U67WwzTlzmKUcdKy"><button>Download</button></a>
          </div>
          <div>
            <img className="minor-shadow" src="./images/imagerater_screencap_1.jpg" alt="imagerater screencap 1" />
            <img className="minor-shadow" src="./images/imagerater_screencap_2.jpg" alt="imagerater screencap 2" />
          </div>
        </div>

        <div id="duckthatdiabetes" className="App-card">
          <h2 className="card-title">Duck That Diabetes</h2>
          <p>
            A mobile app that is equipped with a highly trained Convolutional Neural Network, which can classify Diabetic Retinopathy stages in seconds.
            This was a group project worked on by three people as part of a hackathon, HackFresno 2019.
            My contribution was making Python scripts and using the Augmentor library to then produce thousands of augmented images for use in teaching the neural network.
          </p>
          <div className="badge-container">
            <div className="badge python">Python</div>
          </div>
          <div className="container">
            <a href="https://devpost.com/software/duck-the-diabetes"><button>More Info</button></a>
          </div>
          <div className="container">
            <img className="minor-shadow" src="./images/DuckThatDiabetes.jpg" alt="duckthatdiabetes logo" />
            <iframe src="https://drive.google.com/file/d/1bwiFOL_hsj5bWn763IkJwjJEdf04d-HW/preview" width="100%" frameborder="0"></iframe>
          </div>
        </div>

        <div id="sorting-algorithm-testbench" className="App-card">
          <h2 className="card-title">Sorting Algorithm Testbench</h2>
          <p>
            This console application will test different sorting algorithms and time how long it takes for them to complete.
            The algorithms included are selection, insertion, bubble, merge, and quick sort.
            There is also a report included in the repo which go over the results.
            This was only done by me.
          </p>
          <div className="badge-container">
            <div className="badge cpp">C++</div>
          </div>
          <div className="container">
            <a href="https://github.com/jheocamacho/CSCI-115-Sorting-Algorithm-Project"><button>GitHub</button></a>
            {/* <a href="#"><button>Demo</button></a> */}
          </div>
          <div>
            <img className="minor-shadow" src="./images/sorting_algorithm_testbench_screencap_1.jpg" alt="sorting algorithm testbench screencap 1" />
            <img className="minor-shadow" src="./images/sorting_algorithm_testbench_screencap_2.jpg" alt="sorting algorithm testbench screencap 2" />
          </div>
        </div>
        <div id="mips-simulator" className="App-card">
          <h2 className="card-title">MIPS Simulator</h2>
          <p>
            A MIPS assembly language simulator which takes in a text file containing hexadecimal instructions and runs assembly operations.
            This was only done by me.
          </p>
          <div className="badge-container">
            <div className="badge cpp">C++</div>
          </div>
          <div className="container">
            <a href="https://github.com/jheocamacho/CSCI-113-MIPS-Simulator-Project"><button>GitHub</button></a>
            {/* <a href="#"><button>Demo</button></a> */}
          </div>
          <div>
            <img className="minor-shadow" src="./images/mips_simulator_screencap_1.jpg" alt="mips simulator screencap 1" />
            <img className="minor-shadow wider-image" src="./images/mips_simulator_screencap_2.jpg" alt="mips simulator screencap 2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
