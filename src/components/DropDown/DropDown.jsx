import "./Dropdown.css";

export default function Dropdown({ setSelected }) {
  return (
   <div className="drop-down">
     <div className="dropdown-category">
      <h2 className="dropdown-title">Choose Category 🕰️</h2>

      <select className="select" onChange={(e) => setSelected(e.target.value)}>
        <option value="">-- Select Category --</option>
        <option value="male">Male </option>
        <option value="female">Female </option>
        <option value="unisex">Unisex Watches</option>
      </select>
    </div>
   </div>
  );
}

