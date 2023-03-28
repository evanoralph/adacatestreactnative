import React from "react";
import { NativeBaseProvider, Text, Box } from "native-base";
import RadioButton from "./source/components/RadioButtons";

export default function App() {
  return (
    <NativeBaseProvider>
      <RadioButton />
    </NativeBaseProvider>
  );
}
