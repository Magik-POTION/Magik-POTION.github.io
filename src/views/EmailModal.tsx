import { useState } from "react";
import { Button, Card, IconButton, Portal, Text } from "react-native-paper";
import { Modal, Touchable, TouchableWithoutFeedback, View } from "react-native";
import emailIcon from "../assets/email-outline-custom.png";

const EmailModal = () => {
  const [visible, setVisible] = useState(false);
  const email = "truong.k77@gmail.com";

  const openEmail = () => {
    window.open(`mailto:${email}`);
  };

  return (
    <>
      <IconButton
        size={42}
        iconColor="white"
        icon={emailIcon}
        onPress={() => setVisible(true)}
        mode="outlined"
      />
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        transparent={true}
        presentationStyle="overFullScreen"
      >
        <TouchableWithoutFeedback onPress={() => setVisible(false)}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <Card>
              <Card.Title title={"Email"} />
              <Card.Content>
                <Text variant="bodyLarge" style={{ textAlign: "center" }}>{email}</Text>
              </Card.Content>
              <Card.Actions>
                <Button onPress={openEmail}>Open in Email App</Button>
              </Card.Actions>
            </Card>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default EmailModal;
