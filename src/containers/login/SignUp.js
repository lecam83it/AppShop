//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Picker,
  Dimensions,
} from "react-native";
import UserInput from "../../components/login/UserInput";
import {
  COLOR_APP_BACKGROUND,
  BORDER_COLOR,
  HO_TEN,
  DIA_CHI,
  DON_VI,
  MA_SO_KINH_DOANH,
  MA_SO_THUE,
  SO_DIEN_THOAI,
  PROVINCE,
  DISTRICT,
  COMMUNE,
  SIGN_UP,
} from "../../Constant";

// create a component
class SignUp extends Component {
  static navigationOptions = {
    title: SIGN_UP
  };
  constructor(props) {
    super(props);
    this.state = {
      province: "",
      district: "",
      commune: ""
    };
    list = [PROVINCE,"Hà Nội", "Đà Nẵng", "Thừa Thiên Huế"];
  }

  render() {
    return (
      <View style={styles.contentWrapper}>
        <View />
        <View>
          <UserInput placeholder={HO_TEN} />

          <UserInput placeholder={DON_VI} />

          <View style={styles.wrapperPicker}>
            <Text style={styles.textName}>Địa Chỉ</Text>
            <View style={styles.wrapperHorizontalPicker}>
            
              <Picker
                style={styles.pickerSelected}
                selectedValue={this.state.commune}
                prompt={COMMUNE}
                onValueChange={(val, pos) => this.setState({ commune: val })}
              >
                {list.map(data => (
                  <Picker.Item key={data} label={data} value={data} />
                ))}
              </Picker>
              <Picker
                style={styles.pickerSelected}
                selectedValue={this.state.district}
                prompt={DISTRICT}
                onValueChange={(val, pos) => this.setState({ district: val })}
              >
                {list.map(data => (
                  <Picker.Item key={data} label={data} value={data} />
                ))}
              </Picker>
              <Picker
                style={styles.pickerSelected}
                selectedValue={this.state.province}
                prompt={PROVINCE}
                onValueChange={(val, pos) => this.setState({ province: val })}
              >
                {list.map(data => (
                  <Picker.Item key={data} label={data} value={data} />
                ))}
              </Picker>
            </View>
          </View>

          <UserInput placeholder={MA_SO_KINH_DOANH} />

          <UserInput placeholder={MA_SO_THUE} />

          <UserInput placeholder={SO_DIEN_THOAI} />

          <TouchableOpacity style={styles.borderButton}>
            <Text style={styles.textButton}>Đăng Ký</Text>
          </TouchableOpacity>
        </View>
        <View />
      </View>
    );
  }
}

var {height, width} = Dimensions.get('window');
// define your styles
const styles = StyleSheet.create({
  contentWrapper: {
    flex: 10,
    justifyContent: "space-between",
    backgroundColor: COLOR_APP_BACKGROUND
  },
  wrapperHorizontal: {
    marginTop: 5,
    margin: 5,
    flexDirection: "row",
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  wrapperHorizontalPicker: {  
    flexDirection: "row",
    backgroundColor: "white"
  },
  textName: {
    flex: 1,
    fontSize: 15,
    marginLeft: 11
  },
  inputData: {
    flex: 3,
    fontSize: 15
  },
  borderButton: {
    marginTop: 5,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    alignSelf: "center"
  },
  textButton: {
    fontSize: 20,
    color: "green",
    padding: 5
  },
  pickerSelected: { flex: 1 },
  wrapperPicker:{
    marginTop: 5,
    margin: 5,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    backgroundColor: "white",
    height: height / 8,
  }
});

//make this component available to the app
export default SignUp;
