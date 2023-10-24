import React from 'react'
import { colors } from '../Assets/theme'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from "react-helmet";
export default function Shipping() {
    const data = [
        {
            question: "",
            answer: `Initially for delivery respective chef’s would arrange delivery themselves or the customer would himself collect, till a delivery module is operational. Finally app will have three provisions,\n 1- Chefs shall deliver, \n2- Customer shall collect themselves, \n3- Pick and drop in auto mode via app. Items shall be delivered in nicely packed ready to eat condition.`
        },
        {
            question: "Packaging :",
            answer:`Chefs agree to arrange their own packaging materials – ideally in the form of standard sized plastic boxes used by other popular food delivery platforms in
            Singapore. Chefs agree that it is their responsibility to pack and protect the food items for delivery and transit appropriately. They further understand that Homeatz and its delivery partner will not accept any liability for damages, breakage or any other temperature impacted damage on the delivery item due to any reasons, including directly or indirectly caused by poor packing whatsoever, which contravenes these requirements.`
        },
        {
            question: "Delivery :",
            answer:"Chefs and customers agree that while Homeatz will endeavour to deliver the Delivery Items within the indicated timeframe, any delivery times stated or agreed or represented are estimates only. Delivery times may be affected by a number of factors, including those outside of Homeatz and its partner’s control such failure of equipment, bad weather and/or traffic conditions. Third Party Distribution Channels."
        },
    ]
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Homeatz Shipping and Delivery Policy</title>
                <meta name="description" content="Learn about our shipping and delivery procedures at Homeatz. Find information on delivery areas, timeframes, and more." />
            </Helmet>
            <Header/>
            <div style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: colors.lightPink,
                width: "100vw",
                height: 250,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <p style={{
                    marginBlock: 0,
                    color: colors.logoPink,
                    fontSize: 40,
                    textAlign: 'center',
                    fontFamily: "BalsamiqSans-Bold",
                }}>
                    HOMEATZ App Shipping & Delivery Policy
                </p>
                <p style={{
                    marginBlock: 0,
                    color: colors.logoPink,
                    fontSize: 20,
                    textAlign: 'center',
                    fontFamily: "BalsamiqSans-Bold",
                }}>
                    Last updated: 20/10/2023
                </p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                width: "90vw",
                justifyContent: "space-evenly",
                alignItems: "center",
                alignSelf: "center",
                marginTop: 50,
            }}>
                {
                    data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "5px 5px 10px #88888850",
                                    padding: 25,
                                    borderRadius: 8,
                                    width: "80vw",
                                    justifyContent: "space-evenly",
                                    marginBottom: 20,
                                }}>
                                <p
                                    style={{
                                        textDecoration: 'none',
                                        marginBlock: 0,
                                        color: colors.black,
                                        fontSize: 20,
                                        fontWeight: 'bold',
                                        textAlign: 'left',
                                        fontFamily: "LEMONMILK-Bold",
                                        cursor: 'pointer',
                                    }}>
                                    {item?.question}
                                </p>
                                <p
                                    style={{
                                        textDecoration: 'none',
                                        marginBlock: 0,
                                        color: colors.black,
                                        fontSize: 16,
                                        textAlign: 'left',
                                        fontFamily: "BalsamiqSans-Regular",
                                    }}>
                                    {item?.answer?.split('\n').map(function (value, key) {
                                        return (
                                            <span key={key}>
                                                {value}
                                                <br />
                                            </span>
                                        )
                                    })
                                    }
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{
                marginTop: "30vh",
            }}>
                <Footer />
            </div>
        </div>
    )
}