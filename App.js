/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,TextInput,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [getText, setText] = useState("");
  const[getList, setList] = useState([ ]);

  const addHandler = () => {
    setList([
      ...getList, 
      {key:Math.random().toString() , data: getText}
    ]);
    setText(" ");
  }

  const removeItem = (itemKey) => {
    setList(list => getList.filter(item => item.key != itemKey));
  }

  const showScrollItems = (
    <ScrollView style= {styles.scrollview}>
        {getList.map((item, index)=> {return(
          <TouchableOpacity  
          key={item.key}
          activeOpacity={0.6}
        
          >
          <View style= {styles.scrollViewItems}>
        <Text style= {styles.scrollviewText}>{index + 1}.{item.data}</Text>
            <TouchableOpacity 
            onPress= {() => removeItem(item.key)}>
              
            <View style={styles.crossTextContainer}>
              <Text style= {styles.crossviewText}>X</Text>
            </View>
            </TouchableOpacity>

          </View>
          </TouchableOpacity>)
        })}
        </ScrollView>
  );
  const emptyScrollView = (
    <View style = {{padding:30}}>
      <Text style= {{fontSize:32, fontStyle:"italic", color: "grey"}}>No todo Items!</Text>
    </View>
  );

  return (
    <>
    <View style = {styles.container}>
      <Text style= {styles.title}>Todo</Text>
      <View style= {styles.inputcontainer}>
        <TextInput style= {styles.textcontainer} placeholder= "Enter Item"
        
        onChangeText={text => setText(text) }
        value= {getText}
        ></TextInput>
        <Button 
        title = "Add"
        onPress={addHandler}
        disabled={getText.length <= 0} />
      </View>
    
      {getList.length <= 0 ? emptyScrollView : showScrollItems}
    </View>
    
    </>
  );
};

const styles = StyleSheet.create({
  crossTextContainer:{
              backgroundColor:"lightblue",
              width:20,
              padding:2,
              justifyContent:"center",
              alignItems:"center",
              fontWeight:"bold" 

  },
  crossviewText:{
    fontSize:18,
    color:"red"
    
  },
  scrollviewText:{
    fontSize:18,
    color:"white"
  },
  scrollview:{
    width:"100%",
    padding:5,
    margin:20
  },
  scrollViewItems:{
    backgroundColor:"orange",
    margin:5,
    padding:10,
    borderRadius:15,
    flexDirection:"row",
    justifyContent:"space-between"

  },
  container:{
    flex:1,
    alignItems:"center",
    //justifyContent:"center"
    padding:50
  },
  inputcontainer:{
    flexDirection:"row",
    width:"70%",
    justifyContent:"space-between",
    alignItems: "flex-end"
    
  },
  textcontainer:{
    //borderWidth:2,
    borderColor:"red",
    borderBottomWidth:2,
    width:"80%",
    marginRight: 20,
    //borderRadius: 40,
    fontSize: 20,
    padding: 10
  },
  title:{
    fontSize:50,
    color:"grey"
  }
});

export default App;
