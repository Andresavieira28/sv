import './indicacoes.css';
import avatar1 from './avatar-julianne.png'; // você pode recortar da imagem original
import avatar2 from './avatar-jeane.png';   // mesmo aqui

export default function Indicacoes() {
  const abrirMapa = () => {
    window.open(
      'https://www.google.com/maps/place/SV+Instala%C3%A7%C3%A3o+e+convers%C3%A3o+de+fog%C3%A3o/@-23.5097679,-46.7539977,690m/data=!3m1!',
      '_blank'
    );
  };

  return (
    <div className="indicacoes">
        <section className="section-indicacoes">
            <div className="indicacoes-conteudo">
                <h1>O que os nossos clientes dizem sobre nós!</h1>
                <button className="btn-mapa" onClick={abrirMapa}>Nossas indicações!</button>
            </div>

            <div className="cards-indicacoes">
                <div className="card-indicacao">
                <img src={avatar1} alt="Julianne Menoncello" className="avatar" />
                <div className="texto-indicacao">
                    <h3>Julianne Menoncello</h3>
                    <p>
                    O técnico Emanuel da Sv veio e fez a instalação e conversão do fogão.
                    Perfeito, chama boa, bem feito, serviço limpo e rápido. Recomendo.
                    </p>
                </div>
                </div>

                <div className="card-indicacao">
                <img src={avatar2} alt="Jeane Câncio" className="avatar" />
                <div className="texto-indicacao">
                    <h3>Jeane Câncio</h3>
                    <p>
                    Obrigada, Emanuel!!! Ele fez a conversão para gás natural, e o serviço ficou
                    simplesmente impecável. Mandei mensagem e após 30 minutos ele estava em
                    minha casa para atender e realizar o serviço. Obrigada pela pontualidade e
                    agilidade no serviço.
                    </p>
                </div>
                </div>
            </div>
        </section>
    </div>
  );
}
