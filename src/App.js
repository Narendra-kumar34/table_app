import './App.css';
import {useState} from 'react';

const data = 
[

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

]

function App() {
  const [rows, setRows] = useState(data);

  const handleDateSort = () => {
    const newRows = [...rows].sort((a, b) => {
      let date1 = new Date(a.date);
      let date2 = new Date(b.date);
      if(date1.getTime() === date2.getTime()){
        return b.views - a.views;
      }
      return date2.getTime() - date1.getTime();
    });
    setRows(newRows);
  };

  const handleViewSort = () => {
    const newRows = [...rows].sort((a, b) => {
      if (a.views === b.views) {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        return date2.getTime() - date1.getTime();
      }
      return b.views - a.views;
    });
    setRows(newRows);
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={() => handleDateSort()}>Sort by Date</button>
      <button onClick={() => handleViewSort()}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row,idx) => (
            <tr key={idx}>
              <td>{row.date}</td>
              <td>{row.views}</td>
              <td>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
