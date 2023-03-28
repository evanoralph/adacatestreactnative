import React from "react";
import { AlertDialog, Button } from "native-base";

const AlertModal = ({ setIsOpen, isOpen, selected, setSelected }) => {
  const onClose = () => {
    setIsOpen(false);
    setSelected({});
  };
  const cancelRef = React.useRef(null);

  return (<AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
    <AlertDialog.Content>
      <AlertDialog.CloseButton />
      <AlertDialog.Header>Order Sent</AlertDialog.Header>
      <AlertDialog.Body>
        {Object.values(selected).map(({ value }) => {
          return `${value} ,`;
        })}
      </AlertDialog.Body>
      <AlertDialog.Footer>
        <Button.Group space={2}>
          <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
            Cancel
          </Button>
          <Button colorScheme="danger" onPress={onClose}>
            Confirm
          </Button>
        </Button.Group>
      </AlertDialog.Footer>
    </AlertDialog.Content>
  </AlertDialog>);
};

export default AlertModal;
