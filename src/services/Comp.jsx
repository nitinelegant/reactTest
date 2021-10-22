import React, { useEffect, useState } from "react";
import { fetch__Posts, delete_Post } from "../services/index";

const Comp = () => {
  const [postArr, setPostArr] = useState("");
  console.log("child main console");
  useEffect(() => {
    console.log("child render useeffect");
    fetchData();
  });
  const fetchData = async () => {
    let fetchRes = fetch("https://jsonplaceholder.typicode.com/photos");
    await fetchRes
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={postArr}
        onChange={(event) => setPostArr(event.target.value)}
      />
      <h2>hello child comp</h2>
    </div>
  );
};

export default Comp;
