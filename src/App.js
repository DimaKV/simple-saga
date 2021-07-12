import { useDispatch, useSelector } from "react-redux";
import { setData } from "./redux/reducers/actions";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div>
            <strong>People:</strong>
          </div>
          {Array.isArray(store.people) &&
            store.people.map((person) => (
              <div key={`${person.birth_year}${person.mass}`}>
                {person.name}
              </div>
            ))}
        </div>
        <div>
          <div>
            <strong>Planets:</strong>
            {Array.isArray(store.planets) &&
              store.planets.map((planet) => (
                <div key={`${planet.rotation_period}${planet.orbital_period}`}>
                  {planet.name}
                </div>
              ))}
          </div>
        </div>
      </div>
      <button onClick={() => dispatch(setData())}>Get Data</button>
    </div>
  );
}

export default App;
