import React from 'react';
import { StyleSheet,Image} from 'react-native';

import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({

    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("Password")
})

function LoginScreen(props){


    return(
        <Screen style={styles.container}>
            <Image 
                style = {styles.logo} 
                source = {require("../assets/logo-red.png")}/>

            <Formik 
            
                initialValues={{email:'',password:''}}
                onSubmit={values=>console.log(values)}
                validationSchema={validationSchema}>

                    {({handleChange,handleSubmit,errors})=>(

                        <>

                                <AppTextInput
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="email"
                                    keyboardType="email-address"
                                    onChangeText={handleChange("email")}
                                    placeholder='Email'
                                    textContentType='emailaddress'

                                />
                                <AppText style = {{color:'red'}}>
                                    {errors.email}
                                </AppText>

                                <AppTextInput
                                autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    textContentType="password"
                                    secureTextEntry 
                                    onChangeText={handleChange("password")}
                                    placeholder="Password"
                                >

                                </AppTextInput>
                                <AppText style = {{color:'red'}}>
                                    {errors.password}
                                </AppText>

                                <AppButton
                                    title="Login"
                                    onPress={handleSubmit}

                                />
                        
                        </>

                    )}

            </Formik>
        </Screen>


    )
}

const styles = StyleSheet.create({


    container:{
        padding:10,
    },
    logo:{
        width: 80,
        height:80,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20,

    }

})

export default LoginScreen;