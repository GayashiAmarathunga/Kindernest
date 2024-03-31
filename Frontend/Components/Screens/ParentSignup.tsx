import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native'
import React, { useState } from 'react'
import { supabase } from '../../lib/supabase'


const ParentSignup = ({ navigation }) => {
    const [parentName, setParentName] = useState('')
    const [childName, setChildName] = useState('')
    const [kindergartenLevel, setKindergartenLevel] = useState('')
    const [classLevel, setClassLevel] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')




    async function handleSignup() {
        if (password !== confirmPassword) {
            Alert.alert("Passwords do not match")
            return;
        }

        const { data, error } = await supabase.auth.signUp(
            {
                email: email,
                password:  password,
                options: {
                    data: {
                        role: 'parent',
                        parent_name: parentName,
                        child_name: childName,
                        kindergarten_level: kindergartenLevel,
                        class: classLevel,
                        date_of_birth: dateOfBirth
                    }
                }
            }
        )

        if (error) {
            Alert.alert(error.message)
        }
        if (!error) {
            navigation.navigate('PHome')
        }
    }