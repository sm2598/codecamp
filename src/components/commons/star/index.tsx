import React from "react";
import Rating from "@material-ui/lab/Rating";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      "& > * + *": {
        marginTop: theme.spacing(1),
      },
    },
  })
);

export function HalfRating({ onChangeInput }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="rating"
        defaultValue={0.0}
        precision={0.5}
        onChange={onChangeInput}
      />
    </div>
  );
}

export function HalfRatingRead({ comments }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="rating"
        defaultValue={comments.rating}
        precision={0.5}
        readOnly
      />
    </div>
  );
}

export function HalfRatingEdit({ onChangeInputComment }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="ratingEdit"
        defaultValue={0.0}
        precision={0.5}
        onChange={onChangeInputComment}
      />
    </div>
  );
}
