import UsageChart from "./components/UsageChart";

function App() {
  const data = [
    { day: "Mon", hours: 5 },
    { day: "Tue", hours: 6 },
    { day: "Wed", hours: 4 },
    { day: "Thu", hours: 7 },
    { day: "Fri", hours: 3 },
  ];

  const total = data.reduce((sum, d) => sum + d.hours, 0);

  return (
  <div className="container">
    <h1>Digital Wellbeing Dashboard</h1>

    <div className="card">
      <h2>Total Screen Time</h2>
      <p>{total} hrs</p>
    </div>

    <div className="card">
      <h2>Activity Insights</h2>
      <ul style={{ lineHeight: "1.8" }}>
        <li>📱 Highest usage day: Thu (7 hrs)</li>
        <li>📉 Lowest usage day: Fri (3 hrs)</li>
        <li>⚠️ Average daily screen time: 5 hrs</li>
      </ul>
    </div>

    <div className="card">
      <UsageChart data={data} />
    </div>

    <div className="card">
      <h2>Wellbeing Reminder</h2>
      <p>
        ⏰ You’ve exceeded 5 hours of screen time today.
        Take a 10-minute break to relax your eyes.
      </p>
    </div>
  </div>
);


}


export default App;
