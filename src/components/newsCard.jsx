import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import React from 'react'

const NewsCard = ({ title, content }) => {

  const navigation = useNavigation();

  return (
    <View className='bg-white mt-6 p-8' >
      <Text onPress={() => navigation.navigate('News', {title: `${title}`, content: `${content}`})} className='text-red-700 text-2xl font-bold mb-2'>{title}</Text>
      <Text className='text-sm text-gray-500 mb-3' >{content}</Text>
    </View>
  )
}

export default NewsCard