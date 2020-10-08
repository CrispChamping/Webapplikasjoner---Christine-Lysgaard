import React from 'react';

const CompletedItem = ({ completed }) => (
  <tr>
    <td>{completed.title}</td>
    <td>{completed.description}</td>
  </tr>
);

export default CompletedItem;