import userManual from "./assets/Manual de usuario - Checkindeck.pdf";
import userManualImg from "./assets/img/user_manual.png";
import statsTemplate from "./assets/Plantilla de Estadísticas - Checkindeck.xlsx";
import statsTemplateImg from "./assets/img/stats_template.png";
import Button from "./components/Button";
import "./assets/styles/customStyles.css";

function App() {
  return (
    <div className="h-screen">
      <div
        style={{ backgroundColor: "var(--first-color)" }}
        className="h-1/4 flex justify-center items-center"
      >
        <h1 className="text-white font-semibold text-5xl">
          Recursos para <span className="font-bold">Checkindeck</span>
        </h1>
      </div>
      <div className="h-3/4 grid grid-cols-2">
        <div className="shadow border-t border-gray-200 flex flex-col justify-between items-center">
          <h2 className="mt-3 text-3xl text-gray-800 font-semibold">
            Manual de usuario
          </h2>
          <img
            src={userManualImg}
            alt="Manual de usuario de Checkindeck"
            className="p-5 w-6/12 rounded-lg shadow-lg"
          />
          <p className="text-center px-5 my-1">
            Si es la primera vez que utiliza Checkindeck, este documento le
            servirá para entender cómo funciona cada apartado del sistema.
          </p>
          <div className="mb-5 w-6/12">
            <Button file={userManual} />
          </div>
        </div>
        <div className="shadow border-t border-gray-200 flex flex-col justify-between items-center">
          <h2 className="mt-3 text-3xl text-gray-800 font-semibold">
            Plantilla para estadísticas
          </h2>
          <img
            src={statsTemplateImg}
            alt="Manual de usuario de Checkindeck"
            className="p-5 w-8/12 rounded-lg shadow-lg"
          />
          <p className="text-center px-5">
            Si desea que Checkindeck genere estadísticas de su negocio a partir
            de sus datos almacenados, es requisito descargar esta plantilla de
            Microsoft Excel y guardarla en una ubicación que pueda recordar. El
            sistema se basa en ella para crear un nuevo archivo con los datos
            del momento.
          </p>
          <div className="mb-5 w-6/12">
            <Button file={statsTemplate} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
