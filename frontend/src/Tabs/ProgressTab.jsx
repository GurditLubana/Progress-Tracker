// import React from 'react'
import SubmitReport from "./Components/SubmitReport";
import PrevLog from "./Components/PrevLog";
import { useState } from "react";

const ProgressTab = () => {
  const [logList, setLogList] = useState([])

  function addPrevLogs(todaysLog){
    setLogList(currentLogList =>{return [
      ...currentLogList, {todaysLog}
    ]})
    console.log(logList)
  }
  return (
    <>
      <SubmitReport addLog={addPrevLogs}/>
      <PrevLog list = {logList}></PrevLog>
    </>
  );
};

export default ProgressTab;
