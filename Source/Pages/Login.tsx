/* eslint-disable prettier/prettier */
import React from 'react';
import {Formik, Field} from 'formik';
import {
  SafeAreaView,
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';

const {width, height} = Dimensions.get('screen');

function Login(props): JSX.Element {
  return (
    <SafeAreaView>
      <View>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={() => props.navigation.navigate('Flatlists')}>
          {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
            <React.Fragment>
              <Field>
                {() => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    placeholderTextColor="#ccc"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                    value={values.email}
                    onBlur={handleBlur('email')}
                    returnKeyType="none"
                  />
                )}
              </Field>
              <View>
                <Field>
                  {() => (
                    <TextInput
                      style={styles.input}
                      returnKeyType="none"
                      secureTextEntry={true}
                      placeholder="Enter Password"
                      placeholderTextColor="#ccc"
                      keyboardType="default"
                      autoCapitalize="none"
                      onSubmitEditing={handleSubmit}
                      onChangeText={handleChange('password')}
                      value={values.password}
                      onBlur={handleBlur('password')}
                    />
                  )}
                </Field>
              </View>
              <Pressable
                android_ripple={{color: 'white'}}
                onPress={handleSubmit}
                style={styles.buttonWrapper}
                disabled={!isValid}>
                <Text>Login</Text>
              </Pressable>
            </React.Fragment>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: width,
    height: height,
  },
  parent: {
    flex: 1,
    backgroundColor: '#FDEFF4',
  },
  box: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 60,
  },
  heading: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#FF5C8D',
    margin: 20,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
  },
  focus: {
    borderColor: 'green',
    color: 'black',
    borderWidth: 1,
  },
  errorInput: {
    borderColor: 'red',
    color: 'red',
    borderWidth: 1,
  },
  input: {
    marginHorizontal: 20,
    padding: 8,
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 2,
    borderRadius: 5,
    height: height / 15,
  },
  passwordFlex: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 2,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    opacity: 0.7,
    height: height / 15,
  },
  passwordInput: {
    flex: 1,
    borderRadius: 5,
  },
  passwordIcon: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  showHideLabel: {
    color: 'black',
    marginHorizontal: 5,
  },
});
