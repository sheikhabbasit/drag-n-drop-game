/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {countries} from '../Constants/Countries';

function Flatlists(): JSX.Element {
  return (
    <SafeAreaView>
      <FlatList
        data={countries}
        numColumns={2}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Flatlists;
