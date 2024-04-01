import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase } from '../../lib/supabase';
import axios from 'axios';