import "./styles.css";
import "./sty.scss";
import { useState, useEffect } from "react";
import axios from "axios";





export default function Form(props) {
  const [formState, setFormState] = useState({
    firstName: props.firstname,
    lastName: props.lastname,
    gender: props.gender,
    weight: props.weight,
    condition: props.condition
  });
  const [timer, setTimer] = useState(40);


  
function sendData(){
  console.log("HI");
  axios({
    method: "post",
    url: "http://localhost:8080",
    data: {
      firstName: formState.firstName,
      lastName: formState.lastName,
      gender: formState.gender,
      weight: formState.weight,
      condition: formState.condition
    },
  }).then((res) => alert("informations saved successfully"));
} 




  useEffect(() => {
    let interval = null;
    if (timer !== 0) {
      interval = setInterval(() => {
        setTimer((seconds) => seconds - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval);
      setFormState({
        firstName: props.firstname,
        lastName: props.lastname,
        gender: props.gender,
        weight: props.weight,
        condition: props.condition
      });
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="App">
      <h1>Health Survey</h1>

      <h1 className="time">{timer}s</h1>
      <form>
        <label>First Name:</label>
        <input
          id="firstName"
          type="text"
          value={formState.firstName}
          onChange={(e) =>
            setFormState({ ...formState, firstName: e.target.value })
          }
        ></input>
        <br></br>
        <br></br>
        <label>Last Name:</label>
        <input
          id="lastName"
          type="text"
          value={formState.lastName}
          onChange={(e) =>
            setFormState({ ...formState, lastName: e.target.value })
          }
        ></input>
        <br></br>
        <br></br>
      </form>
      <form>
        <label>
          Male:
          <input
            type="radio"
            name="Gender"
            value={formState.gender}
            onChange={(e) => setFormState({ ...formState, gender: "Male" })}
          />
        </label>
        <label>
          Female:
          <input
            type="radio"
            name="Gender"
            value={formState.gender}
            onChange={(e) => setFormState({ ...formState, gender: "Female" })}
          />
          <br></br>
          <br></br>
        </label>
      </form>
      <form>
        <label>
          Weight:
          <input
            id="weight"
            type="text"
            name="weight"
            value={formState.weight}
            onChange={(e) =>
              setFormState({ ...formState, weight: e.target.value })
            }
          />
        </label>
        <br></br>
        <br></br>
      </form>
      <form>
        <label>Pre-existing conditions:</label>
        <input
          list="browsers"
          value={formState.condition}
          onChange={(e) =>
            setFormState({ ...formState, condition: e.target.value })
          }
        />
        <datalist id="browsers">
          <option value="Blood pressure" />
          <option value="High sugar " />
          <option value="Diabetes" />
          <option value="Cancer" />
          <option value="Dementia" />
        </datalist>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <nav>
        <ul>
          <li>
            <a href="#">Mail</a>
          </li>
          <li>
            <a href="#">City</a>
          </li>
          <li>
            <a href="#">Postal Code</a>
          </li>
        </ul>
      </nav>
      <button onClick={sendData}>Submit</button>
      <h5> Omid afroozeh 9728173</h5>
    </div>
  );
}
