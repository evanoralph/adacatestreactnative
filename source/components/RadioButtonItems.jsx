import React, { useEffect, useState } from "react";

import { Menu } from "../../source/constant/menus";
import { Box, Checkbox, Text } from "native-base";
import styled from "styled-components/native";

const MenuItem = ({ value, isChecked, handleOnchange, index, id, selected }) => {


  const _handleOnchange = () => {
    if (!isDisabled()) {
      handleOnchange({ index, id, value });
    }
  };

  const isDisabled = () => {
    //show the rules validation for the food selection
    let IdRestricted = [];

    Object.keys(selected).forEach((key) => {
      const rule = Menu.rules[selected[key]?.id];
      if (rule) {
        IdRestricted = [...IdRestricted, ...rule];
      }
    });

    // this will disable the fields on the group that required to have selection before will be enable
    if (index > 0 && !selected[index - 1]?.id) {
      return true;
    }

    return IdRestricted.includes(Number(id));
  };



  return (
    <ItemWrapper w="90%" h="10" bg="indigo.700" rounded="md" shadow={3}>
      <Checkbox isChecked={isChecked}
                onChange={_handleOnchange}
                isDisabled={isDisabled()}>
        <Text color="#fff">{value}</Text>
      </Checkbox>
    </ItemWrapper>
  );
};

// <ItemWrapper>
//   <Label>
//     <Radio toggle label={value} checked={selected[index].id == id} disabled={isDisabled()}
//            onClick={_handleOnchange} />
//   </Label>
// </ItemWrapper>

export default MenuItem;


const ItemWrapper = styled(Box)`
  margin-bottom: 10px !important;
  justify-content: center;
  padding: 5px;
  align-self: center;
`;


