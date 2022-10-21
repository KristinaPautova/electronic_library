import { authContext } from "../../context/AuthContext";
import { Grid, TextField } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { messagesContextFire } from "../../context/MessagesContextFire";
import "./RealtimaChat.css";

const RealtimeChat = () => {
  const { user } = useContext(authContext);
  const { addMessages, getMessages, MessagesArr } =
    useContext(messagesContextFire);
  const [value, setValue] = useState("");

  const sendMessage = async () => {
    let obj = {
      uid: user.uid,
      displayName: user.email,
      text: value,
      photoURL:
        "https://cultureamp.design/static/a489d86dba895745f93a8d1268fe713f/avatar.svg",
      createdAt: Date.now(),
    };
    addMessages(obj);
    setValue("");
  };
  //
  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Container
      className="hc_cod"
      style={{ marginTop: "100px", textAlign: "center" }}
    >
      <h2 className="us-text">Сообщения</h2>
      <Grid
        container
        justify="center"
        style={{ height: "80%", justifyContent: "center" }}
      >
        <div
          className="ch_cod"
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowY: "auto",
          }}
        >
          {MessagesArr.map((message) => (
            <div
              key={message.id}
              style={{
                margin: 10,
                border:
                  user.uid === message.uid
                    ? "2px solid green"
                    : "2px dashed red",
                marginLeft: user.uid === message.uid ? "auto" : "10px",
                width: "fit-content",
                padding: 5,
                backgroundColor: "#DEDBF1",
              }}
            >
              <Grid container style={{ alignItems: "center" }}>
                <Avatar src={message.photoURL} />
                <div>{message.displayName}</div>
              </Grid>
              <div>{message.text}</div>
            </div>
          ))}
        </div>
        <Grid
          container
          direction="column"
          alignItems="flex-end"
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            rowsMax={2}
            variant="outlined"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant="outlined">
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RealtimeChat;
