import { Bar } from 'react-chartjs-2'

const ReportChart = ({ data: { total, byMe } }) => {
  return (
    <Bar
      data={{
        labels: total.map(c => c.month),
        datasets: [
          {
            label: 'Número de Reports',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,255,112,0.4)',
            borderColor: 'rgba(75,255,112,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,255,112,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,255,112,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: total.map(c => c.count)
          },
          {
            label: 'Resolvidos por você',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: byMe.map(c => c.count)
          }
        ]
      }}
    />
  )
}

export default ReportChart
