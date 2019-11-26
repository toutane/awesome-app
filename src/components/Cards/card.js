import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Thumbnail } from "native-base";
import { Ionicons } from "@expo/vector-icons";

import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";
import { CardContext } from "../../contexts/CardContext";

import CardInfo from "./cardInfo";

export default Card = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);
  const { cardViewer, cardLover, addToRecentSearch, deleteCard } = useContext(
    CardContext
  );

  handleCard = (card, back, search) => {
    props.navigation.navigate("CardView", {
      cardData: card,
      headerData: back,
      handleHeart: handleHeart
    });
    currentUserId !== "" &&
      search &&
      addToRecentSearch(card.id, currentUserData.searches, card.searched);
    cardViewer(card.id, card.views, card.viewers);
  };
  handleHeart = card => {
    authenticated
      ? cardLover(card.id, card.loves, card.lovers)
      : alert("You must be authenticated to love this card ! 🙅‍♂️💔");
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          marginTop: props.horizontal ? 0 : 30,
          marginLeft: 32,
          marginRight: props.horizontal ? (props.latest ? 32 : 0) : 0,
          height: 200,
          width: 160,
          paddingHorizontal: 15,
          backgroundColor:
            props.item.color !== "default"
              ? props.item.color
              : props.theme.gray6,
          borderRadius: 10,
          justifyContent: "center",
          shadowOpacity: 0.15,
          shadowRadius: "10px",
          shadowColor: props.theme.fontColor
        }}
        onPress={() => handleCard(props.item, props.back, props.isSearching)}
      >
        <Ionicons
          name="ios-close"
          size={30}
          color={"white"}
          style={{ position: "absolute", top: 10, right: 15 }}
          onPress={() => deleteCard(props.item.id)}
        />
        <Text
          style={{
            fontFamily: "sf-display-bold",
            fontSize: 26,
            color: "white",
            bottom: 20
          }}
        >
          {props.item.title}
        </Text>
        <CardInfo
          {...props}
          handleHeart={handleHeart}
          currentUserId={currentUserId}
        />
      </TouchableOpacity>
    </View>
  );
};
