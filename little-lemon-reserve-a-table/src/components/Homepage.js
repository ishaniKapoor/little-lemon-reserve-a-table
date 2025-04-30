import CallToAction from "./CallToAction";
import Chicago from "./Chicago";
import Specials from "./Specials";
import CustomersSay from "./CustomersSay";

function Homepage(){
    return (
        <>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
        </>
    );
}

export default Homepage;