const Grid = () => {
  return (
    <div
      className=" grid grid-cols-1 
        lg:grid-cols-2 gap-5 h-[500px] w-full border-2 mt-[20px] p-[70px] bg-red-400 `sm`"
    >
      {/* 1 */}
      <div className=" h-[170px] w-[350px] border-2  rounded-lg bg-white">
        <div className=" flex gap-5  ml-[30px] mt-[20px]">
          <p className="  font-thin  text-base">Jane Cooper</p>
          <button className="h-[25px] w-[80px] border-2 rounded-full bg-green-100 flex  justify-center item-center">
            Admin
          </button>
        </div>
        <p className="ml-[30px]">Regional paradigm technical</p>

        <div className="w-[50px] h-[50px]  ml-[280px]  mt-[-50px] ">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            className="rounded-full"
          />
        </div>

        <div className=" flex mt-[50px]">
          <div className=" flex   justify-center items-center gap-5  h-[40px] w-[175px]  border-r-2 border-t-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <button className="font-semibold  ">Email</button>
          </div>

          <div className="flex justify-center items-center gap-5 h-[40px] w-[175px] border-t-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>

            <button className="font-semibold  ">Call</button>
          </div>
        </div>
      </div>

      {/* 2 */}
      <div className="h-[170px] w-[350px] border-2  rounded-lg  bg-white">
        <div className=" flex gap-5  ml-[30px] mt-[20px]">
          <p className="  font-thin text-base">Jenny Wilson</p>
          <button className="h-[25px] w-[80px] border-2 rounded-full bg-green-100 flex  justify-center item-center">
            Admin
          </button>
        </div>
        <p className="ml-[30px]">Central Security Manager</p>

        <div className="w-[50px] h-[50px]  ml-[280px]  mt-[-50px] ">
          <img
            src="https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            className="rounded-full"
          />
        </div>

        <div className=" flex mt-[50px]">
          <div className=" flex   justify-center items-center gap-5  h-[40px] w-[175px]  border-r-2 border-t-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <button className="font-semibold  ">Email</button>
          </div>

          <div className="flex justify-center items-center gap-5 h-[40px] w-[175px] border-t-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>

            <button className="font-semibold ">Call</button>
          </div>
        </div>
      </div>

      {/* 3  */}

      <div className="h-[170px] w-[350px] border-2   rounded-lg  bg-white">
        <div className=" flex gap-5  ml-[30px] mt-[20px]">
          <p className=" font-thin text-base"> Cody Fisher</p>
          <button className="h-[25px] w-[80px] border-2 rounded-full bg-green-100 flex  justify-center item-center">
            Admin
          </button>
        </div>
        <p className="ml-[30px]">Product Directives Officer</p>

        <div className="w-[50px] h-[50px]  ml-[280px]  mt-[-50px] ">
          <img
            src=" https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            className="rounded-full"
          />
        </div>

        <div className=" flex mt-[50px]">
          <div className=" flex   justify-center items-center gap-5  h-[40px] w-[175px]  border-r-2 border-t-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <button className="font-semibold  ">Email</button>
          </div>

          <div className="flex justify-center items-center gap-5 h-[40px] w-[175px] border-t-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>

            <button className="font-semibold ">Call</button>
          </div>
        </div>
      </div>

      {/* 4 */}

      <div className="h-[170px] w-[350px] border-2   rounded-lg   bg-white">
        <div className=" flex gap-5  ml-[30px] mt-[20px]">
          <p className=" font-thin text-base">Kristin Watson</p>
          <button className="h-[25px] w-[80px] border-2 rounded-full bg-green-100 flex  justify-center item-center">
            Admin
          </button>
        </div>
        <p className="ml-[30px]">Lead Implementation Liaison</p>

        <div className="w-[50px] h-[50px]  ml-[280px]  mt-[-50px] ">
          <img
            src=" https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            className="rounded-full"
          />
        </div>

        <div className=" flex mt-[50px]">
          <div className=" flex   justify-center items-center gap-5  h-[40px] w-[175px]  border-r-2 border-t-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <button className="font-semibold  ">Email</button>
          </div>

          <div className="flex justify-center items-center gap-5 h-[40px] w-[175px] border-t-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>

            <button className="font-semibold ">Call</button>
          </div>
        </div>
      </div>

      {/* 5 */}
      <div className="h-[170px] w-[350px] border-2   rounded-lg   bg-white">
        <div className=" flex gap-5  ml-[30px] mt-[20px]">
          <p className=" font-thin text-base"> Esther Howard</p>
          <button className="h-[25px] w-[80px] border-2 rounded-full bg-green-100 flex  justify-center item-center">
            Admin
          </button>
        </div>
        <p className="ml-[30px]">Forward Response Developer</p>

        <div className="w-[50px] h-[50px]  ml-[280px]  mt-[-50px] ">
          <img
            src=" https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            className="rounded-full"
          />
        </div>

        <div className=" flex mt-[50px]">
          <div className=" flex   justify-center items-center gap-5  h-[40px] w-[175px]  border-r-2 border-t-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <button className="font-semibold  ">Email</button>
          </div>

          <div className="flex justify-center items-center gap-5 h-[40px] w-[175px] border-t-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>

            <button className="font-semibold ">Call</button>
          </div>
        </div>
      </div>

      {/* 6 */}

      <div className="h-[170px] w-[350px] border-2   rounded-lg  bg-white">
        <div className=" flex gap-5  ml-[30px] mt-[20px]">
          <p className=" font-thin text-base">Cameron Williamson</p>
          <button className="h-[25px] w-[80px] border-2 rounded-full bg-green-100 flex  justify-center item-center">
            Admin
          </button>
        </div>
        <p className="ml-[30px]"> Internal Applications Engineer</p>

        <div className="w-[50px] h-[50px]  ml-[280px]  mt-[-50px] ">
          <img
            src=" https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            className="rounded-full"
          />
        </div>

        <div className=" flex mt-[50px]">
          <div className=" flex   justify-center items-center gap-5  h-[40px] w-[175px]  border-r-2 border-t-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
            <button className="font-semibold  ">Email</button>
          </div>

          <div className="flex justify-center items-center gap-5 h-[40px] w-[175px] border-t-2  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              class="bi bi-telephone-fill"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>

            <button className="font-semibold ">Call</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Grid;
