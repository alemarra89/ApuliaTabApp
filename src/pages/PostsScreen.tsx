import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react"
import { Text, View } from "react-native"
import { TabParams } from "../../App";

type Props = BottomTabScreenProps<TabParams, 'Posts'>;

const PostsScreen: React.FC<Props> = (props: Props) => {
    return (
        <View>
            <Text>Pagina dei post</Text>
        </View>
    )
}

export default PostsScreen;