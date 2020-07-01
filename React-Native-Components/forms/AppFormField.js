import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({name,...otherProps}){
    const {setFieldTouched,handleChange,errors,touched} = useFormikContext();

    return(
        <>

        <AppTextInput
            // autoCapitalize="none"
            // autoCorrect={false}
            // icon="lock"
            // textContentType="password"
            onBlur ={()=>setFieldTouched(name)}
            onChangeText={handleChange(name)}
            {...otherProps}

            // placeholder="Password"
                                >

        </AppTextInput>

        <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
        
    )
}

export default AppFormField;