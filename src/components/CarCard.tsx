import { View, Text, Image, Pressable, Alert } from 'react-native'
import React from 'react'

const CarCard = () => {

  const CarPrice = "200,000";
  const CarName = "Lamborghini";
  const CarRating = "3.5";
  const CarImageWidth = "100%";
  const CarImageHeight = 300;

  return (
    <View style={{ margin: 15,}}>
      <View style={{ alignItems: "flex-start", borderWidth:3, borderRadius: 15, backgroundColor: "black"}}>
        <Text 
          style={{fontSize:30, padding: 15, color: "white", fontWeight: "bold"}}>
            ${CarPrice}
        </Text>
      </View>
      <View
        style={{paddingTop: 20,}}>
        <Image 
          source={require("../assets/car.jpg")} 
          style={{width: CarImageWidth, height: CarImageHeight, borderRadius: 3,}}/>
      </View>

      <View
        style={{paddingTop:20, flexDirection: "row", alignItems: "center",}}>
        <Text style={{fontSize: 28, fontWeight: "bold", marginRight: 100,}}>
          {CarName}
        </Text>
        <Text style={{fontSize: 20, fontWeight:"normal"}}>
          Rating: {CarRating}
        </Text>

      </View>

      <View
        style={{paddingTop:25, flexDirection: "column", alignItems: "flex-start",}}>
          <Text
            style={{fontSize: 20, fontWeight: "normal",}}>
              Description: This impressive Lamborghini will certainly turn heads.         
          </Text>
      </View>

      <Pressable onPressIn={()=> Alert.alert("The Car has been Purchased!")}>

        <View
          style={{borderRadius: 15, marginTop: 20, padding: 10, flexDirection: "column", alignItems: "center", backgroundColor: "black", width: "100%",}}>
            <Text
              style={{color:"white", fontWeight:"bold", fontSize:28,}}>Add To Cart
            </Text>
        </View>

      </Pressable>
    </View>

  );
};

export default CarCard;