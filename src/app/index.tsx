import { View } from "react-native";
import TextComponent from "../components/TextComponent";
import ViewComponent from "../components/ViewComponent";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";
import CardComponent from "../components/CardComponent";
import DynamicContent from "../components/DynamicContent";
import CarCard from "../components/CarCard";
import InlineStyle from "../components/InlineStyle";
import InternalStyle from "../components/InternalStyle";
import ExternalStyle from "../components/ExternalStyle";
import NameComponent from "../components/NameComponent";
import AgeComponent from "../components/AgeComponent";
import XHandleComponent from "../components/XHandleComponent";  
import FavSubjectComponent from "../components/FavSubjectComponent";

const Index = () => {
  return (
    <View>
      <NameComponent/>
      <AgeComponent/>
      <XHandleComponent/>
      <FavSubjectComponent/>
    </View>
  );
};

export default Index;