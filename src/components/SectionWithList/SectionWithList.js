import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import styles from './SectionWithlist.style';
import Icons from '../../assets/icons';
const headers = [
  { key: 'cast', title: 'Top Casts', rightType: 'icon' },
  { key: 'trailers', title: 'Trailers', rightType: 'icon' },
  { key: 'photos', title: 'Photos', rightType: 'icon' },
  { key: 'comments', title: 'Commments', rightType: 'text' },
];

const SectionWithlist = ({
  header,
  data,
  renderItem,
  keyExtractor,
  horizontal = false,
  contentContainerStyle,
  scrollEnabled = true,
  showsHorizontalScrollIndicator = false,
  sectionKey,
}) => {
  const headerItem = headers.find(h => h.key === sectionKey);
  return (
    <View style={styles.sectionWrapper}>
      {headerItem && (
        <View style={styles.text_container}>
          <View style={styles.divider} />
          <Text style={styles.title}>{headerItem.title}</Text>

          <View style={styles.rightContainer}>
            {headerItem.rightType === 'icon' ? (
              <>
                <Image source={Icons.arrowRight} style={styles.arrowIcon} />
                <Image source={Icons.arrowLeft} style={styles.arrowIcon} />
              </>
            ) : (
              <>
                <Image source={Icons.plus} style={styles.arrowIcon} />
                <Text style={styles.rightText}>Comments</Text>
                <Text style={styles.rightText}>View All</Text>
              </>
            )}
          </View>
        </View>
      )}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={horizontal}
        scrollEnabled={scrollEnabled}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        contentContainerStyle={contentContainerStyle}
      />
    </View>
  );
};

export default SectionWithlist;
