import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ShowMovie } from '../components/MovieComponent';
 
const RecommendationScreen = (props) => {
  const { route } = props;
  const allRecommended = route.params.allRecommended;
 
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <FlatList
        data={allRecommended}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        numColumns={2}
        key={'rec-2'}
        renderItem={({ item }) => (
          <ShowMovie
            image={{ uri: item.imageLink }}
            title={item.title}
            year={item.year}
            rating={item.rating}
            viewers={item.viewers}
          />
        )}
      />
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: { padding: 8 },
});
 
export default RecommendationScreen;