import React, { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import { TextField } from "@mui/material";
import showToast from "../../helpers/ShowToast";
import Button from "@mui/material/Button";
import { authContext } from "../../context/AuthContext";
import { chatContext } from "../../context/ChatContextProvider";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./Chat.css";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ImageList from "@mui/material/ImageList";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Chat = () => {
  const { addComment, getTopics, commentsArr, editProduct, deleteProduct } =
    useContext(chatContext);
  const { user } = useContext(authContext);
  const [mainBlock, setMainBlock] = useState(false);
  const [comment, setComment] = useState("");
  const [rewrite, setRewrite] = useState("");
  const [newId, setNewId] = useState("");

  function handleClick() {
    if (!comment) {
      showToast("Заполните поля", "error");
      return;
    }

    let date = new Date(Date.now());
    const str = `Date: ${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}
        :${date.getSeconds()} `;

    let obj = {
      comment,
      data: str,
      user: user.email,
      like: 0,
    };

    addComment(obj);
    setComment("");
  }

  function editInput(com, nid) {
    setRewrite(com);
    setNewId(nid);
    setMainBlock(true);
  }

  function handleTwoClick(id) {
    let chat = {
      comment: rewrite,
    };
    editProduct(id, chat);
    setMainBlock(false);
  }
  function clickLike(id, one) {
    let likes = {
      like: ++one,
    };
    editProduct(id, likes);
  }

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div className="chat">
      <h1>Отзывы</h1>
      <div className="chat__comment">
        <ImageList sx={{ width: 300, height: 250 }}>
          {commentsArr.map((elem) => (
            <div className="com_chat" key={elem.id}>
              <React.Fragment>
                <CardContent>
                  <div className="close_bt">
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {elem.data}
                    </Typography>
                    {elem.user === user.email && (
                      <>
                        <Button
                          onClick={() => editInput(elem.comment, elem.id)}
                        >
                          <EditIcon />
                        </Button>
                        <Button onClick={() => deleteProduct(elem.id)}>
                          <DeleteIcon />
                        </Button>
                      </>
                    )}
                  </div>
                  <Typography variant="h6" component="div">
                    {elem.user}
                    <div>
                      <span>Лайки: {elem.like}</span>
                      <Button onClick={() => clickLike(elem.id, elem.like)}>
                        <ThumbUpIcon />
                      </Button>
                    </div>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {elem.comment}
                  </Typography>
                </CardContent>
              </React.Fragment>
            </div>
          ))}
        </ImageList>
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-multiline-static"
          label="Comment"
          multiline
          rows={4}
          defaultValue="Default Value"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </Box>
      <Button onClick={handleClick} variant="contained" disableElevation>
        Отправить
      </Button>
      {mainBlock && (
        <div className="main-modal">
          <div
            className="inner-modal"
            style={{ height: "200px", borderRadius: "15px", marginTop: "45px" }}
          >
            <div className="close">
              <Button
                onClick={() => setMainBlock(false)}
                variant="contained"
                className="btn-closer"
              >
                X
              </Button>
            </div>
            <div className="cl-input">
              <TextField
                sx={{ width: 300 }}
                id={newId}
                label="Comment"
                variant="outlined"
                value={rewrite}
                onChange={(e) => setRewrite(e.target.value)}
              />
              <Button
                onClick={() => handleTwoClick(newId)}
                variant="contained"
                disableElevation
              >
                Изменить комментарий
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
