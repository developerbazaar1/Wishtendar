import ProgressBar from "react-bootstrap/ProgressBar";

function LocaProgressBar() {
  const now = 60;
  return (
    <ProgressBar variant="black" now={now} label={`${now}%`} visuallyHidden />
  );
}

export default LocaProgressBar;
