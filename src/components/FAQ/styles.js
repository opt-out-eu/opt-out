export default theme => ({
  container: {
    maxWidth: "777px",
    margin: "auto",
    padding: "30px",
    paddingBottom: 0,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "60px 60px 0",
      margin: "60px auto 0"
    }
  },
  title: {
    textAlign: "center",
    marginBottom: "1.5em"
  },
  list: {
    margin: "20px 0"
  }
});