import { createSignal } from "solid-js";

function Rating({ ratingState }) {
  const [selected, setSelected] = createSignal(8);

  const handleSelect = (e) => {
    const newValue = +e.currentTarget.value;
    setSelected(newValue);
    ratingState(newValue);
  };

  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <li>
          <input
            type="radio"
            id={`num${num}`}
            name="rating"
            value={num}
            onChange={handleSelect}
            checked={selected() === num}
          />
          <label for={`num${num}`}>{num}</label>
        </li>
      ))}
    </ul>
  );
}

export default Rating;