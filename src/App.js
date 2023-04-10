import logo from './images/logo.svg';
import './App.scss'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  BarElement,
  CategoryScale, 
  LinearScale, 
  Tooltip, 
  Legend
)
function App() {
  const data = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label:'',
        data:[17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
        backgroundColor: ["#ec775f","#ec775f","#76b5bc","#ec775f","#ec775f","#ec775f","#ec775f"],
        borderRadius: 4
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
          display: false,
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        display: false,
        grid: {
          display: false
        }
      }
    }
  }

  return (
    <article className='expense-card'>
      <section className='ec-header'>
        <div className='ec-balance'>
          <p>My balance</p>
          <h1>$921.48</h1>
        </div>
        <img src={logo} alt="logo" />
      </section>
      <section className='ec-main'>
        <section className='ec-chart'>
          <strong>Spending - Last 7 days</strong>
          <Bar 
            data={data} options={options}>
          </Bar>
        </section>
        <hr></hr>
        <section className='ec-total'>
          <div className='ec-total-month'>
            <p>Total this month</p>
            <strong>$478.33</strong>
          </div>
          <div className='ec-total-diff'>
            <strong>+2.4%</strong>
            <p>from last month</p>
          </div>
        </section>
      </section>
    </article>
  );
}

export default App;
