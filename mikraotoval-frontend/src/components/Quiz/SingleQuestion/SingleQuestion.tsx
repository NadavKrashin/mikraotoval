import React, { FC, useMemo, useState } from "react";
import {
  Typography,
  Box,
  Container,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { Option, useClasses } from "./styles";
import { PropsType, QuestionOption } from "./types";

const SingleQuestion: FC<PropsType> = ({
  questionTitle,
  questionOptions,
  isMultipleChoice,
}: PropsType) => {
  const [clickedOptionsIds, setClickedOptionsIds] = useState<
    QuestionOption["id"][]
  >([]);
  const [isQuestionSubmitted, setIsQuestionSubmitted] =
    useState<boolean>(false);

  const getOptionColor = ({ isCorrect }: QuestionOption) => {
    return isCorrect ? "green" : "red";
  };

  const optionsWithColors = useMemo(() => {
    return !isQuestionSubmitted
      ? questionOptions
      : questionOptions.map((option) => ({
          ...option,
          color:
            !clickedOptionsIds.includes(option.id) && !option.isCorrect
              ? ""
              : getOptionColor(option),
        }));
  }, [isQuestionSubmitted]);

  const handleQuestionSubmit = (optionsIds?: QuestionOption["id"][]) => {
    if (optionsIds) {
      setClickedOptionsIds(optionsIds);
    }

    setIsQuestionSubmitted(true);
  };

  const handleOptionClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const clickedOptionId = +event.target.value;
    setClickedOptionsIds(
      event.target.checked
        ? [...clickedOptionsIds, clickedOptionId]
        : clickedOptionsIds.filter((id) => id !== clickedOptionId)
    );
  };

  const classes = useClasses();
  return (
    <div>
      <Container className={classes.container}>
        <Typography variant="h4">{questionTitle}</Typography>
        <Box className={classes.optionsBox}>
          {optionsWithColors.map((option) => {
            return !isMultipleChoice ? (
              <Option
                elevation={4}
                key={option.id}
                sx={{ backgroundColor: option.color ?? "" }}
                onClick={() =>
                  !clickedOptionsIds.length && handleQuestionSubmit([option.id])
                }
              >
                {option.text}
              </Option>
            ) : (
              <Option key={option.id} elevation={4}>
                <FormControlLabel
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: option.color ?? "",
                  }}
                  control={
                    <Checkbox
                      sx={{ marginLeft: "2vw" }}
                      onChange={handleOptionClick}
                      value={option.id}
                    />
                  }
                  label={option.text}
                />
              </Option>
            );
          })}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Button>הבא</Button>
          {isMultipleChoice && (
            <Button onClick={() => handleQuestionSubmit()}>בדוק</Button>
          )}
          <Button>חזור</Button>
        </Box>
      </Container>
    </div>
  );
};

export default SingleQuestion;
