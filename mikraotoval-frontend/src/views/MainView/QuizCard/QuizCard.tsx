import React, { FC } from "react";
import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Edit, PlayCircleFilled, Visibility } from "@mui/icons-material";
import { PropsType } from "./types";

const QuizCard: FC<PropsType> = ({ quizTitle }) => {
  return (
    <Card
      raised
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        margin: "2vh 0",
      }}
    >
      <CardContent>
        <Typography variant="h3"> {quizTitle}</Typography>
        <Typography variant="h5" sx={{ opacity: "50%" }}>
          100 שאלות
        </Typography>
      </CardContent>
      <CardActions sx={{ position: "absolute", bottom: 0, right: 0 }}>
        <IconButton>
          <Edit sx={{ fontSize: "2.5rem" }} />
        </IconButton>
        <IconButton size="small">
          <Visibility sx={{ fontSize: "2.5rem" }} />
        </IconButton>
        <IconButton size="small">
          <PlayCircleFilled sx={{ fontSize: "2.5rem" }} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default QuizCard;
