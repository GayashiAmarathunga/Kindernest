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