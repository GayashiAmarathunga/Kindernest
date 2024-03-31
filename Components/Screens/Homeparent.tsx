import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import axios from 'axios'
import { ActivityIndicator } from 'react-native-paper'

const Homeparent = ({ navigation }) => {

    const [session, setSession] = useState<Session | null>(null)
    const [paymentStatus, setPaymentStatus] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Send GET request to check payment status
        axios.get(`${process.env.API_URL}/checkpay/${session?.user.email}`)
            .then(response => {
                const { message } = response.data;
                setPaymentStatus(message);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error checking payment status:', error);
                setLoading(false);
            });
    }, []);
