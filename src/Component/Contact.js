import React from 'react'
import { colors } from '../Assets/theme'
import Footer from './Footer'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form';
import Header from './Header'
import useMediaQuery from '../Constants/useMediaQuery'
import { Helmet } from 'react-helmet'
import { TailSpin } from 'react-loader-spinner';
export default function Contact() {
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
            axios.post('https://api-nerdtech.homeatz.in/submitfeedback/', {
                name: data.name,
                email: data.email,
                phone: data.phone,
                feedback: data.feedback
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
                <title>Contact Homeatz</title>
                <meta name="description" content="Have questions, feedback, or need assistance? Contact Homeatz. We're here to help you." />
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
                    Contact Us
                </p>
            </div>
            <div style={{
                display: "flex",
                flexDirection: mobile ? "column" : "row",
                width: "90vw",
                justifyContent: "space-evenly",
                alignItems: "center",
                alignSelf: "center",
                marginTop: "2vh"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 20,
                    height: "50vh",
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
                                        height: 35,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: "darkgray"
                                    }}
                                    type='text'
                                    placeholder='Full Name*'
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
                                        height: 35,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: "darkgray"
                                    }}
                                    placeholder='Email Address*'
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
                                        height: 35,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        paddingInline: 10,
                                        color: "darkgray"
                                    }}
                                    placeholder='Mobile*'
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
                        name='feedback'
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
                                        height: mobile ? 80 : 100,
                                        marginBlock: mobile ? 10 : 0,
                                        width: mobile ? "90%" : "40vw",
                                        border: "2px solid lightGray",
                                        borderRadius: 6,
                                        fontFamily: "BalsamiqSans-Regular",
                                        fontSize: 18,
                                        padding: 10,
                                        color: "darkgray"
                                    }}
                                    placeholder='Type Text*'
                                    value={value}
                                    onChange={onChange}
                                />
                                {errors?.feedback && (
                                    <p style={{

                                    }}>
                                        {errors?.feedback?.message}
                                    </p>
                                )}
                            </>
                        )}
                    />
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
                        width: mobile ? "90vw" : "25vw",
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