import { View } from "react-native";
import Body from './components/body'
import Header from './components/header';
import Footer from './components/footer';

export default function App(){
  return(
    <View style={{flex:1}}>
      <Header/>
      <Body/>
      <Footer/>
    </View>
  )
}