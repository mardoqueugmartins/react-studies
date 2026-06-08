import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Mardoqueu", "Karina", "Damião", "Maria"]);

  const [users, setUsers] = useState([
    {id: 1, name: "Mardoqueu", age: 30},
    {id: 2, name: "Karina", age: 33},
    {id: 3, name: "Damião", age: 54},
    {id: 4, name: "Maria", age: 65},
  ]);

  const deleteRandon = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id));
  }
;
  return (
    <div>
        {/* Render sem Key */}
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {/*  Render com Key */}
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name} - {user.age} anos.</li>
        ))}
      </ul>
      {/* Previous State */}
      <button onClick={deleteRandon}>Delete Random User</button>
    </div>
  );
};

export default ListRender;
