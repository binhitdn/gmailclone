import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import ButtonNewEmail from '../components/ButtonNewEmail';

type ItemProps = {
  id: number;
  title: string;
  content: string;
  name: string;
  time: string;
  color: string;
};

const ListItem = ({title, content, name, time, color}: ItemProps) => {
  return (
    <TouchableOpacity style={styles.listItemContainer}>
      <View style={styles.listItemLeft}>
        <View style={[styles.avatar, {backgroundColor: color}]}>
          <Text style={styles.avatarText}>{name.charAt(0)}</Text>
        </View>
        <View style={styles.listItemTextContainer}>
          <Text style={styles.listItemTitle}>{title}</Text>
          <Text style={styles.listItemContent}>{content}</Text>
        </View>
      </View>
      <View style={styles.listItemRight}>
        <Text style={styles.listItemTime}>{time}</Text>
        <Icon name="star" size={20} style={styles.listItemStar} />
      </View>
    </TouchableOpacity>
  );
};

const data: ItemProps[] = [
  {
    id: 1,
    title: 'Hello World',
    content: 'Welcome to IMPL company.The leading company ReactNative',
    name: 'Binh',
    time: '1:43 PM',
    color: '#f00',
  },
  {
    id: 2,
    title: 'Hello World',
    content: 'Welcome to IMPL company.The leading company ReactNative',
    name: 'Phuc',
    time: '1:43 PM',
    color: 'blue',
  },
  {
    id: 3,
    title: 'Hello World',
    content: 'Welcome to IMPL company.The leading company ReactNative',
    name: 'Trang',
    time: '1:43 PM',
    color: 'orange',
  },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Icon name="menu" size={25} style={styles.menuIcon} />
          <TextInput placeholder="メールを検索" style={styles.searchInput} />
          <View style={styles.profileIconContainer}>
            <Text style={styles.profileIconText}>B</Text>
          </View>
        </View>
        <View style={styles.emailContainer}>
          <Text style={styles.emailTitle}>受信トレイ</Text>
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <ListItem
                id={item.id}
                title={item.title}
                content={item.content}
                name={item.name}
                time={item.time}
                color={item.color}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <ButtonNewEmail />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  searchContainer: {
    height: 55,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  menuIcon: {
    paddingHorizontal: 20,
    color: '#000',
  },
  searchInput: {
    flex: 1,
  },
  profileIconContainer: {
    height: 37,
    width: 37,
    position: 'absolute',
    right: 10,
    borderRadius: 50,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileIconText: {
    fontSize: 20,
    color: '#fff',
  },
  emailContainer: {
    paddingVertical: 15,
  },
  emailTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  listContainer: {
    flex: 1,
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listItemLeft: {
    flex: 1,
    flexDirection: 'row',
  },
  listItemRight: {
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    gap: 16,
  },
  listItemTitle: {
    fontSize: 16,
    color: '#000',
  },
  listItemContent: {
    marginTop: 0,
    width: '60%',
    color: '#000',
  },

  listItemTime: {
    color: '#000',
  },
  listItemStar: {
    color: '#000',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontSize: 20,
  },
  listItemTextContainer: {
    marginLeft: 20,
  },
});

export default HomeScreen;
