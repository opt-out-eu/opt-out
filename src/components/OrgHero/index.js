import { IntroText, SubtitleText, MoreInfo, NewOrgTitle, OrgSubTitle, NewOrgSubTitle } from "./text";

import { FormattedMessage } from "react-intl";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import styles from "./styles";
import { visuallyHidden } from "../../styles/layout";
import { withStyles } from "@material-ui/core/styles";

const Hero = ({ classes, selectedCompany }) => {
  return (
    <div className={classes.hero} id="hero">
      <div className={classes.container}>
        {selectedCompany && (
          <div id="org-logo" className={classes.orgLogo}>
            <img
              className={classes.logo}
              src={`https://api.faviconkit.com/${selectedCompany.url}/24`}
            />
          </div>
        )}
        <div id="hero-text" className={classes.heroText}>
          {selectedCompany && (
            <>
              <Typography
                variant="display1"
                color="inherit"
                gutterBottom={true}
                component="h1"
                className={classes.heading}
              >
                Delete my personal data from {selectedCompany.name}
              </Typography>
              <Typography color="inherit" className={classes.domain}>
                Domain:{" "}
                <strong>
                  <a
                    rel="nofollow"
                    target="new"
                    href={`https://${selectedCompany.url}`}
                    className={classes.introLink}
                  >
                    {selectedCompany.url}
                  </a>
                </strong>
              </Typography>
              <Typography
                color="inherit"
                component="h2"
              >
                {OrgSubTitle}
              </Typography>
              <Typography color="inherit" className={classes.domain}>
                <a href="#about-org" className={classes.introLink}>
                  Find out more about {selectedCompany.name}
                </a>
              </Typography>
            </>
          )}
          {!selectedCompany && (
            <div id="add-org" className={classes.addOrg}>
              <Typography
                variant="display1"
                color="inherit"
                gutterBottom={true}
                component="h1"
                className={classes.heading}
              >
                {NewOrgTitle}
              </Typography>
              <Typography
                color="inherit"
                component="h2"
              >
                {NewOrgSubTitle}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default withStyles(styles)(Hero);
