import React from 'react';
import { View, Text, Button } from 'react-native'
import { ListComponentProps } from './listComponentProps.props'
import {styles} from './style'


interface ListComponentState {
    itemData?: any
    getModal?: boolean

}

export class ListComponent extends React.Component<ListComponentProps, ListComponentState> {

    constructor(props) {
        super(props);
        this.state = {
            itemData: this.props.data || [],
            getModal: this.props.showModal || false
        }
    }


    componentWillReceiveProps = (newProps) => {
        if (newProps && newProps.data) {
            this.setState({
                itemData: newProps.data
            })
        }
    }

    /** Params: details
     *  Send details data to screen level & show/hide state for Modal container
     */
    callModal(details) {
       this.props.showModal(true)
       this.props.detailsData(details)
    }

    render() {
        const dataList = this.state.itemData
        return (
            <View>
                {
                    dataList.map((item) => {
                        return (
                            <View style={styles.mainViewStyle}>
                                <Text style={styles.textStyle}>{`NAME : ${item.name}`}</Text>
                                <Text style={styles.textStyle}>{`WEBSITE : ${item.website}`}</Text>
                                <View style={styles.buttonContainerStyle}>
                                    <Button
                                        title="Show Details"
                                        onPress={() => { this.callModal(item) }}
                                    />
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

export default ListComponent;