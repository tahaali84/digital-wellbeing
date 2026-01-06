function UsageCard({ data }) {
  const total = data.reduce((sum, d) => sum + d.hours, 0);

  return <h2>Total Screen Time: {total} hrs</h2>;
}

export default UsageCard;
