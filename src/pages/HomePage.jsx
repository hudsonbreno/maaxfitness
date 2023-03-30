import deUmUpNoSeuTreino from "../style/deUmUp.jpg";
import styled from "styled-components";
import academia from "../style/Academia.png";

export default function HomePage() {
  return (
    <>
      <Banner>
        <img src={deUmUpNoSeuTreino} />
        <div className="chamadaInicial">
          <h2>OS MELHORES PRODUTOS, PARA VOCÊ MELHORAR SEU GANHO DE MASSA</h2>
          <h1>MUSCULAR</h1>
        </div>
      </Banner>
      <FitBotoes>
        <div className="barraBotoes">
          <button onClick={() => console.log("Pre Treino")}>PRÉ TREINO</button>
          <button onClick={() => console.log("Creatina")}>CREATINA</button>
          <button onClick={() => console.log("Whey")}>WHEY</button>
          <button onClick={() => console.log("Massa Muscular")}>
            MASSA MUSCULAR
          </button>
          <button onClick={() => console.log("Aminoácidos e proteínas")}>
            AMINOÁCIDOS E PROTEÍNAS
          </button>
          <button onClick={() => console.log("Emagrecedores")}>
            EMAGRECEDORES
          </button>
          <button onClick={() => console.log("Albumina")}>ALBUMINA</button>
          <button onClick={() => console.log("Coqueteleira")}>
            COQUETELEIRA
          </button>
        </div>
        <img src={academia} />
      </FitBotoes>
      <Informativo>
        <div>
          <img src=""/>
          <div>
            <h1>Pagamentos</h1>
            <h2>Falicitados</h2>
          </div>
        </div>
        <div>
          <img src=""/>
          <div>
            <h1>Correios</h1>
            <h2>Entrega Rápida</h2>
          </div>
        </div>
        <div>
          <img src=""/>
          <div>
            <h1>100%</h1>
            <h2>Originais</h2>
          </div>
        </div>
      </Informativo>
      <Promocoes>
        <div className="">
          <img src=""/>
          <h1>
            Promoções
          </h1>
        </div>

        <div className="listaPromocoes">
          <div className="produtos">
            <img src=""/>
            <h1>BETA ALANINA 200 GR ABSOLUT</h1>
            <button></button>
          </div>
        </div>
      </Promocoes>
    </>
  );
}

const Banner = styled.div`
  display: flex;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #000000;

  img {
    width: 239px;
    height: 290px;
    margin-left: 97px;
    margin-top: 42px;
    border-radius: 17px;
  }
  .chamadaInicial {
    display: flex;
    flex-direction: column;
    margin-right: 115px;
  }
  h2 {
    justify-content: center;
    width: 550px;
  }
  h1 {
    justify-content: center;
    font-family: "Recursive";
    font-style: normal;
    font-weight: 800;
    font-size: 64px;
    line-height: 77px;
    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;

const FitBotoes = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: #61615F;
  
  img{
    width: 240px;
    height: 148px;
    border-bottom-left-radius: 40px 40px;
    border-top-left-radius: 40px 40px;
    margin-left: 40px;
  }
  .barraBotoes{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 715px;
  height: 99px;
  }

  .barraBotoes button {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;

    color: #000000;
    margin-bottom: 15px;
    width: 158px;
    height: 42px;
    border-radius: 17px;
    margin-right: 20px;
  }

`;

const Informativo = styled.div`
display: flex;
flex-direction: row;
img{
  width: 38px;
  height: 36px
}
h1{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
text-align: center;

color: #FFFFFF;
}
h2{
  font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 15px;
text-align: center;

color: #FFFFFF;
}
`
const Promocoes = styled.div`
display: flex;
`