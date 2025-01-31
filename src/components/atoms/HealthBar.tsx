export const HealthBar = ({ hp }: { hp: number }) => {
    return <div style={{ width: `${hp}%`, backgroundColor: 'red', height: '10px' }} />;
  };