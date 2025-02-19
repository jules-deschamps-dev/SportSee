import {
  Customized,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const ChartRadial: React.FC<{ data: any }> = ({ data }) => {
  const chartData = [
    {
      name: "18-24",
      uv: data * 100,
      fill: "#FF0000",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      
      <RadialBarChart
        innerRadius="70%"
        outerRadius="80%"
        data={chartData}
        startAngle={180}
        endAngle={180 - data * 360}
      >
        <RadialBar
          dataKey="uv"
        />
        <text
          x="16"
          y="32"
          width={30}
          textAnchor="left"
          dominantBaseline="top"
          fontSize="18"
          fontWeight="bold"
        >
          Score
        </text>
        <text
          x="45%"
          y="42%"
          fontSize="18"
          fontWeight="bold"
          width={100}
          style={{ textAlign: 'left', width: '100%', fontWeight: 'bold', fill: '#777' }}
        >
          {data * 100} %  
        </text>
        <text
          x="41%"
          y="50%"
          textAnchor="left"
          fontSize="18"
          fontWeight="bold"
        >
          de votre
        </text>
        <text
          x="42%"
          y="58%"
          textAnchor="left"
          fontSize="18"
          fontWeight="bold"
        >
          objectif
        </text>
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ChartRadial;
