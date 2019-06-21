<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTerminal,
  faServer,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

import mailgunSvg from "!!raw-loader!../public/icons/mailgun-icon.svg";
const pathRegex = /<\s*path.* d\=\"([^\"]*)\".*>/;

/**
 * FA Icons
 */
faServer.iconName = "devops";
faEnvelope.iconName = "email";

library.add(faTerminal, faServer, faEnvelope);

/**
 * Custom Icons
 */
const mailgun = {
  prefix: "fas",
  iconName: "mailgun",
  icon: [1000, 1000, [], "", mailgunSvg.match(pathRegex)[1]]
};
library.add(mailgun);

export { FontAwesomeIcon as default } from "@fortawesome/vue-fontawesome";
</script>
