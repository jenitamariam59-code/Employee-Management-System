import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const EmployeeDash = () => {
  return (
    <div className="employee-dashboard">

      {/* TOP NAVBAR */}
      <nav className="employee-navbar">

        <div className="brand">
          Employee Management
        </div>

        <div className="navbar-right">
          <span className="notification">🔔</span>

          <div className="user-info">
            <div className="user-avatar">R</div>
            <div>
              <strong>Rahul Kumar</strong>
              <small>Employee</small>
            </div>
          </div>

          <button className="logout-btn">
            Logout
          </button>
        </div>

      </nav>


      {/* SIDEBAR */}
      <aside className="employee-sidebar">

        <div className="sidebar-profile">
          <div className="large-avatar">R</div>

          <h5>Rahul Kumar</h5>
          <small>Software Developer</small>
        </div>


        <div className="menu-title">
          MENU
        </div>

        <ul className="sidebar-menu">

          <li className="active">
            <span>🏠</span>
            Dashboard
          </li>

          <li>
            <span>👤</span>
            My Profile
          </li>

          <li>
            <span>📅</span>
            Attendance
          </li>

          <li>
            <span>📝</span>
            Leave
          </li>

          <li>
            <span>💰</span>
            Salary
          </li>

        </ul>


        <div className="menu-title account-title">
          ACCOUNT
        </div>

        <ul className="sidebar-menu">

          <li>
            <span>⚙️</span>
            Settings
          </li>

          <li className="logout-menu">
            <span>🚪</span>
            Logout
          </li>

        </ul>

      </aside>


      {/* MAIN CONTENT */}
      <main className="employee-main">

        {/* WELCOME */}
        <div className="welcome-section">

          <div>
            <h2>Welcome back, Rahul 👋</h2>

            <p>
              Here's your employee dashboard overview
            </p>
          </div>

          <button className="date-btn">
            📅 October 2026
          </button>

        </div>


        {/* EMPLOYEE PROFILE */}
        <div className="profile-card">

          <div className="profile-left">

            <div className="profile-avatar">
              R
            </div>

            <div>
              <h4>Rahul Kumar</h4>

              <p>
                Software Developer
              </p>

              <span className="status-badge">
                ● Active
              </span>
            </div>

          </div>


          <div className="profile-details">

            <div>
              <small>Employee ID</small>
              <strong>EMP001</strong>
            </div>

            <div>
              <small>Department</small>
              <strong>IT</strong>
            </div>

            <div>
              <small>Email</small>
              <strong>rahul@gmail.com</strong>
            </div>

          </div>

        </div>


        {/* SUMMARY CARDS */}
        <div className="summary-grid">

          {/* Attendance */}
          <div className="summary-card">

            <div className="card-top">
              <span>Attendance</span>
              <div className="card-icon blue">
                📅
              </div>
            </div>

            <h2>22</h2>

            <p>
              <span className="green-text">Present Days</span>
              {" "}this month
            </p>

          </div>


          {/* Leave */}
          <div className="summary-card">

            <div className="card-top">
              <span>Leave</span>
              <div className="card-icon orange">
                📝
              </div>
            </div>

            <h2>2</h2>

            <p>
              <span className="orange-text">Pending Requests</span>
            </p>

          </div>


          {/* Salary */}
          <div className="summary-card">

            <div className="card-top">
              <span>Salary</span>
              <div className="card-icon green">
                💰
              </div>
            </div>

            <h2>₹30,000</h2>

            <p>
              <span className="green-text">This Month</span>
            </p>

          </div>


          {/* Working Days */}
          <div className="summary-card">

            <div className="card-top">
              <span>Working Days</span>
              <div className="card-icon purple">
                🕐
              </div>
            </div>

            <h2>22 / 26</h2>

            <p>
              <span className="blue-text">This Month</span>
            </p>

          </div>

        </div>


        {/* ATTENDANCE SECTION */}
        <div className="attendance-card">

          <div className="section-header">

            <div>
              <h4>Recent Attendance</h4>
              <p>Your latest attendance records</p>
            </div>

            <button className="view-btn">
              View All
            </button>

          </div>


          <div className="table-responsive">

            <table className="attendance-table">

              <thead>
                <tr>
                  <th>Date</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Status</th>
                </tr>
              </thead>


              <tbody>

                <tr>
                  <td>01 Oct 2026</td>
                  <td>09:15 AM</td>
                  <td>05:45 PM</td>
                  <td>
                    <span className="present-badge">
                      Present
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>02 Oct 2026</td>
                  <td>09:05 AM</td>
                  <td>05:30 PM</td>
                  <td>
                    <span className="present-badge">
                      Present
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>03 Oct 2026</td>
                  <td>-</td>
                  <td>-</td>
                  <td>
                    <span className="leave-badge">
                      Leave
                    </span>
                  </td>
                </tr>


                <tr>
                  <td>04 Oct 2026</td>
                  <td>09:20 AM</td>
                  <td>05:40 PM</td>
                  <td>
                    <span className="present-badge">
                      Present
                    </span>
                  </td>
                </tr>

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>
  );
};

export default EmployeeDash;