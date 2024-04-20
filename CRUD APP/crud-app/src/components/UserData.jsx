import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
const UserData = () => {
  const data = useSelector((store) => store.users.users);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [modal, setModal] = useState(false);
  const handleHideModal = () => {
    setModal(false);
  };
  const handleshowModal = () => {
    setModal(true);
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  const getData = async () => {
    try {
      const data = await axios.get("http://localhost:5173/");
      //   const json = await data.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen   pt-10">
      <div className="w-[90%] my-0 mx-auto">
        <div onClick={handleshowModal} className="flex justify-center my-2">
          <button className="w-20  rounded-lg p-2 hover:bg-green-400 transition-all bg-green-500">AddUser</button>
        </div>
        {modal && (
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <form
              onSubmit={handleSubmit}
              action=""
              className="px-8 w-[500px] py-4 bg-sky-300 flex flex-col gap-3 justify-between rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center">
                <label className="w-[10%] font-bold" htmlFor="name">
                  Name:
                </label>
                <input
                  value={userData.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Enter Name"
                  className="w-[80%]  border-none outline-none px-4 py-2 rounded-lg"
                  type="text"
                  id="name"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="w-[10%] font-bold" htmlFor="email">
                  Email:
                </label>
                <input
                  value={userData.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Enter Email"
                  className="w-[80%] border-none outline-none px-4 py-2 rounded-lg"
                  type="text"
                  id="email"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="w-[10%] font-bold" htmlFor="phone">
                  Phone:
                </label>
                <input
                  value={userData.phone}
                  onChange={handleChange}
                  name="phone"
                  placeholder="Enter Phone"
                  className="w-[80%] border-none outline-none px-4 py-2 rounded-lg"
                  type="text"
                  id="phone"
                />
              </div>
              <div className="flex justify-between items-center">
                <label className="w-[10%] font-bold" htmlFor="address">
                  Address:
                </label>
                <input
                  onChange={handleChange}
                  value={userData.address}
                  name="address"
                  placeholder="Enter Address"
                  className="w-[80%] border-none outline-none px-4 py-2 rounded-lg"
                  type="text"
                  id="address"
                />
              </div>
              <div className="flex flex-row-reverse justify-between items-center">
                <button type="submit" className="px-3 py-2 rounded-lg bg-green-500">
                  Submit
                </button>
                <button onClick={handleHideModal} className="px-3 py-2 rounded-lg bg-red-500">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
        <table className="w-full table-fixed">
          <thead className="bg-gray-200">
            <tr className="table-header">
              <th className=" px-4 py-2 mx-2 text-center">Name</th>
              <th className=" px-4 py-2 mx-2 text-center">Phone</th>
              <th className=" px-4 py-2 mx-2 text-center">Email</th>
              <th className=" px-4 py-2 mx-2 text-center">Address</th>
              <th className=" px-4 py-2 mx-2 text-center">Update</th>
              <th className=" px-4 py-2 mx-2 text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b-2">
              <td className="px-4 py-2 text-center text-xs">Amith R Sulkahe</td>
              <td className="px-4 py-2 text-center text-xs">9206336568</td>
              <td className="px-4 py-2 text-center text-xs">amithsulakhe729@gmail.com</td>
              <td className="px-4 py-2 text-center text-xs">Simpigalli savanur</td>
              <td className="px-4 py-2  ">
                <button className="px-4 py-2 transition-all hover:bg-blue-400 bg-blue-500 text-white rounded">Update</button>
              </td>
              <td className="px-4 py-2 ">
                <button className="px-4 py-2 transition-all hover:bg-red-400 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border-b-2">
              <td className="px-4 py-2 text-center text-xs">Amith R Sulkahe</td>
              <td className="px-4 py-2 text-center text-xs">9206336568</td>
              <td className="px-4 py-2 text-center text-xs">amithsulakhe729@gmail.com</td>
              <td className="px-4 py-2 text-center text-xs">Simpigalli savanur</td>
              <td className="px-4 py-2  ">
                <button className="px-4 py-2 transition-all hover:bg-blue-400 bg-blue-500 text-white rounded">Update</button>
              </td>
              <td className="px-4 py-2 ">
                <button className="px-4 py-2 transition-all hover:bg-red-400 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border-b-2">
              <td className="px-4 py-2 text-center text-xs">Amith R Sulkahe</td>
              <td className="px-4 py-2 text-center text-xs">9206336568</td>
              <td className="px-4 py-2 text-center text-xs">amithsulakhe729@gmail.com</td>
              <td className="px-4 py-2 text-center text-xs">Simpigalli savanur</td>
              <td className="px-4 py-2  ">
                <button className="px-4 py-2 transition-all hover:bg-blue-400 bg-blue-500 text-white rounded">Update</button>
              </td>
              <td className="px-4 py-2 ">
                <button className="px-4 py-2 transition-all hover:bg-red-400 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
            <tr className="bg-white border-b-2 ">
              <td className="px-4 py-2 text-center text-xs">Amith R Sulkahe</td>
              <td className="px-4 py-2 text-center text-xs">9206336568</td>
              <td className="px-4 py-2 text-center text-xs">amithsulakhe729@gmail.com</td>
              <td className="px-4 py-2 text-center text-xs">Simpigalli savanur</td>
              <td className="px-4 py-2  ">
                <button className="px-4 py-2 transition-all hover:bg-blue-400 bg-blue-500 text-white rounded">Update</button>
              </td>
              <td className="px-4 py-2 ">
                <button className="px-4 py-2 transition-all hover:bg-red-400 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>{" "}
            <tr className="bg-white border-b-2">
              <td className="px-4 py-2 text-center text-xs">Amith R Sulkahe</td>
              <td className="px-4 py-2 text-center text-xs">9206336568</td>
              <td className="px-4 py-2 text-center text-xs">amithsulakhe729@gmail.com</td>
              <td className="px-4 py-2 text-center text-xs">Simpigalli savanur</td>
              <td className="px-4 py-2  ">
                <button className="px-4 py-2 transition-all hover:bg-blue-400 bg-blue-500 text-white rounded">Update</button>
              </td>
              <td className="px-4 py-2 ">
                <button className="px-4 py-2 transition-all hover:bg-red-400 bg-red-500 text-white rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;
