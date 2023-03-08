import { Component } from "react";
import { Button, Text, View, StyleSheet, TextInput,  } from "react-native";

export default class Counter extends Component {
  state = {
    count: 0,
    step: 2,
  };
  encrementar() {
            this.setState({
                count: this.state.count + this.state.step,
            });
     }
        
  decrementar() {
    if(this.state.count > this.props.min || this.props.min == undefined){
        this.setState({
            count: this.state.count - this.state.step,
        });
    }
    
  }
  alteraStep(text) {
    this.setState ({step: parseInt(text)});
  }
  render() {
    return (
      <View style={styles.contador}>
        <TextInput
          value={this.state.step.toString()}
          onChange={(e) => {
            this.alteraStep(e.nativeEvent.text);
          }}
        />

        <TextInput
        defaultValue={this.state.step.toString()}
        onChange={(valor) => {
          this.alteraStep(valor);
        }}
        />

        <Text>Contador: {this.state.count} </Text>
        <Button onPress={() => this.encrementar()} title="+" />
        <Button onPress={() => this.decrementar()} title="-" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contador: {
    flexDirection: "row",
    alignItems: "center",
  },
});
