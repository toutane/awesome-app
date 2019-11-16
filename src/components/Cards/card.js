import React, { useContext } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Thumbnail } from "native-base";

import { UserContext } from "../../contexts/UserContext";
import { CardContext } from "../../contexts/CardContext";

import CardInfo from "./cardInfo";

export default Card = props => {
  const { currentUserId } = useContext(UserContext);
  const { cardViewer, cardLover } = useContext(CardContext);

  handleCard = (card, back) => {
    props.navigation.navigate("CardView", {
      cardData: card,
      headerData: back
    });
    cardViewer(card.id, card.views, card.viewers);
  };
  handleHeart = card => {
    cardLover(card.id, card.loves, card.lovers);
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          // marginTop: 15,
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
        onPress={() => handleCard(props.item, props.back)}
      >
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
