import React from "react";
import { Modal, Button, Text, Grid, Image } from "@nextui-org/react";

export default function ModalBookDetail() {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <div>
      <Button auto shadow onClick={handler}>
        Open modal
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        width="600px"
      >
        <div className="mx-auto">
          <Modal.Header>
            {/* <Text id="modal-title" size={18}>
              Welcome to
              <Text b size={18}>
                NextUI
              </Text>
            </Text> */}
          </Modal.Header>
          <Modal.Body>
            <Grid.Container gap={2}>
              <Grid>
                <Image
                  src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true"
                  objectFit="none"
                  alt="Default Image"
                  width={200}
                  height={300}
                />
              </Grid>
              <Grid>
                <Text>abc</Text>
                <Button auto onClick={closeHandler}>
                  開始閱讀
                </Button>
              </Grid>
            </Grid.Container>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </div>
      </Modal>
    </div>
  );
}
