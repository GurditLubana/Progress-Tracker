// import React from 'react'
import EachLog from "./EachLog";
import { useEffect, useState } from "react";
import axios from "axios";

const PrevLog = () => {
  const [logList, setLogList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/');
        setLogList (response.data);
        console.log("This is response", logList);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [logList])

  return (
    <> 
    {logList.map((reportData, index) => (
        <div key={index}>
          {<EachLog data = {reportData}></EachLog>}
          
        </div>
      ))}
    </>
      

  )
  
 
};

export default PrevLog;
