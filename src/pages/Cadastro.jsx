import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/css/Cadastro.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {  useState } from "react";
import axios from "axios";
function Cadastro() {

  const [clientname, setClientname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function save(event) {
      event.preventDefault();
      try {
        await axios.post("http://localhost:8085/api/v1/client/save", {
        clentname: clientname,
        email: email,
        password: password,
        });
        alert("Cadastro criado com sucesso!");
      } catch (err) {
        alert(err);
      }
    }

  return (
    <div>
      <NavBar />
      <div>
    <div class="container mt-4" >
    <div class="card-c">
            <h3 class="titulo-c" >Cadastro</h3>
    
    <form>
        <div class="form-group-c">
          <input type="text"  class="form-control-c" id="clientname" placeholder="Enter Name"
          
          value={clientname}
          onChange={(event) => {
            setClientname(event.target.value);
          }}
          />
        </div>
        <div class="form-group-c">
          <input type="email"  class="form-control-c" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>
        <div class="form-group-c">
            <input type="password"  class="form-control-c" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
        <button type="submit" class="btn btn-c btn-primary mt-4" onClick={save} >Cadastrar</button>
       
      </form>
    </div>
    </div>
     </div>
      <Footer />
    </div>
  );
};

export default Cadastro;