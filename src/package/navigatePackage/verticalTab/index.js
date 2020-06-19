import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { ClVerticalTab, ClVerticalTabCell } from "../../../index";

export default function VerticalTab() {
  const tabs = [...Array(50)].map((key, index) => ({
    name: "tab-" + index,
    id: "id-" + index
  }));
  return (
    <View>
      <ClVerticalTab tabs={tabs} height="full">
        <View>
          {tabs.map(item => (
            <View id={item.id} key={item.name}>
              <ClVerticalTabCell>{item.name}</ClVerticalTabCell>
            </View>
          ))}
        </View>
      </ClVerticalTab>
    </View>
  );
}

VerticalTab.config = {
  navigationBarTitleText: "垂直导航 VerticalTab"
};
