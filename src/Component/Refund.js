import React from 'react'
import { colors } from '../Assets/theme'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet'
export default function Refund() {
    const data = [
        {
            question: "",
            answer: "Initially we are planning cost on Delivery (COD), hence payment will be made against delivery of ordered items. Our home chefs in order to earn good name and fame shall be signing the agreement, to consider refund in case food quality or quantity has any issues or consider cancellation of order, if it is conveyed six hour in advance of scheduled delivery in case of tomorrow’s menu, or 48 hrs in advance for party orders, but yes for ATM (any time order) no cancellation is possible at short notice. In case any customer refuses accept delivery and do not pay, concerned chef may report to police and file an FIR."
        },
        {
            question: "",
            answer:"Homeatz offers a marketplace, it is not itself a Chef. The Service includes pricing assistance and delivery, but we are not a party to any purchase or sales transaction. We may also help facilitate the resolution of disputes between our Customers and Chefs, but Homeatz has no control over and does not guarantee (a) the existence, quality, safety, authenticity, or legality of Meals offered or sold on the Service; (b) the truth or accuracy of a Chef's content or listings on the Service; (c) the ability of a Chef to sell Meals through the Service and deliver Meals within required delivery windows; (d) the ability of Customers to pay for Meals purchased through the Service; or (e) that a Customer or Chef will actually complete a transaction, effectuate trouble-free delivery and shipping, or return a Meal through the Service."
        },
        {
            question: "",
            answer:"Each Chef is solely responsible for complying with all applicable laws, rules and regulations and standards, including but not limited to those pertaining to the preparation, sale, marketing, and packaging of all Meals ordered through Homeatz, and updating details and prices relating to the Meals offered. Each Chef is solely liable for the quality, safety, and freshness of its products, and Homeatz does not verify the credentials, representations, products, services or prices offered by any Chefs, and does not guarantee the quality of the product or services, or that Chefs or Meals comply with applicable laws. Homeatz will not be liable or responsible for any Meals provided by Chefs that are a cause of injury or that do not meet your expectations in any manner."
        },
        {
            question: "",
            answer:`Homeatz may enter into agreements with independent contractors (each a “Courier”) to provide delivery services. If a Chef chooses to use a Courier to deliver a Meal, Homeatz is not offering such delivery services and has no responsibility or liability for the actions or inactions of any Courier. Homeatz will not be liable or responsible for any delivery services provided by a Courier or any errors or misrepresentations made by them. Couriers are required to comply with all applicable laws, rules and regulations.
            (i) Chefs as Independent Contractors: Users of the Service acting in the capacity of a Chef do so in their personal capacity as an independent contractor and not as an employee of Homeatz. Chef, may not accept any directions issued by Homeatz pertaining to the goals to be attained and the results to be achieved by Chefs generally, but you shall be solely responsible for the manner and hours in which your services are performed; \n (ii) you are responsible for and will comply with all applicable laws and registration requirements;\n (iii) these Terms of Service do not create an association, joint venture, partnership, franchise, or employer/employee relationship between you and Homeatz, or you and a Customer;\n (iv) you will not represent yourself as an employee or agent of Homeatz or any Customer; \n (v) you will not be entitled to any of the benefits that a Homeatz may make available to its employees, such as vacation pay, sick leave, and insurance programs, including group health insurance or retirement benefits; and \n (vi) you are not eligible to recover contributor's compensation benefits in the event of injury. As a Chef, you will not engage a Customer in any way that may jeopardize your status as an independent contractor.`
        },
        {
            question: "",
            answer:"Homeatz does not control the behavior of users of the Service or the information or User Content (defined below) provided by other users. As a result, Homeatz does not guarantee or endorse the legality, authenticity, quality, or safety of any Meals offered or sold, the truth or accuracy of any listings, or the ability of Chefs to sell Meals or of Customers to buy Meals. We cannot assure that all transactions will be completed. Additionally, Homeatz does not guarantee the ability or intent of users to fulfill their obligations in any transactions. Homeatz reserves the right to delay the completion of any transaction for a reasonable period of time for purposes of fraud detection and otherwise protecting Homeatz and its users from illegal or wrongful activities or other violations of these Terms of Services. Commercial Use: Unless otherwise expressly authorized herein or in the Service, you agree not to display, distribute, license, perform, publish, reproduce, duplicate, copy, create derivative works from, modify, sell, resell, exploit, transfer or upload for any commercial purposes, any portion of the Service, use of the Service, or access to the Service."
        }
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
                <title>Homeatz Refund and Cancellation Policy</title>
                <meta name="description" content="Understanding our Refund and Cancellation Policy is essential. This policy explains when and how you can request refunds or cancel orders on Homeatz." />
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
                    HOMEATZ App Refund & Cancellation Policy
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