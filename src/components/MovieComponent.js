import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
 
const numberWithCommas = (number) =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const ShowMovie = (props) => {
  const { image, title, year, rating, viewers, isHome } = props;
 
  return (
    <View style={[styles.card, { flex: isHome ? null : 1 }]}>
      <Image style={styles.poster} source={image} />
 
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
 
      {year ? <Text style={styles.meta}>📅 {year}</Text> : null}
 
      <Text style={styles.meta}>{'⭐'.repeat(rating || 0)}</Text>
 
      <Text style={styles.meta}>👁 {numberWithCommas(viewers || 0)}</Text>
    </View>
  );
};
 
const styles = StyleSheet.create({
  card: {
    margin: 8,
    width: 160,
    alignItems: 'center',
    borderColor: '#96ceb4',
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 12,
    backgroundColor: '#fff',
  },
  poster: {
    width: 120,
    height: 175,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#ddd',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  meta: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
  },
});