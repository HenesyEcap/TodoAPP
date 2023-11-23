import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const AddEditTodoScreen = ({ route, navigation }) => {
  const { onSave, todoIndex, todo, dateTime } = route.params || {};
  const [newTodo, setNewTodo] = useState(todo || '');
  const [isDateTimePickerVisible, setDateTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dateTime || null);

  useEffect(() => {
    setNewTodo(todo || '');
    setSelectedDate(dateTime || null);
  }, [todo, dateTime]);

  const showDateTimePicker = () => {
    setDateTimePickerVisibility(true);
  };

  const hideDateTimePicker = () => {
    setDateTimePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    hideDateTimePicker();
    setSelectedDate(date);
  };

  const saveTodo = () => {
    onSave(newTodo, selectedDate);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={newTodo}
        onChangeText={(text) => setNewTodo(text)}
        placeholder="Enter a new todo"
      />
      <Button title="Set Reminder" onPress={showDateTimePicker} />
      <DateTimePickerModal
        isVisible={isDateTimePickerVisible}
        mode="datetime"
        date={selectedDate || new Date()}
        onConfirm={handleConfirm}
        onCancel={hideDateTimePicker}
      />
      <Button title="Save" onPress={saveTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default AddEditTodoScreen;
