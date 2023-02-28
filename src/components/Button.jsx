import "../assets/styles/customStyles.css";

function Button({ file }) {
  return (
    <a
      download=""
      href={file}
      className="block p-2 text-white font-semibold rounded-lg text-center button"
    >
      Descargar
    </a>
  );
}

export default Button;
