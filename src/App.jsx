/* eslint-disable react/no-unescaped-entities */
import "./App.scss";
import Logo from "./assets/logo.png";
import Misc from "./assets/body.png";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="hero-section">
          <div className="contents">
            <div className="logo">
              <img src={Logo} width={75} alt="" />
            </div>

            <div className="hero">
              <div className="img">
                <img src={Logo} alt="" />
              </div>

              <div className="info">
                <div className="title">
                  THE DOG COIN <br /> OF THE PEOPLE
                </div>

                <div className="desc">
                  Missed out on $BONK? Here's your chance with generational
                  wealth opportunity with twice the better on $BONK2.0 !
                </div>

                <div className="contract">
                  Mmsmsmsuwdbwubcwbcsycwcbwcubwcbcbjndnscnsj
                </div>

                <div className="socials-buy">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Buy Here
                  </a>

                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Chart
                  </a>

                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    Telegram
                  </a>

                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    X
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mission">
          <div className="head">our mission</div>

          <div className="desc">
            <p> To become the #1 community coin in web3</p>
            <p>
              We aim on achieving this through expanding our growing list of
              integrations across
            </p>
          </div>
        </div>

        <div className="tokenomics">
          <div className="head">Tokenomics</div>

          <div className="values">
            <div className="digits">
              <p>500 000 000 000 $BONK0.5</p>

              <p>0/0</p>
            </div>

            <div className="titles">
              <p>Total Supply</p>

              <p>Tax</p>
            </div>
          </div>
        </div>

        <div className="miscellaneous">
          <img src={Misc} width={500} alt="" />
        </div>

        <div className="roadmap">
          <div className="contents">
            <div className="head-title">Roadmap</div>

            <div className="phases">
              <div className="phase">
                <div className="head">Phase 1</div>

                <ul>
                  <li>Token launch</li>
                  <li>Website and social medias</li>
                  <li>Bonk meme generator</li>
                </ul>
              </div>

              <div className="phase">
                <div className="head">Phase 2</div>

                <ul>
                  <li>Twitter raids</li>
                  <li>Telegram group raids</li>
                  <li>CMC and CG Listings</li>
                </ul>
              </div>

              <div className="phase">
                <div className="head">Phase 3</div>

                <ul>
                  <li>Bonk sniper revenue share</li>
                  <li>Meme takeover</li>
                  <li>Kol partnerships</li>
                  <li>Cex listings</li>
                </ul>
              </div>

              <div className="phase">
                <div className="head">Phase 4</div>

                <ul>
                  <li>BONK THE WORLD 🌎</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
