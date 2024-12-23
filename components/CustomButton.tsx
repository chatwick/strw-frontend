import React from "react";
import { TouchableOpacity, Text } from "react-native";

interface Props {
  onPress: () => void;
  label: string;
  textStyles?: string;
  containerStyles?: string;
}

const CustomButton = ({
  onPress,
  label,
  textStyles,
  containerStyles,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className={`bg-primary rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
    >
      <Text className={`font-semibold text-xl ${textStyles}`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
