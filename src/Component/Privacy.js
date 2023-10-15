import React from 'react'
import { colors } from '../Assets/theme'
import Header from './Header'
import Footer from './Footer'

export default function Privacy() {
    const data = [
        {
            question: "Introduction",
            answer: `
            Welcome to the app (the “App”) of Homeatz (“Homeatz,” “we,” “us,” or “our”). Homeatz provides an online marketplace in which personal chefs, caterers and other individuals can list, offer, sell and deliver food items and meal orders to the general public, and customers can browse and purchase Meals.
Your privacy is extremely important to us. This Privacy Policy explains what Personal Data (defined below) we collect, how we use and share that data, and your choices concerning our data practices.
Before using the Service or submitting any Personal Data to Homeatz, please review this Privacy Policy carefully and contact us via details available in the side menu of the app, if you have any questions. By using the Service, you agree to the practices described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not access the Site or otherwise use the Service.
            `
        },
        {
            question: "1. PERSONAL DATA WE COLLECT",
            answer:`
            We collect information that alone or in combination with other information in our possession could be used to identify you (“Personal Data”) as follows:
Personal Data You Provide: We collect Personal Data that you provide to Homeatz by (i) filling out required and optional profile information when signing up for the Service, or (ii) contacting us by e-mail. The Personal Data collected during these interactions may vary based on what you choose to share with us, but it will generally include name, e-mail address, telephone number, location and the financial information necessary to ensure payments can be processed by our payment processor Stripe, Inc. (“Stripe”). Accordingly, in addition to this Privacy Policy and our Terms of Service, information related to your purchases is also processed according to Stripe's services agreement and privacy policy.
Personal Data We Collect Through Our Social Media Pages: We have pages on social media sites like Instagram, Twitter, LinkedIn, and Facebook (“Social Media Pages”). When you interact with our Social Media Pages, we will collect Personal Data that you elect to provide to us, such as your contact details. In addition, the companies that host our Social Media Pages may provide us with aggregate information and analytics regarding the use of our Social Media Pages.
Personal Data We Receive Automatically From Your Use of the Service: When you visit, use and interact with the Service, we may receive certain information about your visit, use or interactions. For example, we may monitor the number of people that visit the Service, peak hours of visits, which page(s) you visit, which links you click, what text you enter, how your mouse moves around the Service, the domains you come from (e.g., google.com, facebook.com, etc.), broad geographical information, and navigation patterns. In particular, the following information is created and automatically logged in our systems:
• Device information: Includes name of the device, operating system. Information collected may depend on the type of device you use and its settings.
• Usage Information: We collect information about how you use our Service, such as the types of content that you view or engage with, the features you use, the actions you take, and the time, frequency and duration of your activities.

Analytics: We use Google Analytics, a web analytics service provided by Google, Inc. (“Google”). Google Analytics help us analyze how users use the Site and enhance your experience when you use the Site. For more information on how Google uses this data, go to www.google.com/policies/privacy/partners/.

Our third party service providers, including Facebook, may use cookies, pixels or other tracking technologies to collect information about your browsing activities over time and across different websites following your use of the App [and use that information to send targeted advertisements]. Our App currently does not respond to “Do Not Track” (“DNT”) signals and operates as described in this Privacy Policy whether or not a DNT signal is received. If we do respond to DNT signals in the future, we will update this Privacy Policy to describe how we do so.

            `
        },
        {
            question: "2. HOW WE USE PERSONAL DATA",
            answer:`
            We may use Personal Data for the following purposes:

• To provide the Service, including the online marketplace in which individuals can sell food items and meal orders to customers;
• To respond to your inquiries, comments, feedback or questions;
• To send administrative information to you, for example, information regarding the Service, requests for feedback, and changes to our terms, conditions, and policies;
• To analyze how you interact with our Service;
• To maintain and improve the content and functionality of the Service;
• To develop new products and services;
• To prevent fraud, criminal activity, or misuses of our Service, and to ensure the security of our IT systems, architecture and networks; and
• To comply with legal obligations and legal process and to protect our rights, privacy, safety or property, and/or that of our affiliates, you or other third parties.

Aggregated Information. We may aggregate Personal Data and use the aggregated information in an anonymized form to analyze the effectiveness of our Service, to improve and add features to our Service, and for other similar purposes. In addition, from time to time, we may analyze the general behavior and characteristics of users of our Services and share aggregated and anonymized information like general user statistics with prospective business partners. We may collect aggregated information through the Service and through other means described in this Privacy Policy.

Marketing. We may use your Personal Data to contact you to tell you about products or services we believe may be of interest to you. If at any time you do not wish to receive future marketing communications, you may contact us via ‘Contact Us’ section on the app. If you unsubscribe from our marketing lists, you will no longer receive marketing communications but we may still contact you regarding management of your account, other administrative matters, and to respond to your requests.

            `
        },
        {
            question: "3. SHARING AND DISCLOSURE OF PERSONAL DATA",
            answer:`
            In certain limited circumstances set forth below we may share your Personal Data with third parties without further notice to you, unless required by the law, as set forth below:

• Vendors and Service Providers: To assist us in meeting business operations needs and to perform certain services and functions, we may share Personal Data with vendors and service providers, including providers of hosting services, cloud services and other information technology services providers, email communication software and email newsletter services, advertising and marketing services, payment processors, customer relationship management and customer support services, and analytics services. Pursuant to our instructions, these parties will access, process or store Personal Data in the course of performing their duties to us. We take commercially reasonable steps to ensure our service providers adhere to the "Security Standards" we apply to your Personal Data (as detailed below).
• Business Transfers: If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of all or a portion of our assets, or transition of service to another provider, your Personal Data and other information may be shared in the diligence process with counterparties and others assisting with the transaction and transferred to a successor or affiliate as part of that transaction along with other assets.
• Legal Requirements: If required to do so by law or in the good faith belief that such action is necessary to (i) comply with a legal obligation, including to meet national security or law enforcement requirements, (ii) protect and defend our rights or property, (iii) prevent fraud, (iv) act in urgent circumstances to protect the personal safety of users of the Services, or the public, or (v) protect against legal liability.
• Affiliates: We may share Personal Data with our affiliates, meaning an entity that controls, is controlled by, or is under common control with Homeatz. Our affiliates may use the Personal Data we share in a manner consistent with this Privacy Policy.
            `
        },
        {
            question: "4. DATA RETENTION",
            answer: "We keep Personal Data for as long as reasonably necessary for the purposes described in this Privacy Policy, while we have a business need to do so, or as required by law (e.g. for tax, legal, accounting or other purposes), whichever is the longer."
        },
        {
            question: "5. UPDATE YOUR INFORMATION",
            answer: "Please log in to your account or ‘Contact Us’ if you need to change or correct your Personal Data."
        },
        {
            question: "6. LINKS TO OTHER WEBSITES",
            answer: "The Service may contain links to other websites not operated or controlled by Homeatz, including social media services (“Third Party Sites”). The information that you share with Third Party Sites will be governed by the specific privacy policies and terms of service of the Third Party Sites and not by this Privacy Policy. By providing these links we do not imply that we endorse or have reviewed these sites. Please contact the Third Party Sites directly for information on their privacy practices and policies."
        },
        {
            question: "7. SECURITY",
            answer: "You use the Service at your own risk. We implement commercially reasonable technical, administrative, and organizational measures to protect Personal Data both online and offline from loss, misuse, and unauthorized access, disclosure, alteration or destruction. However, no Internet or e-mail transmission is ever fully secure or error free. Therefore, you should take special care in deciding what information you send to us via the Service or e-mail. Please keep this in mind when disclosing any Personal Data to Homeatz via the Internet. In addition, we are not responsible for circumvention of any privacy settings or security measures contained on the Service, or third party websites."
        },
        {
            question: "8. YOUR CHOICES",
            answer: "In certain circumstances providing Personal Data is optional. However, if you choose not to provide Personal Data that is needed to use some features of our Services, you may be unable to use those features."
        },
        {
            question: "9. CHANGES TO THE PRIVACY POLICY",
            answer: "The Service, and our business may change from time to time. As a result we may change this Privacy Policy at any time. When we do we will post an updated version on this page, unless another type of notice is required by the applicable law. By continuing to use our Service or providing us with Personal Data after we have posted an updated Privacy Policy, or notified you by other means if applicable, you consent to the revised Privacy Policy and practices described in it."
        },
        {
            question: "10. CONTACT US",
            answer: "If you have any questions about our Privacy Policy or information practices, please feel free to contact us via the options available in the side menu of the app"
        },
        {
            question: "Date of Last Revision: June 15, 2021"
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
                    HOMEATZ App Privacy Policy
                </p>
                <p style={{
                    marginBlock: 0,
                    color: colors.logoPink,
                    fontSize: 20,
                    textAlign: 'center',
                    fontFamily: "BalsamiqSans-Bold",
                }}>
                    Last updated: 15/06/2021
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
                                    // height: "18vh",
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