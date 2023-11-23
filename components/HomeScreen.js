import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, { id: Date.now(), title: newTodo }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = () => {
    const updatedTodos = [...todos];
    updatedTodos[editIndex] = { ...updatedTodos[editIndex], title: newTodo };
    setTodos(updatedTodos);
    setEditMode(false);
    setEditIndex(null);
    setNewTodo('');
  };

  const handleEdit = (index, title) => {
    setEditMode(true);
    setEditIndex(index);
    setNewTodo(title);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.title}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => handleEdit(index, item.title)} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2} // Set the number of columns
        columnWrapperStyle={styles.columnWrapper}
      />
      {editMode ? (
        <View style={styles.editInputContainer}>
          <TextInput
            style={styles.input}
            value={newTodo}
            onChangeText={(text) => setNewTodo(text)}
            placeholder="Edit todo"
          />
          <Button title="Update" onPress={updateTodo} />
        </View>
      ) : (
        <View style={styles.addInputContainer}>
          <TextInput
            style={[styles.input, { backgroundColor: '#f2f2f2' }]} // Lighter color for input
            value={newTodo}
            onChangeText={(text) => setNewTodo(text)}
            placeholder="Enter a new todo"
          />
          <Button title="Add Todo" onPress={addTodo} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addInputContainer: {
    marginBottom: 20,
  },
  editInputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  todoItem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    height: 120,
  },
  todoText: {
    flex: 1,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: 'lightblue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'salmon',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;
