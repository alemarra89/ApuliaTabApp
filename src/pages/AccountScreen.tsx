import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import React from "react"
import { Button, Text, View } from "react-native"
import { TabParams } from "../../App";

type Props = BottomTabScreenProps<TabParams, 'Account'>;

const AccountScreen: React.FC<Props> = (props: Props) => {

    const goHome = () => {
        props.navigation.navigate('Home');
    };

    return (
        <View>
            <Text>Ciao, sono xxx</Text>
            <Button
                title="Vai alla Home"
                onPress={goHome}
            />
        </View>
    )
}

export default AccountScreen;