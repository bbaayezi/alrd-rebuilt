import * as React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Popover from "@material-ui/core/Popover";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: "none"
    },
    paper: {
      padding: theme.spacing(1)
    }
  })
);

export interface ILatestListItemProps {}

export default function LatestListItem(props: ILatestListItemProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <ListItem
      aria-owns={open ? "mouse-over-popover" : undefined}
      aria-haspopup="true"
      onMouseEnter={handlePopoverOpen}
      onMouseLeave={handlePopoverClose}
      style={{
        padding: "3px 8px"
      }}
    >
      <ListItemText
        primary={
          <React.Fragment>
            <div style={{ width: "100%", whiteSpace: "nowrap" }}>
              <Box
                component="div"
                textOverflow="ellipsis"
                overflow="hidden"
                bgcolor="background.paper"
              >
                >{" "}
                <Typography
                  component="span"
                  variant="subtitle1"
                  color="textPrimary"
                >
                  Aqueous solution-processed AlOx dielectrics and their biased
                  radiation response investigated by an on-site technique
                </Typography>
                <Popover
                  id="mouse-over-popover"
                  className={classes.popover}
                  classes={{
                    paper: classes.paper
                  }}
                  open={open}
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "left"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left"
                  }}
                  onClose={handlePopoverClose}
                  disableRestoreFocus
                >
                  <Typography
                    style={{
                      maxWidth: 400
                    }}
                  >
                    Aqueous solution-processed AlOx dielectrics and their biased
                    radiation response investigated by an on-site technique
                  </Typography>
                </Popover>
              </Box>
            </div>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography component="span" variant="caption" color="textPrimary">
              Yuxiao Fang
            </Typography>
            <br />
            <Typography component="span" variant="caption" color="textPrimary">
              2020-05-01
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
