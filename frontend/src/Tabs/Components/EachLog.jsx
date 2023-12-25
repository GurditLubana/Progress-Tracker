import Accordion from "react-bootstrap/Accordion";
import PropTypes from "prop-types";
// import React from 'react';

const EachLog = ({ data }) => {
  function formatDate(data) {
    const originalDate = data.Date;
    const formattedDate = new Date(originalDate).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return formattedDate;
  }
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{formatDate(data)}</Accordion.Header>
        <Accordion.Body>{data.Report}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

EachLog.propTypes = {
  data: PropTypes.array.isRequired,
};

export default EachLog;
