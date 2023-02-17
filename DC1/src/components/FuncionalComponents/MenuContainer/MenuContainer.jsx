import "./MenuContainerStyle.css";

export default function MenuComponent() {
  return (
    <div className="MenuFlex">
      <div className="MenuComponent">
        <ul>
          <li onClick={alertMessagge}>POLERAS</li>
          <li onClick={alertMessagge}>POLERONES</li>
          <li onClick={alertMessagge}>ZAPATILLAS</li>
          <li onClick={alertMessagge}>JOCKEYS</li>
        </ul>
      </div>
    </div>
  );
}

function alertMessagge() {
  alert("¡Pronto nuevas funciones!");
}
