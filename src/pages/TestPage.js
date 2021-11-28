import { Button, Divider, Form, Input, Modal, Select, Tooltip } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "../utils/preStoredTestData";
import { dataHandler } from "../utils/shared-function/dataHandler";
import { calculator } from "../utils/shared-function/testCalculator";
import "../styles/test.scss";
const { TextArea } = Input;

const TestPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    textContent: "",
    userTimer: 1,
  });
  const { Option } = Select;
  let navigate = useNavigate();
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = (userInfo) => {
    dataHandler.setStateInLocalStorage("userInfo", userInfo);
    navigate("/test/start", {
      state: {
        newChallenge: true,
      },
    });
  };

  const TestTemplateCard = ({ text }) => {
    let time = calculator.calculateAverageTimeRequiredToType(text);
    return (
      <div
        onClick={() =>
          handleSubmit({
            textContent: text,
            userTimer: time * 60,
          })
        }
        className="cardBackground pointer"
      >
        <div className="flexEnd">
          <span className="lightFont">{`${time}`} Mins</span>
        </div>
        <p>{text}</p>
      </div>
    );
  };
  return (
    <div className="lucius">
      <div className="container2 padChildren">
        <Modal
          title="Create Challenge"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={false}
        >
          <div className="lucius">
            <Form
              onFinish={(vals) => handleSubmit(userInfo)}
              name="basic"
              size="large"
              onFinishFailed={() => null}
            >
              <Form.Item
                name="textContent"
                rules={[
                  { required: true, message: "Please paste in some content" },
                ]}
                style={{ width: "100%" }}
              >
                <TextArea
                  onChange={({ target: { value } }) =>
                    setUserInfo({ ...userInfo, textContent: value })
                  }
                  value={userInfo.textContent}
                  placeholder="Paste your challenge here..."
                  rows={3}
                />
              </Form.Item>
              <Tooltip
                trigger={["focus"]}
                title={"please provide a custom time (1 equals 1-mins)"}
                color={"blue"}
                placement="topLeft"
                overlayClassName="numeric-input"
              >
                <Form.Item
                  name="userTimer"
                  rules={[
                    {
                      required: userInfo.userTimer === 0,
                      message: "Please provide a time value (1 equals 1-mins)",
                    },
                  ]}
                >
                  <Input
                    onChange={({ target: { value } }) =>
                      setUserInfo({ ...userInfo, userTimer: value * 60 })
                    }
                    value={userInfo.userTimer}
                    placeholder="Input a number (mins)"
                    type="number"
                    min={1}
                  />
                </Form.Item>
              </Tooltip>
              <Divider>Or</Divider>
              <Tooltip
                trigger={["focus"]}
                title={
                  "This is the time required for you to complete this challenge"
                }
                color={"blue"}
                placement="topLeft"
                overlayClassName="numeric-input"
              >
                <Form.Item
                  name="userTimer"
                  rules={[
                    {
                      required: userInfo.userTimer === 0,
                      message: "Please choose a time",
                    },
                  ]}
                  style={{ width: "100%" }}
                >
                  <Select
                    onSelect={(val) =>
                      setUserInfo({ ...userInfo, userTimer: val * 60 })
                    }
                    showSearch
                    placeholder="Choose a time"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      option.children
                        .toLowerCase()
                        .indexOf(input.toLowerCase()) >= 0
                    }
                  >
                    <Option value={1}>1 Minute</Option>
                    <Option value={2}>2 Minute(s)</Option>
                    <Option value={3}>3 Minute(s)</Option>
                    <Option value={4}>4 Minute(s)</Option>
                    <Option value={5}>5 Minute(s)</Option>
                    <Option value={6}>6 Minute(s)</Option>
                    <Option value={7}>7 Minute(s)</Option>
                    <Option value={8}>8 Minute(s)</Option>
                    <Option value={9}>9 Minute(s)</Option>
                    <Option value={10}>10 Minute(s)</Option>
                  </Select>
                </Form.Item>
              </Tooltip>
              <div className="flexEnd">
                <Button size={"large"} className="largeBtn" htmlType="submit">
                  Create Challenge
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
        <div className="centered textCenter">
          <h2 className="title heading">
            Choose from our long list of template or C/P your own essay
          </h2>
        </div>
        <div className="flexEnd">
          {/* <Link to="./start/3"> */}
          <Button
            onClick={showModal}
            className="primaryColorBg"
            primary
            size="large"
          >
            Create New
          </Button>
          {/* </Link> */}
        </div>
        <div className="grid3 margin-t-b">
          {templates.map(TestTemplateCard)}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
