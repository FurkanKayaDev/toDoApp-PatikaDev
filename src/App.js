import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import {SafeAreaView,ScrollView,StyleSheet,Text,View,TouchableOpacity, KeyboardAvoidingView, TextInput, Keyboard} from 'react-native';
import Task from './components/Task';
import styles from './app.styles';

function App() {
  
  const [taskItems, setTaskItems] = useState([]);
  const [task, setTask] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(taskItems.length);
  })
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }   
  const complateTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);  
    setTaskItems(itemsCopy);   
}
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <View style={styles.Header}>
          <Text style={styles.headerText}>Yapılacaklar</Text>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={styles.items}>
          {// Yapılacak işler
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => complateTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>)
            })
          }
        </View>
      </View>
      <View style={styles.writeWrapper}>
        <KeyboardAvoidingView >
          <TextInput style={styles.input} placeholder={'Yapılacak...'} placeholderTextColor='#808080' value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Kaydet</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

export default App;

