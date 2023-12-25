import SubmitReport from "./Components/SubmitReport";
import PrevLog from "./Components/PrevLog";
// import { useEffect,useState } from "react";
import { useEffect} from "react";
import axios from "axios";

function ProgressTab(){


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/');
        const result = response.data;
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [])


  return (
    <>
      <SubmitReport />
      <PrevLog></PrevLog>
    </>
  );
}

export default ProgressTab;
