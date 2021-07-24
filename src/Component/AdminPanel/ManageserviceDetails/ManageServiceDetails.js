import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./ManageServiceDetails.css";
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
const ManageServiceDetails = ({ service }) => {
  const classes = useStyles();

  const deleteHandler = (id) => {
    fetch(`https://protected-brook-16925.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("product delete successfully");
      });
  };
  return (
    <div className="m-2 w-25 manageDetailContainer">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {service.title}
          </Typography>
          <Typography variant="h5" component="h2"></Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            {service.description}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => deleteHandler(service._id)}
            class="btn-danger border rounded pl-3 pr-3 pt-1 pb-1"
            size="small"
          >
            DELETE
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ManageServiceDetails;
