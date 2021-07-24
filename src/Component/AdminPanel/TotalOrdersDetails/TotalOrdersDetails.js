import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import "./TotalOrderContainer.css";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TotalOrdersDetails = ({ order }) => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const statusHandle = (id) => {
    console.log(id);
  };
  console.log(errors);
  return (
    <div className="m-2 shadow totalOrdersDetailsContainer">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            {order.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <big className="text-warning">price : $ {order.price}</big>
          </Typography>
          <Typography variant="body2" component="p">
            {order.description}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <form onSubmit={handleSubmit(onSubmit)}>
            <select
              className="p-2 rounded bg-light text-dark "
              {...register("status", { required: true })}
            >
              <option value="DONE">DONE</option>
              <option value="ONGOING">ONGOING</option>
              <option value="PENDING">PENDING</option>
            </select>
            <input
              onClick={() => statusHandle(order._id)}
              className="btn-secondary btn pt-0 pl-3 pr-3 border rounded "
              type="submit"
              value="done"
            />
          </form>
        </CardActions>
      </Card>
    </div>
  );
};

export default TotalOrdersDetails;
