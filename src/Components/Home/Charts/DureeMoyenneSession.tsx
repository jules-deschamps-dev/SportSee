import React from "react";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Session } from "../../../Models/Sessions/Session";
import "./charts.css";

const DureeMoyenneCard: React.FC<{ data: Array<Session> }> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 50, right: 30, left: 20, bottom: 5 }}>
        <text x="16" y="32" width={30} textAnchor="left" dominantBaseline="top" fontSize="18" fontWeight="bold" 
          style={{ fill: '#ff8181' }}>
          Durée moyenne des sessions
        </text>
        <CartesianGrid strokeDasharray="0 3" />        
        <YAxis tickLine={false} hide={true} domain={['dataMin - 2', 'dataMax - 2']}/>
        
        <XAxis dataKey="jour" tickLine={false} axisLine={false} fontSize={16} tick={{fill: "#fff", opacity: ".5"}} />
        <Tooltip content={<CustomToolType />} cursor={false} />
        <Line type="bump" dataKey="duree" stroke="#fff" strokeWidth={2} activeDot={{/* stroke, strokeWidth, r */}} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

type PayloadItem = { value: number };
type CustomToolTypeProps = {
  payload?: PayloadItem[];
};

const CustomToolType = ({ payload }: CustomToolTypeProps): JSX.Element | null => {
  if ( payload && payload.length > 0) {
    const minutes = payload[0].value;
    return (
      <div className="tool-type">
        {minutes}min
      </div>
    );
  }
  return <div>Aucune donnée disponible</div>;
};


export default DureeMoyenneCard;