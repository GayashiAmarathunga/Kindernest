import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'

const Home = ({navigation}) => {

    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
          setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
          setSession(session)
        })


      }, [])

      