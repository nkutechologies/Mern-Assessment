import React, { useEffect, useState } from "react";
import Button from "../Button";
import axios from "axios";
import { API_RESPONSE_TYPE } from "../../Types";

const Table = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5002/item/GetAll");
      console.log(response.data.allItems);
      setData(response.data.allItems);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full rounded-md p-8 bg-black bg-opacity-70 border border-white">
      <table className=" w-full">
        <tr className="text-white font-font-semibold border-b border-white my-4">
          <th>ASSETS</th>
          <th>LAST TRADE</th>
          <th>24H%</th>
          <th>24H CHANGE</th>
          <th>MORE</th>
        </tr>
        {data?.map((item: API_RESPONSE_TYPE) => {
          return (
            <>
              <tr className="text-white font-medium text-center">
                <td className="py-4">{item.assets}</td>
                <td>{item.last_trade}</td>
                <td
                  className={
                    item.H_24.startsWith("-")
                      ? "text-red-500"
                      : item.H_24.startsWith("+")
                      ? "text-green-500"
                      : ""
                  }
                >
                  {item.H_24}
                </td>
                <td
                  className={
                    item.H_24.startsWith("-")
                      ? "text-red-500"
                      : item.H_24.startsWith("+")
                      ? "text-green-500"
                      : ""
                  }
                >
                  {item.change}
                </td>
                <td>
                  <Button className="bg-green-500" padding="p-2" text="Trade" />
                </td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
