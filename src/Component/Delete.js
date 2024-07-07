import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { colors } from '../Assets/theme'
import Header from './Header';
import { useForm, Controller } from 'react-hook-form';
import useMediaQuery from '../Constants/useMediaQuery';
import { TailSpin } from 'react-loader-spinner';

const Delete = () => {
    const [confirmDelete, setConfirmDelete] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState('');
    const { handleSubmit, control, formState: { errors }, } = useForm();
    const mobile = useMediaQuery('(max-width: 768px)');
    const [loading, setLoading] = React.useState(false)

    const handleDelete = async () => {
        try {
            // Perform delete operation here, using fetch or Axios
            const response = await fetch('/api/delete-account', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any necessary authentication headers
                },
                body: JSON.stringify({}),
            });
            if (response.ok) {
                setDeleteStatus('Account deleted successfully.');
            } else {
                setDeleteStatus('Failed to delete account.');
            }
        } catch (error) {
            console.error('Error deleting account:', error);
            setDeleteStatus('Failed to delete account.');
        }
    };

    const toggleConfirmation = () => {
        setConfirmDelete(!confirmDelete);
    };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Homeatz - Your Culinary Connection to Local Home Chefs</title>
                <meta name="description" content="Learn more about Homeatz, our mission, and the people behind the platform. Discover how we're redefining the way you experience homemade cuisine in your neighborhood." />
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
                    Delete Homeatz Account
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
                    name='password'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: {
                            value: true,
                            message:
                                'Password Cannot be Empty',
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
                                placeholder='Password*'
                                value={value}
                                onChange={onChange}
                            />
                            {errors?.password && (
                                <p style={{

                                }}>
                                    {errors?.email?.message}
                                </p>
                            )}
                        </>
                    )}
                />
                                <Controller
                    name='password'
                    control={control}
                    defaultValue=''
                    rules={{
                        required: {
                            value: true,
                            message:
                                'Password Cannot be Empty',
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
                                placeholder='Password Again*'
                                value={value}
                                onChange={onChange}
                            />
                            {errors?.password && (
                                <p style={{

                                }}>
                                    {errors?.email?.message}
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
                                    placeholder='Reason for Delete Account*'
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
                                // onClick={() => SubmitForm()}
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
                           Account Delete Notice!
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
                                Once Account have been deleted no data can be recoverd please take not of it
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delete;
