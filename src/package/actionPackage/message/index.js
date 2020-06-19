import Taro, { useState } from "@tarojs/taro";
import {
  ClLayout,
  ClTitleBar,
  ClCard,
  ClFlex,
  ClButton,
  ClMessage
} from "../../../index";

export default function Message() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [type, setType] = useState("info");
  const [duration, setDuration] = useState(3);
  const [bgColor, setBgcolor] = useState("");
  return (
    <ClLayout>
      <ClMessage
        message={text}
        show={show}
        type={type}
        duration={duration}
        bgColor={bgColor}
      />
      <ClTitleBar title="类型" textColor="black" type="icon" subTitle="type" />
      <ClCard>
        <ClFlex justify="between">
          <ClButton
            shape="round"
            bgColor="light-grey"
            onClick={() => {
              setText("这是一条提示的消息");
              setType("info");
              setShow(true);
              setDuration(3);
            }}
          >
            提示
          </ClButton>
          <ClButton
            shape="round"
            bgColor="light-green"
            onClick={() => {
              setText("这是一条成功的消息");
              setType("success");
              setShow(true);
              setDuration(3);
            }}
          >
            成功
          </ClButton>
          <ClButton
            shape="round"
            bgColor="light-red"
            onClick={() => {
              setText("这是一条失败的消息");
              setType("error");
              setShow(true);
              setDuration(3);
            }}
          >
            失败
          </ClButton>
          <ClButton
            shape="round"
            bgColor="light-yellow"
            onClick={() => {
              setText("这是一条警告的消息");
              setType("warn");
              setShow(true);
              setDuration(3);
            }}
          >
            警告
          </ClButton>
        </ClFlex>
      </ClCard>
      <ClTitleBar
        title="持续时间"
        textColor="black"
        type="icon"
        subTitle="type"
      />
      <ClCard>
        注意：若引用该组件后 duration 发生变化，请自己手动设置
        duration，由于单一实例问题，会默认使用前一个状态的 duration。
      </ClCard>
      <ClCard>
        <ClFlex justify="between">
          <ClButton
            shape="round"
            onClick={() => {
              setText("默认持续 3s");
              setType("info");
              setShow(true);
              setDuration(3);
            }}
          >
            默认持续 3s
          </ClButton>
          <ClButton
            shape="round"
            onClick={() => {
              setText("持续 1s");
              setType("info");
              setShow(true);
              setDuration(1);
            }}
          >
            持续 1s
          </ClButton>
          <ClButton
            shape="round"
            onClick={() => {
              setText("永久保持");
              setType("info");
              setShow(true);
              setDuration(0);
            }}
          >
            永久保持
          </ClButton>
        </ClFlex>
      </ClCard>
      <ClTitleBar
        title="自定义背景色"
        textColor="black"
        type="icon"
        subTitle="type"
      />
      <ClCard>
        <ClFlex justify="between">
          <ClButton
            shape="round"
            bgColor="black"
            onClick={() => {
              setText("黑色的提示消息");
              setType("custom");
              setBgcolor("black");
              setDuration(3);
              setShow(true);
            }}
          >
            我是黑色的
          </ClButton>
        </ClFlex>
      </ClCard>
    </ClLayout>
  );
}

Message.config = {
  navigationBarTitleText: "Message 提示消息"
};
