import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { ShowMovie } from '../components/MovieComponent';
import { movieData } from '../../data/MovieData';

const byRatingDesc = (a, b) => b.rating - a.rating;
const byViewersDesc = (a, b) => b.viewers - a.viewers;
 
const HomeScreen = (props) => {
  const { navigation } = props;
 
  const [recommended, setRecommended] = useState([]);     
  const [mostViewed, setMostViewed] = useState([]);       
  const [allRecommended, setAllRecommended] = useState([]);
  const [allMostViewed, setAllMostViewed] = useState([]);
 
  useEffect(() => {
    const sortedRating = [...movieData].sort(byRatingDesc);
    const sortedViewers = [...movieData].sort(byViewersDesc);
 
    setAllRecommended(sortedRating);
    setAllMostViewed(sortedViewers);
    setRecommended(sortedRating.slice(0, 3));
    setMostViewed(sortedViewers.slice(0, 3));
  }, []);
 
  const SectionHeader = ({ title, onSeeAll }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {onSeeAll && (
        <TouchableOpacity onPress={onSeeAll}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
 
  return (
    <FlatList
      data={recommended}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingBottom: 24 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailMovie', { item })}
        >
          <ShowMovie
            image={{ uri: item.imageLink }}
            title={item.title}
            year={item.year}
            rating={item.rating}
            viewers={item.viewers}
            isHome={false}
          />
        </TouchableOpacity>
      )}
      ListEmptyComponent={
        <View style={styles.empty}>
          <Text>No items in this category.</Text>
        </View>
      }
      ListHeaderComponent={
        <View>
          <SectionHeader
            title="Most Viewed"
            onSeeAll={() =>
              navigation.navigate('MostViewed', { allMostViewed })
            }
          />
          <FlatList
            horizontal
            data={mostViewed}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingHorizontal: 8 }}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('DetailMovie', { item })
                }
              >
                <ShowMovie
                  image={{ uri: item.imageLink }}
                  title={item.title}
                  year={item.year}
                  rating={item.rating}
                  viewers={item.viewers}
                  isHome={true}
                />
              </TouchableOpacity>
            )}
          />
          <SectionHeader
            title="Recommended"
            onSeeAll={() =>
              navigation.navigate('Recommended', { allRecommended })
            }
          />
        </View>
      }
    />
  );
};
 
const styles = StyleSheet.create({
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 8,
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    fontSize: 14,
    color: '#1a73e8',
  },
  empty: {
    alignItems: 'center',
    margin: 16,
  },
});
 
export default HomeScreen;