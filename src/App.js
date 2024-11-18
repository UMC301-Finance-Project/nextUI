import React from "react";
import Sidebar from "react-sidebar";
import { FaHome, FaUser, FaCog } from "react-icons/fa"; // Import icons
import { TbLayoutDashboard } from "react-icons/tb"; // Import the TbLayoutDashboard icon
import { GiHamburgerMenu } from "react-icons/gi"; // Import the hamburger menu icon
import DashBoard from "./DashBoard"; // Import the DashBoard component

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false, // Start with the sidebar closed
      activeComponent: <DashBoard /> // Set the default component to render
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentDidMount() {
    // Set the default component to be the Dashboard (only once)
    if (!this.state.activeComponent) {
      this.setState({ activeComponent: <DashBoard /> });
    }
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  handleButtonClick = (name) => {
    // Update the state to render the corresponding component
    switch (name) {
      case "Dashboard":
        this.setState({ activeComponent: <DashBoard /> });
        break;
      case "Stocks":
        console.log("Stocks button clicked");
        this.setState({ activeComponent: null }); // Reset to null or show a different component
        break;
      case "Equity Research Report":
        console.log("Equity Research Report button clicked");
        this.setState({ activeComponent: null });
        break;
      case "AI Chatbot":
        console.log("AI Chatbot button clicked");
        this.setState({ activeComponent: null });
        break;
      default:
        console.log("Button not found");
        this.setState({ activeComponent: null });
    }
  };

  render() {
    // Declare buttonStyles inside render
    const buttonStyles = {
      background: "transparent",
      color: "white",
      border: "none",
      width: "100%",
      padding: "10px 20px",
      fontSize: "18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      cursor: "pointer",
      textAlign: "left",
      borderRadius: "5px",
      margin: "10px 0",
      transition: "background-color 0.3s ease",
    };

    const iconStyles = {
      marginRight: "10px", // Add margin to the right of each icon
    };

    const sidebarContent = (
      <div style={{ padding: "20px", color: "white" }}>
        <h2>Market Automaton</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <button
              onClick={() => this.handleButtonClick("Dashboard")}
              style={buttonStyles}
            >
              <TbLayoutDashboard style={iconStyles} /> Dashboard
            </button>
          </li>
          <li>
            <button
              onClick={() => this.handleButtonClick("Stocks")}
              style={buttonStyles}
            >
              <FaHome style={iconStyles} /> Stocks
            </button>
          </li>
          <li>
            <button
              onClick={() => this.handleButtonClick("Equity Research Report")}
              style={buttonStyles}
            >
              <FaUser style={iconStyles} /> Equity Research Report
            </button>
          </li>
          <li>
            <button
              onClick={() => this.handleButtonClick("AI Chatbot")}
              style={buttonStyles}
            >
              <FaCog style={iconStyles} /> AI Chatbot
            </button>
          </li>
        </ul>
      </div>
    );

    return (
      <Sidebar
        sidebar={sidebarContent}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{
          sidebar: {
            background: "linear-gradient(to right, #ff7e5f, #feb47b)",
            padding: "20px",
            fontSize: "18px",
            width: "250px",
            boxShadow: "4px 0 10px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease", // Smooth transition
            transform: this.state.sidebarOpen ? "translateX(0)" : "translateX(-100%)", // Slide-in effect
          },
          content: {
            padding: "20px",
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <button
          onClick={() => this.onSetSidebarOpen(!this.state.sidebarOpen)}
          aria-label={this.state.sidebarOpen ? "Close sidebar" : "Open sidebar"}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: "24px",
            color: "#ff7e5f",
            cursor: "pointer",
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <GiHamburgerMenu />
        </button>

        {/* Conditionally render the active component */}
        {this.state.activeComponent}
      </Sidebar>
    );
  }
}

export default App;
