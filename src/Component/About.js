import React from 'react'
import { colors } from '../Assets/theme'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { images } from '../Assets/image'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import Header from './Header'
export default function About() {
    const data = [
        {
            question: "1. What is Homeatz?",
            answer: `
            Homeatz is an online marketplace connecting Home Chefs with customers. Broadly speaking, it facilitates the following:
1.	Order by 9pm for next day lunch and dinner
2.	Last Minute deals (Coming soon!)
3.	Party orders (Coming soon!)

Our App brings ‘Home Recipes’ to the users using state-of-the-art technology

Home Chefs save on time and take more orders ($) due to
- Hugely simplified cooking and packaging process
- 1 click logistics feature
- Automated payments feature

Other 'initial' benefits include
- Performance based Search Algorithm
- Seller landing page with social sharing option
- Personalised product page with rating & reviews

2.	How does Homeatz work?
Getting started is easy! Use the search-bar to checkout your favourite dish / cuisine / chef or simply scroll through the diverse array of chefs and their cuisines by clicking on the ‘Order from Chef Menu’ on the homepage.

When you find something you like, start adding dishes to your cart to begin building your order. Select your next day delivery time at checkout. 

On your delivery day, freshly prepared food will arrive at your door (12pm for lunch and 6pm for dinner). Just heat, eat, and repeat!

3.	Do you deliver in my neighbourhood?
Yes, we deliver island wide.

4.	Will my food be delivered hot or cold?
Your food would arrive mild hot (just like from any other food apps in Singapore). 

Feel free to heat them up or put them in the refrigerator to enjoy later—completely up to you! Just heat, eat…and repeat! :)

5.	Will my food be fresh?
Absolutely! In practice your food would be sent out for delivery as soon as it is freshly prepared.

6.	Does Homeatz have a website?
Yes but it is just for brief introduction. You will need the iOS/Android app in order to place your order.

7.	Can I read customer reviews for each Chef?
Yes. You can view ratings and reviews for each chef by visiting their dish selection page.

8.	What if I have a question that’s not listed here?
You can always get in touch with us! Checkout the ‘Contact us’ section in the side menu of the app. We would be glad to hear from you and reply within a few hours.

            `
        },
        {
            question:"PLACING AN ORDER",
            answer:`
            1.	When do I have to place my order?
You can order BY 9pm for next day lunch and dinner.

Any order placed AFTER 9pm would be delivered the day after tomorrow.

2.	How much do I pay?
You pay the selling price of the dish as listed on the app by our chefs for delivery to your desired location in India.

3.	Can I contact a Chef directly?
No. If there is something specific you would like to say or ask of a particular Homeatz Chef, please ‘Contact us’ and we will happily pass along your message!

4.	How big are the portion sizes?
Portion sizes vary, but the average dish is usually enough for one serving. Portion sizes are stated in every dish description on the app. You can also buy additional sides and desserts to enjoy with your dish.

5.	Can I order from multiple Chefs at a time?
Currently, we only allow for users to order from one chef per order. While you cannot order from multiple chefs in one order, you can place multiple orders for the same delivery day and generally, these orders will be delivered as per our standard delivery times.

6.	Why don’t I see a Chef that I’ve ordered from previously on the Homeatz app?
Chefs set their own schedules and availability. So, if you do not see a chef you have previously ordered, it is probably because this chef is taking a small break from cooking. To inquire about the availability of a specific chef, feel free to ‘Contact us’.

7.	Can I request that my dish be made without certain ingredients?
At this time, we are unable to relay individual customization requests to our chefs. Chefs try their best to list all the ingredients they use in each of their meals, so we recommend you try to find dishes that satisfy both your personal preferences and dietary needs.

8.	What types of payments do you accept?
We accept all major credit cards. If you have any issues with completing your transaction, please send us a message via the ‘Contact us’ section in the side menu of the app and we'll happily assist you!
`
        }
    ]
    const { handleSubmit, control, formState: { errors }, } = useForm();
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
            <Header />
            <div style={{
                display: "flex",
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
                    About Homeatz
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