import { ReactComponent as ImgHome } from "../../assets/img/home.svg";
import NavBar from "components/Navbar";
import "./styles.css";
import ButtonIcon from "components/ButtonIcon";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o Melhor catálogo de produtos</h1>
              <p>
                Ajudaremos você a encontrar os melhores produtos disponíveis no
                mercado.
              </p>
              <ButtonIcon />
            </div>
          </div>
          <div className="home-img-container">
            <ImgHome />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
