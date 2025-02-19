import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

const ChartRadar: React.FC<{ data: Array<Performance> }> = ({ data }) => {

  const formatTick = (value: string) => { 
    if (value == "cardio") return "Cardio"; 
    if (value == "energy") return "Energie"; 
    if (value == "endurance") return "Endurance"; 
    if (value == "strength") return "Force"; 
    if (value == "speed") return "Vitesse"; 
    if (value == "intensity") return "Intensité"; 
    return ""
   }
   
  data = [...data].reverse();


  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} data={data}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis dataKey="subject" stroke="#FFF" tickLine={false} tickFormatter={formatTick}  tickSize={25}/>
        <Radar
          dataKey="value"
          fill="#FF0000"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default ChartRadar;
