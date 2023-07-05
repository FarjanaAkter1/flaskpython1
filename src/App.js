import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data.members);
        console.log(data);
      });
  }, []);

  return (
    <div>
      {data.length === 0 ? (
        <p>loading..</p>
      ) : (
        data.map((member, i) => <p key={i}>{member}</p>)
      )}
    </div>
  );
}
// jkjkj
export default App;
