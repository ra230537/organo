import Colaborador from "../Colaborador";
import "./Time.css";
// Dummy component: não tem funcionalidade, so mostra na tela
const Time = (props) => {
  return (
    // renderização condicional eh assim
    props.colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: props.corSecundaria,
        }}
      >
        <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
        <div className="colaboradores">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corDeFundo={props.corPrimaria}
            />
          ))}
        </div>
      </section>
    )
  );
};
export default Time;
