import React from 'react'
import { colors } from '../Assets/theme'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { images } from '../Assets/image'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import Header from './Header'
import useMediaQuery from '../Constants/useMediaQuery'
import { Helmet } from 'react-helmet'
export default function Contact() {
    const { handleSubmit, control, formState: { errors }, } = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
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
                <title>Contact Homeatz</title>
                <meta name="description" content="Have questions, feedback, or need assistance? Contact Homeatz. We're here to help you." />
            </Helmet>
            <Header/>
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
                    Contact Us
                </p>
            </div>
            <div style={{
                display: "flex",
                flexDirection:mobile?"column":"row",
                width: "90vw",
                justifyContent: "space-evenly",
                alignItems: "center",
                alignSelf: "center",
                marginTop:"2vh"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 20,
                    height: "50vh",
                    width:mobile?"90vw": "50vw",
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
                                        height: 35,
                                        width:mobile?"90%": "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: "lightgray"
                                    }}
                                    placeholder='Full Name*'
                                    // value={passwordText}
                                    onChangeText={(text) => {
                                        onChange(text);
                                    }}
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
                                        height: 35,
                                        width:mobile?"90%": "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: "lightgray"
                                    }}
                                    placeholder='Email Address*'
                                    // value={passwordText}
                                    onChangeText={(text) => {
                                        onChange(text);
                                    }}
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
                        name='mobile'
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
                                        height: 35,
                                        width:mobile?"90%": "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: "lightgray"
                                    }}
                                    placeholder='Mobile*'
                                    // value={passwordText}
                                    onChangeText={(text) => {
                                        onChange(text);
                                    }}
                                />
                                {errors?.mobile && (
                                    <p style={{

                                    }}>
                                        {errors?.mobile?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <Controller
                        name='message'
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
                                <textarea
                                    style={{
                                        height:mobile?80: 100,
                                        marginBlock:mobile? 10 : 0,
                                        width:mobile?"90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        padding: 10,
                                        color: "lightgray"
                                    }}
                                    placeholder='Type Text*'
                                    // value={passwordText}
                                    onChangeText={(text) => {
                                        onChange(text);
                                    }}
                                />
                                {errors?.message && (
                                    <p style={{

                                    }}>
                                        {errors?.message?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
                    <button
                        style={{
                            border: "none",
                            backgroundColor: colors.iconColor,
                            padding: 10,
                            fontFamily: "BalsamiqSans-Regular",
                            fontSize: 18,
                            color: colors.white,
                            width: 200,
                            borderRadius: 8
                        }}>
                        Submit Feedback
                    </button>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    height:"50vh",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "5px 5px 10px #88888850",
                        padding: 10,
                        borderRadius: 8,
                        width:mobile?"90vw": "25vw",
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
                            Issue with your food?
                        </p>
                        <p
                            style={{
                                textDecoration: 'none',
                                marginBlock: 0,
                                color: colors.black,
                                fontSize: 16,
                                textAlign: 'left',
                                fontFamily: "BalsamiqSans-Regular",
                                cursor: 'pointer',
                            }}>
                            Click on the 'Support' or 'Online help' section in your app to connect to our customer support team.
                        </p>
                    </div>
                </div>
            </div>
            <div style={{
                marginTop: "30vh",
            }}>
                <Footer />
            </div>
        </div>
    )
}