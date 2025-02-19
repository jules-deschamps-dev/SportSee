import React from "react";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Activity } from "../../../Models/Sessions/Activity";

const ActivityChart: React.FC<{ data: Array<Activity> }> = ({ data }) => {
  return (
    // ajouter balise ResponsiveContainer
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} barGap={12}>
        <text x="16" y="16" textAnchor="left" dominantBaseline="top" fontSize="18" fontWeight="bold">
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="0 3"/>

        <XAxis dataKey="jour"  tickFormatter={(jour) => new Date(jour).toLocaleDateString("fr-FR", { day: "2-digit" })} />
        <YAxis  orientation="right" yAxisId="masse" tickLine={false}  domain={['dataMin - 1', 'dataMax + 1']}  tickCount={3} />
        <YAxis orientation="left" yAxisId="calorie"  tickLine={false}    hide={true}/>

        <Legend
						verticalAlign="top"
						align="right"
						iconType="circle"
						height={80}
					/>
        
        <Bar yAxisId="masse" name="Poids (kg)" dataKey="masse" fill="#282D30" barSize={12} radius={[999, 999, 0, 0]} />
        <Bar yAxisId="calorie" name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" barSize={12} radius={[999, 999, 0, 0]} />
       
        
        <Tooltip content={<CustomToolType />} cursor={false} />
        
      </BarChart>
    </ResponsiveContainer>
  );
};


type PayloadItem = { value: number };
type CustomToolTypeProps = {
  payload?: PayloadItem[];
};

const CustomToolType = ({ payload }: CustomToolTypeProps): JSX.Element | null => {
  if ( payload && payload.length > 0) {
    const poids = payload[0].value;
    const calories = payload[1].value;
    return (
      <div className="tool-type tool-type-activity">
        {poids}kg<br />
        {calories}kcal
      </div>
    );
  }
  return <div>Aucune donnée disponible</div>;
};



export default ActivityChart;
/*
<XAxis dataKey="jour"  tickFormatter={(jour) => new Date(jour).toLocaleDateString("fr-FR", { day: "2-digit" })} />
<YAxis orientation="right" yAxisId="masse" tickLine={false} axisLine={false} dataKey="masse" domain={['dataMin ', 'dataMax + 100']} tickCount={3} tick={{fontSize : 14}} />
<YAxis orientation="left" tickLine={false} axisLine={false} dataKey="calories" type="number" domain={['dataMin - 160', 'dataMax + 250']} hide={true}/>
*/