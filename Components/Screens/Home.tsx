import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'
import { Session } from '@supabase/supabase-js'

const Home = ({navigation}) => {
