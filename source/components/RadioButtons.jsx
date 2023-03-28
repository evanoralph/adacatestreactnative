import React, { useEffect, useState, useCallback } from "react";
// 1. import `NativeBaseProvider` component
import { Box, Button, VStack, HStack, Container, Center, Text, ScrollView } from "native-base";
import { Menu } from "../constant/menus";
import styled from "styled-components/native";
import MenuItem from "./RadioButtonItems";
import AlertModal from "./AlertModal";

const App = () => {
  const [selected, setSelected] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const menu = Menu;

  const handleOnchange = (data) => {
    //handle click event for the radio buttons

    setSelected((prevSelected) => {
      //this handle the remove of the selection on the last items group when changing the disable and enable radio buttons
      let starting = data.index;
      while (starting + 1 < Object.keys(prevSelected).length) {
        prevSelected[starting + 1] = {};
        starting++;
      }
      //save the values on the selected state
      return { ...prevSelected, [data.index]: { id: Number(data.id), value: data.value } };
    });
  };


  const handleReset = () => {
    setSelected({});
  };

  const SubmitButton = () => {
    //checking the selected items
    const isDisable = Object.values(selected).filter((data) => data.id).length != 3;

    return <Button marginX={3} onPress={() => setIsOpen(true)} isDisabled={isDisable}
                   color={"facebook"}>Submit</Button>;
  };

  const ResetButton = () => {
    //checking the selected items
    return <Button marginX={3} onPress={handleReset} backgroundColor={"red.900"}>Reset</Button>;
  };


  return (
    <ScrollView>
      <Box safeArea>
        <VStack space={4} alignItems="center" width={"100%"}>
          {menu.menus.map((section, index) => {
            return <RadioSection key={index}>
              {section.map((menuData) => {
                return <MenuItem
                  isChecked={selected[index]?.id == menuData.id}
                  key={`${index}-${menuData.id}`} {...menuData} index={index}
                  handleOnchange={(data) => handleOnchange(data, selected)}
                  selected={selected} />;
              })}
            </RadioSection>;
          })}
        </VStack>;
        <Center>
          <HStack>
            <SubmitButton />
            <ResetButton />
          </HStack>
        </Center>
      </Box>
      <AlertModal setSelected={setSelected} selected={selected} isOpen={isOpen} setIsOpen={setIsOpen} />
    </ScrollView>
  );
};

export default App;

const RadioSection = styled(Box)`
  margin-bottom: 5px;
  width: 100%;
  margin-top: 5px;
`;
