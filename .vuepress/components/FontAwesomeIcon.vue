<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTerminal, faServer } from "@fortawesome/free-solid-svg-icons";

faServer.iconName = "devops";
library.add(faTerminal, faServer);

export { FontAwesomeIcon as default } from "@fortawesome/vue-fontawesome";
</script>
