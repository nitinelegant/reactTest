import React, { useEffect, useState } from "react";
import { fetch1__Post } from "../services/index";

const Test2 = () => {
  const [postArr, setPostArr] = useState([]);
  useEffect(() => {
    fetch1__Post().then((response) => {
      setPostArr([response.data]);
    });
  }, []);
  return (
    <div>
      {postArr.map((post) => (
        <li key={post.id}>
          {post.title}
         
        </li>
      ))}
    </div>
  );
};

export default Test2;
