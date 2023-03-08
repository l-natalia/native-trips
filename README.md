#snippet for functional component
rnfe

#additional style
style={{...styles.subtext2, color: Colors.primaryTeal}}

#Images

in index.js inside assest:
export { default as HeroImage } from "./hero.png";

in component:
import {HeroImage} from "../assets/index";
<Image source={HeroImage} style={styles.image} />

or:
<Image source={require("../assets/hero.png")} style={styles.image} />

#icons
https://icons.expo.fyi/

#design
https://dribbble.com/shots/15172316-Travel-App-Concept