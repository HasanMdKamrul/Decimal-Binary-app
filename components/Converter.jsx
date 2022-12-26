import { useState } from "react";

const Converter = () => {
  const [binary, setBinary] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = +e.target.searchboxone.value;
    let bin = 0;
    const binaryArray = [];

    let rem,
      i = 1,
      step = 1;

    while (x != 0) {
      rem = x % 2;
      console.log(
        `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(
          x / 2
        )}`
      );

      binaryArray.push(rem);

      x = parseInt(x / 2);
      bin = bin + rem * i;
      i = i * 10;
    }

    setBinary(binaryArray.reverse());
  };

  console.log(binary);

  return (
    <div>
      <label className="text-3xl font-extrabold" htmlFor="Before">
        Before Condition
      </label>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          name="searchboxone"
          type="text"
          placeholder="Search Before condition ..."
          className="input input-bordered w-full max-w-xs"
        />
        <button type="submit" className="btn ml-2">
          Convert
        </button>
      </form>
      <div className="mt-5">
        {binary.map((num, index) => (
          <button key={index} className="btn btn-outline mr-2">
            {num}
          </button>
        ))}

        <div>Binary Count : {binary.length}</div>
      </div>
    </div>
  );
};

export default Converter;
