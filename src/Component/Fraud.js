import React from 'react'
import { colors } from '../Assets/theme'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import Header from './Header'
import useMediaQuery from '../Constants/useMediaQuery'
import { Helmet } from "react-helmet";
import axios from 'axios'
import { TailSpin } from 'react-loader-spinner';
export default function Fraud() {
    const { handleSubmit, control, formState: { errors }, } = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
    const [loading, setLoading] = React.useState(false)
    React.useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    async function SubmitForm() {
        setLoading(true)
        await handleSubmit((data) => {
            axios.post('https://api-nerdtech.homeatz.in/submitgreivance/', {
                name: data.name,
                email: data.email,
                phone: data.phone,
                against: data.against,
                city: data.city,
                greivance: data.greivance,
            })
                .then(function (response) {
                    console.log(response);
                    alert("Feedback Submitted Successfully")
                    setLoading(false)
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Feedback Submission Failed")
                    setLoading(false)
                });
        }
        )();
    }
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Report an Issue or Provide Feedback</title>
                <meta name="description" content="Help us improve your experience on Homeatz by reporting issues or sharing your valuable feedback. Your input is important to us." />
            </Helmet>
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
                    Report a potential fraud
                </p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: mobile ? "column" : "row",
                width: "90vw",
                justifyContent: "space-evenly",
                alignItems: "flex-start",
                alignSelf: "center",
                marginTop: "2vh"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 20,
                    height: "100vh",
                    width: mobile ? "90vw" : "50vw",
                    justifyContent: "space-evenly",
                    alignItems: "flex-start"
                }}>
                    <Controller
                        name='name'
                        control={control}
                        defaultValue=''
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'Name Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: mobile ? 10 : 0,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none"
                                    }}
                                    placeholder='Your Name*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.name && (
                                    <p style={{

                                    }}>
                                        {errors?.name?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='email'
                        control={control}
                        defaultValue=''
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'Email Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: mobile ? 10 : 0,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none"

                                    }}
                                    placeholder='Your Email Address*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.email && (
                                    <p style={{

                                    }}>
                                        {errors?.email?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='phone'
                        control={control}
                        defaultValue=''
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'Mobile Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: mobile ? 10 : 0,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none"
                                    }}
                                    placeholder='Your Mobile*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.phone && (
                                    <p style={{

                                    }}>
                                        {errors?.phone?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='against'
                        control={control}
                        defaultValue=''
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'Person / Organization Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: mobile ? 10 : 0,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none"

                                    }}
                                    placeholder='Name of person / Organization against whome concern is made*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.against && (
                                    <p style={{

                                    }}>
                                        {errors?.against?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='city'
                        control={control}
                        defaultValue=''
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'City Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <input
                                    style={{
                                        height: mobile ? 50 : 35,
                                        marginBlock: mobile ? 10 : 0,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline: "none"

                                    }}
                                    placeholder='City*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.city && (
                                    <p style={{

                                    }}>
                                        {errors?.city?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='greivance'
                        control={control}
                        defaultValue=''
                        rules={{
                            required: {
                                value: true,
                                message:
                                    'Greivance Cannot be Empty',
                            },
                        }}
                        render={({ field: { onChange, value } }) => (
                            <>
                                <textarea
                                    style={{
                                        height: mobile ? 150 : 200,
                                        marginBlock: mobile ? 10 : 0,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        padding: 10,
                                        color: colors.darkGrey,
                                        outline: "none"
                                    }}
                                    placeholder='Type Text*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.greivance && (
                                    <p style={{

                                    }}>
                                        {errors?.greivance?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <p
                        style={{
                            textDecoration: 'none',
                            marginBlock: 10,
                            color: colors.black,
                            fontSize: 12,
                            textAlign: 'left',
                            fontFamily: "BalsamiqSans-Italic",
                            cursor: 'pointer',
                            width: mobile ? "90vw" : "45vw"
                        }}>
                        This reporting channel is used to provide an opportunity to report your concerns related to suspected fraud or suspected violation of the Code of Conduct (COC) of Homeatz.
                        <br />
                        <br /> Please note that you should not use this channel to report events / instances other than misconduct related to suspected fraud and suspected violation of COC.
                        <br />
                        <br /> For any concern / complaint relating to your order, please reach out to our customer care team using the chat option.\n Homeatz expects that reports made through this channel are made in good faith and are legitimate concerns that you believe should be investigated. All reports submitted will be given careful attention
                    </p>
                    {
                        loading ?
                            <TailSpin
                                color={colors.logoPink}
                                height={50}
                                width={50}
                                style={{
                                    alignSelf: "center"
                                }}
                            /> :
                            <button
                                onClick={() => SubmitForm()}
                                style={{
                                    border: "none",
                                    backgroundColor: colors.logoPink,
                                    padding: 10,
                                    fontFamily: "BalsamiqSans-Regular",
                                    fontSize: 18,
                                    color: colors.white,
                                    width: 200,
                                    borderRadius: 8
                                }}>
                                Submit
                            </button>
                    }
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    height: mobile ? "90vw" : "50vh",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "5px 5px 10px #88888850",
                        padding: 10,
                        borderRadius: 8,
                        width: mobile ? "80vw" : "25vw",
                        height: "18vh",
                        justifyContent: "space-evenly",

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
                            Disclaimer
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
                            Please use this form only for reporting potential frauds. For order or other general queries
                            <Link
                                to={'/contacts'}
                                style={{
                                    textDecoration: 'none',
                                    marginBlock: 0,
                                    color: "red",
                                    fontSize: 16,
                                    textAlign: 'left',
                                    fontFamily: "BalsamiqSans-Regular",
                                    cursor: 'pointer',
                                }}> contact us here. </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{
                marginTop: 50,
            }}>
                <Footer />
            </div>
        </div>
    )
}