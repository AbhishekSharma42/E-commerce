import { createContext, useState } from 'react';

const newContext = createContext();
export const Context = newContext;

const AppContext = (props) => {

    // Top Banner data handle
    const [TopBannerHeading] = useState("50% Off For Your First Shopping");
    const [TopBannerParagraph] = useState("Get GST invoice and save up to 18% on business purchases Classic and premium design with rotating bezel Track your workouts on your wrist.");
    const [TopBannerImg] = useState("https://images.meesho.com/images/products/75970557/6kmep_512.webp");


    // App Name Handle
    const [appName] = useState("YouWe Fashion");
    // #####################################

    // footer data handle
    const [FooteText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quod odit perferendis, nobis officia fugit at non ducimus dolorem voluptates, aliquam molestiae corrupti. Tempore similique impedit hic veniam eveniet natus.");
    const [Phone] = useState("7579811117");
    const [mail] = useState("Youwefashion24*7@gmail.com");
    // ####################################


    // contact us data handle
    const [contactUsHading] = useState("YouWe Fashion Contact Us");

    return (
        <Context.Provider value={{ appName, TopBannerHeading, TopBannerParagraph, TopBannerImg, FooteText, Phone, mail, contactUsHading }}>
            {props.children}
        </Context.Provider>
    );
}

export default AppContext;
