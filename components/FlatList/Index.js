import { FlatList } from "react-native";
import React from "react";

const Flat= ({FlatList, itemList, item})=>{
    return(
        <FlatList
            itemList={itemList}
            item={item}
        />

    )
}
export default Flat;