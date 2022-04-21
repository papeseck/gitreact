import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          votre adresse mail
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <label for="exampleFormControlInput1" class="form-label">
          Prenom
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Prenom"
        />
        <label for="exampleFormControlInput1" class="form-label">
          Nom
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="nom"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Entrer votre texte
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
}

export default App;
