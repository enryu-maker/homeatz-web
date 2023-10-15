import React from 'react'
import { colors } from '../Assets/theme'
import { LazyLoadComponent } from 'react-lazy-load-image-component'
import { images } from '../Assets/image'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form';
import Header from './Header'

export default function Fraud() {
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
                    Report a potential fraud
                </p>
            </div>
            <div style={{
                display: "flex",
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
                    height: "80vh",
                    width: "50vw",
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
                                        width: "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline:"none"
                                    }}
                                    placeholder='Your Name*'
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
                                        width: "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline:"none"

                                    }}
                                    placeholder='Your Email Address*'
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
                                        width: "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline:"none"
                                    }}
                                    placeholder='Your Mobile*'
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
                        name='person'
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
                                        width: "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline:"none"

                                    }}
                                    placeholder='Name of person / Organization against whome concern is made*'
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
                        name='city'
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
                                        width: "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: colors.darkGrey,
                                        outline:"none"

                                    }}
                                    placeholder='City*'
                                    // value={passwordText}
                                    onChangeText={(text) => {
                                        onChange(text);
                                    }}
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
                                        height: 100,
                                        width: "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        padding: 10,
                                        color: colors.darkGrey,
                                        outline:"none"
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
                    <p
                        style={{
                            textDecoration: 'none',
                            marginBlock: 0,
                            color: colors.black,
                            fontSize: 12,
                            textAlign: 'left',
                            fontFamily: "BalsamiqSans-Italic",
                            cursor: 'pointer',
                            width: "45vw"
                        }}>
                        This reporting channel is used to provide an opportunity to report your concerns related to suspected fraud or suspected violation of the Code of Conduct (COC) of Eventish.
                        <br />
                        <br /> Please note that you should not use this channel to report events / instances other than misconduct related to suspected fraud and suspected violation of COC.
                        <br />
                        <br /> For any concern / complaint relating to your order, please reach out to our customer care team using the chat option.\n Eventish expects that reports made through this channel are made in good faith and are legitimate concerns that you believe should be investigated. All reports submitted will be given careful attention
                    </p>

                    <button
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
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "50vh",
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        boxShadow: "5px 5px 10px #88888850",
                        padding: 10,
                        borderRadius: 8,
                        width: "25vw",
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