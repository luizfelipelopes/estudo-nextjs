import "./_app.css";
import GlobalStyle  from "../styles/globals";
import Home from "./index";

function MyApp({ Component, pageProps }) {

    return (
        <div>
        <GlobalStyle>
            <FrequenciaAlimentar />
        </GlobalStyle>
        </div>
    );
}


export default MyApp;