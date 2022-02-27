import CircularProgress from "@mui/material/CircularProgress";
import classes from "../../styles/Spinner.module.css";

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
