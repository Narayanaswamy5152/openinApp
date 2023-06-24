import {BsTag, BsChevronCompactDown} from 'react-icons/bs'
import {
  AiOutlineDashboard,
  AiOutlineSchedule,
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLike,
} from 'react-icons/ai'

import {
  PieChart,
  Pie,
  Legend,
  Cell,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts'

import {TbCalendarEvent} from 'react-icons/tb'

import {IoMdNotificationsOutline} from 'react-icons/io'

import {PiUsersBold} from 'react-icons/pi'

import './index.css'

const data = [
  {
    age: 28,
    count: 53,
  },
  {
    age: 40,
    count: 27,
  },
  {
    age: 50,
    count: 20,
  },
]
const activityData = [
  {
    name: 'Week 1',
    Guest: 4000,
    User: 2400,
    amt: 2400,
  },
  {
    name: 'Week 2',
    Guest: 3000,
    User: 1398,
    amt: 2210,
  },
  {
    name: 'Week 3',
    Guest: 2000,
    User: 9800,
    amt: 2290,
  },
  {
    name: 'Week 4',
    Guest: 2780,
    User: 3908,
    amt: 2000,
  },
  {
    name: 'Week 5',
    Guest: 1890,
    User: 4800,
    amt: 2181,
  },
  {
    name: 'Week 6',
    Guest: 2390,
    User: 3800,
    amt: 2500,
  },
  {
    name: 'Week 7',
    Guest: 3490,
    User: 4300,
    amt: 2100,
  },
]

const Home = () => (
  <>
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Board.</h1>

        <p className="main-description">
          <AiOutlineDashboard className="dash-img" />
          Dashbord
        </p>
        <p className="home-description">
          <BsTag className="dash-img" />
          Transactions
        </p>
        <p className="home-description">
          <AiOutlineSchedule className="dash-img" />
          Schedules
        </p>
        <p className="home-description">
          <AiOutlineUser className="dash-img" />
          Users
        </p>
        <p className="home-description">
          <AiOutlineSetting className="dash-img" />
          Settings
        </p>
        <p className="help-description">Help</p>
        <p className="contact-description">Contact Us</p>
      </div>
      <div className="dashboard-container">
        <div className="header-container">
          <h1 className="dashboard-heading">Dashboard</h1>
          <div className="input-container">
            <div className="right-container">
              <input type="search" className="input" placeholder="Search" />
              <IoMdNotificationsOutline className="notification" />
              <img
                src="https://res.cloudinary.com/dtylsgfeq/image/upload/v1687595746/unnamed_3_j5dnkr.jpg"
                alt="profile"
                className="profile-img"
              />
            </div>
          </div>
        </div>
        <div className="money-details-container">
          <div className="balance-container">
            <div>
              <h1 className="details-text">Your Balance</h1>
              <h1 className="details-money">$ 2,129,430</h1>
            </div>
            <TbCalendarEvent className="details-img" />
          </div>
          <div className="income-container">
            <div>
              <h1 className="details-text">Total Transactions</h1>
              <h1 className="details-money">1,520</h1>
            </div>
            <BsTag className="details-img" />
          </div>
          <div className="expenses-container">
            <div>
              <h1 className="details-text">Total Likes</h1>
              <h1 className="details-money">9,721</h1>
            </div>
            <AiOutlineLike className="details-img" />
          </div>
          <div className="users-container">
            <div>
              <h1 className="details-text">Total Users</h1>
              <h1 className="details-money">892</h1>
            </div>
            <PiUsersBold className="details-img" />
          </div>
        </div>
        <div className="activities-container">
          <div className="upper-container">
            <h1 className="product-heading">Activities</h1>
            <p className="product-paragraph">
              May-June 2021
              <BsChevronCompactDown />
            </p>
          </div>
          <LineChart
            width={1000}
            height={200}
            data={activityData}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Guest" stroke="red" />
            <Line type="monotone" dataKey="User" stroke="green" />
          </LineChart>
        </div>
        <div className="bottom-container">
          <div className="product-container">
            <div className="top-container">
              <h1 className="product-heading">Top products</h1>
              <p className="product-paragraph">
                May-June 2021
                <BsChevronCompactDown />
              </p>
            </div>
            <PieChart width={600} height={200}>
              <Pie
                data={data}
                cx="50%"
                cy="30%"
                outerRadius="60%"
                dataKey="count"
              >
                <Cell name="Base Tees" fill="#64C2A6" />
                <Cell name="Custom Short Pants" fill="purple" />
                <Cell name="Super Hoodies" fill="lightpink" />
              </Pie>

              <Legend
                iconType="circle"
                layout="horizontal"
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{fontSize: 12, fontFamily: 'Roboto'}}
              />
            </PieChart>
          </div>
          <div className="product-container">
            <div className="top-container">
              <h1 className="product-heading">Today's Schedule</h1>
              <p className="product-paragraph">See All ></p>
            </div>
            <div className="meet-container">
              <div className="line"></div>
              <div className="meet-sub-container">
                <h1 className="meet-heading">
                  Meeting with suppliers from Kuta Bali
                </h1>
                <p className="product-paragraph">1400-1500</p>
                <p className="product-paragraph">at Sunset Road,Kuta,Bali</p>
              </div>
            </div>

            <div className="meet-container">
              <div className="lines"></div>
              <div className="meet-sub-container">
                <h1 className="meet-heading">
                  Check operation at Giga Factory 1
                </h1>
                <p className="product-paragraph">1800-2000</p>
                <p className="product-paragraph">at Central Jakarta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default Home
