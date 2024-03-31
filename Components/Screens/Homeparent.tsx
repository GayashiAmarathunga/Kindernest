import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from '../../lib/supabase'
import axios from 'axios'
import { ActivityIndicator } from 'react-native-paper'

const Homeparent = ({ navigation }) => {