import "./_app.css";
import GlobalStyle  from "../styles/globals";


const MyApp = ({ Component, pageProps }) => {

    return (
        <GlobalStyle>
            <Component {...pageProps} />
        </GlobalStyle>
    );

}


export default MyApp;