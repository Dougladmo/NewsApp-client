import { View, Text, Image } from 'react-native'
import { createClient } from 'pexels';
import { useEffect, useState } from 'react';


const NewsScreen = ( { route } ) => {
  const [img, setImg] = useState('')

  const client = createClient('q3APBtVL5k0ncEaWVRe80uOkhWTvGY6auRayuX6altSp2H20wVhkEgNk');
  const query = `${route.params?.title}`;
  
  useEffect(() => {
    client.photos.search({ query, per_page: 1 })
    .then((photos) => {
      setImg(photos.photos[0].url)
      console.log(img)
    });
  }, [])


  return (
    <View>
      <View className=' bg-red-700 py-5'>
        <Text className='text-3xl text-center font-sans font-light uppercase tracking-widest text-slate-50'>  Notícia </Text>
      </View>
      <View className='bg-white mt-6'>
      <Text className='px-8 pt-8 text-red-700 text-2xl font-bold text-center'>  {route.params?.title} </Text>
        <Text className='px-8 pt-3 text-sm text-gray-500'>{route.params?.content}</Text>
        <Image
          source={{uri: 'http://i.vimeocdn.com/portrait/58832_300x300.jpg'}}
        />
        <Text className=' p-8 mt-6 text-base text-justify leading-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque dolore odio repellendus debitis voluptatibus aspernatur unde! Recusandae repellendus veritatis quam. Est voluptatibus et asperiores vero repudiandae incidunt aspernatur? Quidem, voluptatem!</Text>
      </View>
    </View>
  )
}

export default NewsScreen