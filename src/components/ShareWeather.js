import {
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { title, emailBody, shareUrl, separator } from "../constants";
import styles from "./ShareWeather.module.css";

function ShareWeather() {
  return (
    <div className={styles.btnContainer}>
      <TwitterShareButton url={shareUrl} title={title} hashtags={["#Weather"]}>
        <TwitterIcon size={32} round={true} />
      </TwitterShareButton>
      <EmailShareButton
        subject={title}
        body={emailBody}
        url={shareUrl}
        separator={separator}
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <WhatsappShareButton url={shareUrl} title={title} separator={separator}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  );
}

export default ShareWeather;
