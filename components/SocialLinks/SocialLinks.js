import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faWordpressSimple,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

function SocialLinks() {
  return (
    <ul className="flex gap-4 pt-4 justify-center">
      <li>
        <Link href="https://www.facebook.com/your-profile" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="text-gray-200" size="lg" />
        </Link>
      </li>
      <li>
        <Link href="https://www.twitter.com/your-profile" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-200" size="lg" />
        </Link>
      </li>
      <li>
        <Link href="https://www.instagram.com/your-profile" target="_blank">
          <FontAwesomeIcon icon={faWordpressSimple} className="text-gray-200" size="lg" />
        </Link>
      </li>
    </ul>
  );
}

export default SocialLinks;
