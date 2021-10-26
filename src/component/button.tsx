import React, {FC} from "react";
import { Dimensions, StyleProp, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Button: FC <{style?:StyleProp<any>, title: string | number, onSelected:(val:string|number)=>void}> = ({title, onSelected, style}) =>{
    const onPress = () =>{
        onSelected(title)
    }
    return(
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={[styles.button, style]}>
                
                <Text style={styles.textButton}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
        
    );
};

const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        borderColor:'lightgrey',
        width:Dimensions.get('screen').width/4,
        height:80,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#073d5f',
    },
    textButton:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white',
    },
});
export default Button;