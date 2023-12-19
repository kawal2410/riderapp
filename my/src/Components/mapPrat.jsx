import React, { useState } from "react";
const Anmol = () => {
  let x = [
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      completed: true,
    },
    {
      userId: 1,
      id: 11,
      title: "vero rerum temporibus dolor",
      completed: true,
    },
    {
      userId: 1,
      id: 12,
      title: "ipsa repellendus fugit nisi",
      completed: true,
    },
    {
      userId: 1,
      id: 13,
      title: "et doloremque nulla",
      completed: false,
    },
    {
      userId: 1,
      id: 14,
      title: "repellendus sunt dolores architecto voluptatum",
      completed: true,
    },
    {
      userId: 1,
      id: 15,
      title: "ab voluptatum amet voluptas",
      completed: true,
    },
    {
      userId: 1,
      id: 16,
      title: "accusamus eos facilis sint et aut voluptatem",
      completed: true,
    },
    {
      userId: 1,
      id: 17,
      title: "quo laboriosam deleniti aut qui",
      completed: true,
    },
    {
      userId: 1,
      id: 18,
      title: "dolorum est consequatur ea mollitia in culpa",
      completed: false,
    },
    {
      userId: 1,
      id: 19,
      title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
      completed: true,
    },
    {
      userId: 1,
      id: 20,
      title: "ullam nobis libero sapiente ad optio sint",
      completed: true,
    },
    {
      userId: 2,
      id: 21,
      title: "suscipit repellat esse quibusdam voluptatem incidunt",
      completed: false,
    },
  ];

  let y = x.filter((n) => {
    if (n.completed === true) {
      return n;
    }
  });

  console.log(y);

  let z = x.filter((n) => {
    if (n.completed === false) {
      return n;
    }
  });

  console.log(z);

  const [first, setfirst] = useState(x);
  // console.log("good", first);

  const [second, setsecond] = useState(y);

  const [third, setthird] = useState(z);

  const myfunction = () => {
    setfirst(first.slice(0, 5));
  };

  console.log(second[second?.length - 5]?.id, ">>>>>>>", second?.length);
  const myfunction2 = () => {
    setsecond(second.slice(second?.length - 5, second?.length));
  };
  console.log(myfunction2);

  const myfunction3 = () => {
    setthird(third.slice(2, 7));
  };

  return (
    <div className=" flex gap-4  mt-8">
      <div className=" w-[50%] h-[50vh] border bg-pink-300   overflow-y-scroll  ">
        {first?.map((n) => (
          <div className=" ">{n?.id} </div>
        ))}
      </div>

      <div className=" w-[50%] h-[50vh] border bg-blue-300 overflow-y-scroll   ">
        {second?.map((n) => (
          <div className=" ">{n?.id} </div>
        ))}
      </div>

      <div className="  w-[50%] h-[50vh] border bg-red-300 overflow-y-scroll  ">
        {third?.map((n) => (
          <div className=" ">{n?.id} </div>
        ))}
      </div>

      <div className=" flex gap-4  ">
        <div className=" mt-[350px]  px-[50px] py-[20px]  border-2 bg-red-500 ">
          <button onClick={myfunction}>click</button>
        </div>

        <div className=" mt-[350px]  px-[50px] py-[20px]  border-2 bg-green-500 ">
          <button onClick={myfunction2}>clickme</button>
        </div>

        <div className=" mt-[350px]  px-[50px] py-[20px] border-2 bg-orange-500 ">
          <button onClick={myfunction3}>click</button>
        </div>
      </div>
    </div>
  );
};

export default Anmol;
