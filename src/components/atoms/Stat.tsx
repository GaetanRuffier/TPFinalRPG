interface StatProps {
    label: string;
    value: number;
  }
  
  const Stat: React.FC<StatProps> = ({ label, value }) => (
    <div>
      <span>{label}:</span>
      <span>{value}</span>
    </div>
  );
  
  export default Stat;
  