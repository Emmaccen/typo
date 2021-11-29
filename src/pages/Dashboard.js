import React from "react";
import { dataHandler } from "../utils/shared-function/dataHandler";
import {
  CheckCircleOutlined,
  WarningOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Badge, Input, Progress, Divider, Button } from "antd";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "../styles/dashboard.scss";

const Dashboard = () => {
  const data = dataHandler.getStateFromLocalStorage("grades") || [];

  return (
    <div className="container2 padChildren dashboardPage">
      <div className="flex navigate">
        <Link to="/test" className="centered">
          <ArrowLeftOutlined /> <span>Back</span>
        </Link>
      </div>
      <h1 className="title">Dashboard</h1>
      {data.map((grade, i) => {
        return (
          <div key={i} className="analytics cardBackground">
            <Badge showZero status="success" count={grade.correctWords}>
              <CheckCircleOutlined />
            </Badge>
            <p>Correct words</p>
            <Divider />
            <Badge showZero count={grade.wrongWords}>
              <WarningOutlined />
            </Badge>
            <p>Wrong | untyped | misspelled words</p>
            <Divider />
            <div className="progressBars">
              <div>
                <p>Accuracy</p>
                <Progress percent={grade.accuracy} status="active" />
              </div>
              <Divider />
              <div>
                <p>completion Status</p>
                <Progress percent={grade.completionStatus} status="active" />
              </div>
              <Divider />
              <p>Average Time Required: {grade.averageTimeRequired} Min(s)</p>
              <Divider />
              <p>Typing Speed: {grade.typingSpeed} word(s) per second(s)</p>
              <Divider />
              <p>Time set for challenge: {grade.initialTime} second(s)</p>
              <Divider />
              <p>Time left before submission: {grade.timeLeft} second(s)</p>
              <Divider />
              <p>Total Keystroke: {grade.totalTypedWords} words</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
