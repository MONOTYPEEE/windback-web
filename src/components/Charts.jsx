import styled from '@emotion/styled'
import { ResponsiveContainer, AreaChart, Area, Tooltip, BarChart, Bar, LabelList, Cell } from 'recharts'

/**
 * Daily Area Graph
 * @param {Object} props.data 
 * @returns 
 */
export function ChartByTime({data}){
    return(
        <ChartContainer>
            <ResponsiveContainer width='100%' height={200}>
                <AreaChart data={data} width={500} height={200}>
                    <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ACE54F" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#ACE54F" stopOpacity={0}/>
                        </linearGradient>
                    </defs>

                    <Tooltip content={<TimeTooltip/>}/>
                    <Area dataKey='value' type='natural' stroke='#ACE54F' strokeWidth={4} fill="url(#gradient)"/>
                </AreaChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}

/**
 * Weekly Bar Graph
 * @param {Object} props.data 
 * @returns 
 */
export function ChartByDay({data}){
    const maxValue = Math.max(...data.map(d=>d.count))
    return(
        <ChartContainer>
            <ResponsiveContainer width='100%' height={200}>
                <BarChart data={data} margin={{bottom: 20}}>
                    <Tooltip content={<DayTooltip/>}/>
                    <Bar dataKey='count'>
                        <LabelList position='bottom' dataKey='day'/>
                        {data.map((d, i)=> <Cell key={i} fill={maxValue === d.count ? '#ACE54F' : '#ACE54F40'}/> )}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
    )
}

function TimeTooltip({active, payload, ...props}){
    if(active){
        return(
            <TooltipBackground>
                <p>{props.label}시</p>
                <p>{payload[0].value}건</p>
            </TooltipBackground>
        )
    }
    else return null
}

function DayTooltip({active, payload}){
    if(active){
        return(
            <TooltipBackground>
                <p>{payload[0].payload.day}요일</p>
                <p>{payload[0].payload.count}건</p>
            </TooltipBackground>
        )
    }
    else return null
}


const TooltipBackground = styled.div`
    padding: 8px;
    background: #00000088;
    backdrop-filter: blur(4px);
    border: none;
    border-radius: 8px;
`

const ChartContainer = styled.div`
    width: 100%;
    background: #ffffff0D;
    border-radius: 16px;
    padding: 8px;
`