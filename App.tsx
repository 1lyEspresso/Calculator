/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Dimensions,
  StyleProp,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from './src/component/button';

type ButtonType = {
  val: string | number,
  type: 'math' | 'number' | 'logic'
}

const App = () => {
  const [result, setResult] = useState('')
  const [textResult, setResultText] = useState('')

  const buttons: Array<ButtonType> = [
    {val: 'Del', type: 'logic'},
    {val: 'C'  , type: 'logic'},
    {val: 0  ,   type: 'number'},
    {val: '+',   type: 'math'},
    {val: 1,     type: 'number'},    
    {val: 2,     type: 'number'},    
    {val: 3,     type: 'number'}, 
    {val: '-',   type: 'math'},   
    {val: 4,     type: 'number'},    
    {val: 5,     type: 'number'},    
    {val: 6,     type: 'number'}, 
    {val: '*',   type: 'math'},   
    {val: 7,     type: 'number'},      
    {val: 8,     type: 'number'},    
    {val: 9,     type: 'number'}, 
    {val: '/',   type: 'math'},
    {val: '=',   type: 'logic'},       
    {val: '.',   type: 'math'},            
  ]
  // const buttonsMath: Array<ButtonType> = [
  //   {val: '+', type: 'math'},
  //   {val: '-', type: 'math'},
  //   {val: '*', type: 'math'},
  //   {val: '/', type: 'math'},
  //   {val: '.', type: 'math'},
  // ]
  // const buttonOther: Array<ButtonType> = [
  //   {val: 'Del', type: 'logic'},
  //   {val: 'C'  , type: 'logic'},
  //   {val:   0  , type: 'number'},
  // ]


  const resultText = (button: ButtonType) => {
    
    let newResult = '';
    const lastString = textResult.slice(textResult.length-1);   // lay ky tu cuoi
    const newString = textResult.substring(0,textResult.length-1);  // cat ky tu cuoi
    let nextString = button.val;

    if(!parseInt(lastString) && lastString !== '0' && typeof nextString === typeof lastString) {
      newResult = newString + nextString;
      }
    else{
      newResult = textResult + nextString;
    }
    setResultText(newResult);

    if(button.val === 'Del' || button.val === 'C'){
      return(
        handleNotNumber(button)
      )
    }

    if(button.val === '='){
      return(
        calculate()
      )
    }
  }
   
  // const equal = (text: string|number) =>{
  //   return(
  //     calculate()
  //   )
  // }

  // các nút chức năng
  const handleNotNumber = (button:ButtonType) =>{
    if(button.val === 'C'){
      setResultText('');
      setResult('0')
    }
    else if(button.val === 'Del'){
      setResultText(textResult.slice(0,-1));
    } 
  };

  // xử lý tính toán dáu =
  function calculate(){
    let lastArr = textResult[textResult.length-1];
    if(!parseInt(lastArr) && lastArr !== '0') {
      setResult('Syntax Error')
    }
    else {
      let result = eval(textResult).toString();
      setResult(result)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultScreen}>
        <Text style={{fontSize:40,color:'white'}}>{textResult}</Text>
        <Text style={{fontSize:40, color:'white'}}>{result}</Text>
      </View>

      <View style={styles.button}>
        {/* <View style={styles.btnNum}>
            <View style={{flexDirection:'row'}}>
              <Text>
                {buttonOther.map((button)=>{
                  return(
                    <Text>
                      <Button title={button.val} onSelected={()=>{handleNotNumber(button)}}/>
                    </Text>
                  )
                })}
              </Text>
            </View>
            <View>
              <Text>
                {buttonsNumber.map((button) =>{
                  return(
                    <Text>
                      <Button title={button.val} onSelected={()=>{resultText(button)}}/>
                    </Text>
                  )
                })}
              </Text>
              <Button style={{backgroundColor:'lightgreen', width: Dimensions.get('screen').width*3/4}} title={'='} onSelected={(text)=>{equal(text)}}/>
            </View>
            
            
        </View>

        <View style={styles.btnMath}>
          <Text>
              {buttonsMath.map((button) =>{
                return(
                  <Text>
                    <Button style={{backgroundColor:'orange'}} title={button.val} onSelected={()=>{resultText(button)}}/>
                  </Text>
                )
              })}
            </Text>
            </View> */}
        <Text>
          {buttons.map((button: ButtonType)=>{
            return(
              <Text>
                <Button title={button.val}  onSelected={()=>{resultText(button)}} 
                        style={button.type==='math' ? {backgroundColor:'#32ebee'} : button.val==='=' ? {backgroundColor:'green', width:Dimensions.get('screen').width*3/4}:{}}
                />
              </Text> 
            )
          })}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'grey'
  },
  resultScreen:{
    height:100, 
    justifyContent:'flex-end', 
    alignItems:'flex-end',
    flex: 4,
    backgroundColor: 'black'
  },
  button:{
    flex:6,
    justifyContent:'flex-end'
  },
  btnNum:{
    flex:3,
  },
  btnMath:{
    flex:1
  },
  btn:{
    backgroundColor:'orange',
  }
});
export default App;


