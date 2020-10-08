import React from 'react';
import CompletedItem from './CompletedItem';

const CompletedList = ({ completed }) => (
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {completed &&
        completed.length > 0 &&
        completed.map((completedTodo, index) => (
          <CompletedItem key={index} completed={completedTodo} />
        ))}
    </tbody>
  </table>
);

export default CompletedList;
