import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
 
const numberWithCommas = (n) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
 
const DetailMovieScreen = (props) => {
  const { route } = props;
  const movie = route.params.item;
 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: movie.imageLink }}
        resizeMode="contain"
      />
      <View style={styles.infoBox}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.meta}>Year: {movie.year}</Text>
        <Text style={styles.meta}>Rating: {'⭐'.repeat(movie.rating)}</Text>
        <Text style={styles.meta}>
          Viewers: {numberWithCommas(movie.viewers)}
        </Text>
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  poster: {
    width: 220,
    height: 320,
    borderRadius: 12,
    marginBottom: 20,
    backgroundColor: '#ddd',
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#f0f4ff',
    borderRadius: 12,
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  meta: {
    fontSize: 16,
    marginBottom: 6,
    color: '#333',
  },
});
 
export default DetailMovieScreen;