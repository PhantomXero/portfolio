import { Box, ButtonGroup, makeStyles } from "@material-ui/core";
import Github from "../../components/socials/Github";
import X from "../../components/socials/X";
import Instagram from "../../components/socials/Instagram";
import Linkedin from "../../components/socials/Linkedin";

const useStayles = makeStyles({
  footer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function Footer() {
  const classes = useStayles();

  return (
    <footer className={classes.footer}>
      <Box className="copyright">&copy; PhantomX 2024</Box>
      <div className="socials">
        <ButtonGroup color="secondary">
          <Github />
          <X />
          <Instagram />
          <Linkedin />
        </ButtonGroup>
      </div>
    </footer>
  );
}

export default Footer;
